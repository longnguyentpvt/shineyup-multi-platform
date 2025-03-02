window.jarvisIndoor = (() => {})();

// Create a global object for the SDK
window.jarvisIndoor = (() => {
  let watchId = 0;
  let newCoordinateCallback;

  const onPositionChange = (pos) => {
    const { latitude, longitude } = pos.coords;

    if (newCoordinateCallback) {
      newCoordinateCallback(latitude, longitude);
    }
  };

  class Matrix {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = Array.from({ length: rows }, () => Array(cols).fill(0));
    }

    setData(...args) {
      if (args.length !== this.rows * this.cols) {
        throw new Error("Invalid number of arguments");
      }
      for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.cols; ++c) {
          this.data[r][c] = args[r * this.cols + c];
        }
      }
    }

    setIdentityDiag() {
      for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.cols; ++c) {
          this.data[r][c] = 0.0;
        }
        this.data[r][r] = 1.0;
      }
    }

    setIdentity() {
      if (this.rows !== this.cols) {
        throw new Error("Matrix must be square");
      }
      this.setIdentityDiag();
    }

    static matrixAdd(ma, mb, mc) {
      if (
        ma.cols !== mb.cols
        || mb.cols !== mc.cols
        || ma.rows !== mb.rows
        || mb.rows !== mc.rows
      ) {
        throw new Error("Matrix dimensions must match");
      }

      for (let r = 0; r < ma.rows; ++r) {
        for (let c = 0; c < ma.cols; ++c) {
          mc.data[r][c] = ma.data[r][c] + mb.data[r][c];
        }
      }
    }

    static matrixSubtract(ma, mb, mc) {
      if (
        ma.cols !== mb.cols
        || mb.cols !== mc.cols
        || ma.rows !== mb.rows
        || mb.rows !== mc.rows
      ) {
        throw new Error("Matrix dimensions must match");
      }

      for (let r = 0; r < ma.rows; ++r) {
        for (let c = 0; c < ma.cols; ++c) {
          mc.data[r][c] = ma.data[r][c] - mb.data[r][c];
        }
      }
    }

    subtractFromIdentity() {
      for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < r; ++c) this.data[r][c] = -this.data[r][c];
        this.data[r][r] = 1.0 - this.data[r][r];
        for (let c = r + 1; c < this.cols; ++c) this.data[r][c] = -this.data[r][c];
      }
    }

    static matrixMultiply(ma, mb, mc) {
      if (ma.cols !== mb.rows || ma.rows !== mc.rows || mb.cols !== mc.cols) {
        throw new Error("Matrix dimensions must match for multiplication");
      }

      for (let r = 0; r < mc.rows; ++r) {
        for (let c = 0; c < mc.cols; ++c) {
          mc.data[r][c] = 0.0;
          for (let rc = 0; rc < ma.cols; ++rc) {
            mc.data[r][c] += ma.data[r][rc] * mb.data[rc][c];
          }
        }
      }
    }

    // Other methods omitted for brevity, but include them as needed

    toString() {
      let result = "";
      for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.cols; ++c) {
          result += `[${this.data[r][c]}] `;
        }
        result += "\n";
      }
      return result;
    }
  }

  class KalmanFilter {
    constructor(stateDim, measureDim, controlDim) {
      this.F = new Matrix(stateDim, stateDim);
      this.H = new Matrix(measureDim, stateDim);
      this.Q = new Matrix(stateDim, stateDim);
      this.R = new Matrix(measureDim, measureDim);

      this.B = new Matrix(stateDim, controlDim);
      this.Uk = new Matrix(controlDim, 1);

      this.Zk = new Matrix(measureDim, 1);

      this.Xk_km1 = new Matrix(stateDim, 1);
      this.Pk_km1 = new Matrix(stateDim, stateDim);

      this.Yk = new Matrix(measureDim, 1);
      this.Sk = new Matrix(measureDim, measureDim);

      this.K = new Matrix(stateDim, measureDim);

      this.Xk_k = new Matrix(stateDim, 1);
      this.Pk_k = new Matrix(stateDim, stateDim);
    }

    predict() {
      Matrix.matrixMultiply(this.F, this.Xk_k, this.Xk_km1);
      Matrix.matrixMultiply(this.B, this.Uk, this.Xk_km1);
    }

    update() {
      // Simplified for brevity, see full implementation in TypeScript
    }
  }

  return {
    Matrix,
    KalmanFilter,
    /**
     * Starts tracking the user's location.
     * @param {Function} onPosition - A callback function that receives latitude and longitude.
     */
    startLocating: async (onPosition) => {
      if (watchId > 0) return;

      if ("geolocation" in navigator) {
        watchId = navigator.geolocation.watchPosition(
          onPositionChange,
          (error) => {
            console.error("Error obtaining location: ", error);
          },
          {
            enableHighAccuracy: true, // Use GPS if available
            // timeout: 10000, // Maximum time to wait for a position
            maximumAge: 0, // Don't use a cached position
          }
        );

        newCoordinateCallback = onPosition;
      } else {
        newCoordinateCallback = undefined;
        throw new Error("Geolocation is not available");
      }
    },

    /**
     * Stops tracking the user's location.
     */
    stopLocating: async () => {
      if (watchId > 0) {
        navigator.geolocation.clearWatch(watchId);
        watchId = 0;
      }
    },
  };
})();