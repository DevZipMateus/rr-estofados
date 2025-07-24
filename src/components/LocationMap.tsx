
import React from 'react';

interface LocationMapProps {
  address: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ address }) => {
  // Encode the address for the Google Maps embed URL
  const encodedAddress = encodeURIComponent(address);
  
  // Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;
  
  // For now, we'll use the search URL which doesn't require an API key
  const searchUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.8947385902456!2d-49.076743!3d-22.315940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67c2b4d1c5c7%3A0x1e5b4b4b4b4b4b4b!2sAv.%20Duque%20de%20Caxias%2C%20253%20-%20Vila%20Mesquita%2C%20Bauru%20-%20SP%2C%2017014-340!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr`;

  return (
    <div className="w-full h-full">
      <iframe
        src={searchUrl}
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
