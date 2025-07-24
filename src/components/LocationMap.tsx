
import React from 'react';

interface LocationMapProps {
  address: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ address }) => {
  // Encode the address for the Google Maps embed URL
  const encodedAddress = encodeURIComponent(address);
  
  // Generate a basic Google Maps embed URL without API key
  // This uses the basic embed format that works for most addresses
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-49.0!3d-22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodedAddress}!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr`;

  return (
    <div className="w-full h-full">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
        title={`Mapa da localização: ${address}`}
      />
    </div>
  );
};

export default LocationMap;
