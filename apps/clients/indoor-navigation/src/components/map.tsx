import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import { useEffect, useRef } from "react";

const DEFAULT_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0, 0]
      }
    }
  ]
};

const Map: React.FC<{ token: string, coordinate: { lat: number, lng: number } }> = ({ token, coordinate }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map>();

  useEffect(() => {
    if (!mapRef.current || !mapRef.current?.loaded()) return;
    const { lat, lng } = coordinate;

    const source = mapRef.current.getSource<GeoJSONSource>("dot-point");
    source?.setData({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [lng, lat]
          }
        }
      ]
    });

    mapRef.current?.flyTo({
      center: { lat, lng },
      speed: 2
    });
  }, [coordinate]);

  useEffect(() => {
    if (token) {
      // 1. init map
      mapboxgl.accessToken = token;

      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current!,
        style: "mapbox://styles/mapbox/streets-v12",
        zoom: 15
      });
      mapRef.current.addControl(new mapboxgl.FullscreenControl());

      const size = 100;

      const pulsingDot = {
        width: size,
        height: size,
        data: new Uint8ClampedArray(size * size * 4),
        context: null as CanvasRenderingContext2D | null,

        onAdd(): void {
          const canvas = document.createElement("canvas");
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext("2d");
        },

        render(): boolean {
          const duration = 1000;
          const t = (performance.now() % duration) / duration;

          const radius = (size / 2) * 0.3;
          const outerRadius = (size / 2) * 0.7 * t + radius;
          const { context } = this;
          if (!context) return false;

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
          );
          context.fillStyle = `rgba(255, 200, 200, ${ 1 - t })`;
          context.fill();

          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = "rgba(255, 100, 100, 1)";
          context.strokeStyle = "white";
          context.lineWidth = 2 + 4 * (1 - t);
          context.fill();
          context.stroke();

          this.data = context.getImageData(0, 0, this.width, this.height).data;

          mapRef.current!.triggerRepaint();

          return true;
        }
      };

      mapRef.current.on("load", async () => {
        mapRef.current?.addImage("walking", pulsingDot, { pixelRatio: 2 });

        mapRef.current?.addSource("dot-point", {
          type: "geojson",
          data: DEFAULT_GEOJSON
        });

        mapRef.current?.addLayer({
          id: "layer-with-dot",
          type: "symbol",
          source: "dot-point",
          layout: {
            "icon-image": "walking"
          }
        });
      });
    }

    return (): void => {
      mapRef.current?.remove();
    };
  }, [token]);

  return (
    <div ref={ mapContainerRef } id="map" style={ { height: "500px", width: "80vw" } } />
  );
};

export default Map;
