
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface LocationMapProps {
  address: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ address }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-49.0743, -22.3159], // Coordenadas aproximadas de Bauru - SP
      zoom: 15,
    });

    // Add marker for the location
    new mapboxgl.Marker({
      color: '#eab308' // yellow-500 to match the design
    })
      .setLngLat([-49.0743, -22.3159])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
        <p className="text-sm text-gray-600 text-center">
          Para visualizar o mapa, insira seu token público do Mapbox:
        </p>
        <input
          type="text"
          placeholder="Token público do Mapbox"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          value={mapboxToken}
          onChange={(e) => setMapboxToken(e.target.value)}
        />
        <p className="text-xs text-gray-500 text-center">
          Obtenha seu token em: <a href="https://mapbox.com/" target="_blank" className="text-yellow-500 hover:underline">mapbox.com</a>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
    </div>
  );
};

export default LocationMap;
