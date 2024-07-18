import {
  ReactElement, useState, useEffect, useRef
} from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

import Map from "@app/components/map";

import reactLogo from "@app/assets/react.svg";
import viteLogo from "@app/assets/vite.svg";

function App(): ReactElement {
  const [currentMarker, setCurrentMarker] = useState<{ lat: number, lng: number }>({ lat: 0, lng: 0 });
  const [timer, setTimer] = useState<number>(0);
  const [token, setToken] = useState<string>("");

  const tokenInputRef = useRef<HTMLInputElement>(null);

  const onTokenEnter = (): void => {
    const inputVal = tokenInputRef.current?.value;
    if (inputVal) {
      setToken(inputVal);
    }
  };

  useEffect(() => {
    const onPositionChange = (position: GeolocationPosition): void => {
      const {
        latitude: newLat,
        longitude: newLng
      } = position.coords;

      setCurrentMarker({ lat: newLat, lng: newLng });
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        onPositionChange,
        (error) => {
          console.error("Error obtaining location: ", error);
        },
        {
          enableHighAccuracy: true, // Use GPS if available
          timeout: 10000, // Maximum time to wait for a position
          maximumAge: 0 // Don't use a cached position
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [timer]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    const updateTimer = (): void => {
      setTimer(new Date().getTime());
      openNextTimer();
    };
    const openNextTimer = (): void => {
      clearTimeout(timeout);
      timeout = setTimeout(updateTimer, 5000);
    };

    openNextTimer();

    return (): void => {
      clearTimeout(timeout);
    };
  }, []);

  const timeStr = new Date(timer).toLocaleTimeString();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={ viteLogo } className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={ reactLogo } className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Location Tracking</h1>

      <div>
        {
          !token && (
            <form onSubmit={ onTokenEnter }>
              <div className="webflow-style-input">
                <input className="" type="text" placeholder="Enter your mapbox token" ref={ tokenInputRef }></input>
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="currentColor"
                    className="bi bi-arrow-return-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0
                  .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                  </svg>
                </button>
              </div>
            </form>
          )
        }
        {
          token && (
            <Map
              coordinate={ currentMarker }
              token={ token } />
          )
        }
      </div>
      <p className="read-the-docs">
        Time: { timeStr }
      </p>
    </>
  );
}

export default App;
