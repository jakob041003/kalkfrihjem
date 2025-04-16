
import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

interface WaterStation {
  navn: string;
  kalk: number;
  zone: {
    lat: number;
    lng: number;
    radius_km: number;
  };
}

interface SearchResult {
  address: string;
  station: WaterStation;
}

const waterStations: WaterStation[] = [
  {
    navn: "Århus Vandværk",
    kalk: 17,
    zone: { lat: 56.1629, lng: 10.2039, radius_km: 10 }
  },
  {
    navn: "København Vand",
    kalk: 21,
    zone: { lat: 55.6761, lng: 12.5683, radius_km: 10 }
  },
  {
    navn: "Odense Vand",
    kalk: 14,
    zone: { lat: 55.4038, lng: 10.4024, radius_km: 10 }
  }
];

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const WaterHardnessSearch: React.FC = () => {
  const [address, setAddress] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const apiKey = 'AIzaSyD4TSR6N2kKTQ5gvpgTd9uTN-SJrn5WRyc';
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}&components=country:DK`);
      const data = await response.json();

      if (data.status === 'OK' && data.results[0]) {
        const location = data.results[0].geometry.location;
        
        const foundStation = waterStations.find(station => {
          const distance = calculateDistance(
            location.lat,
            location.lng,
            station.zone.lat,
            station.zone.lng
          );
          return distance <= station.zone.radius_km;
        });

        if (foundStation) {
          setSearchResult({
            address: data.results[0].formatted_address,
            station: foundStation
          });
          toast({
            title: "Vandværk fundet!",
            description: `Kalkindhold for ${foundStation.navn}: ${foundStation.kalk} °dH`
          });
          setError(null);
        } else {
          setError("Vi kunne ikke finde et vandværk for denne adresse");
          toast({
            title: "Ingen match fundet",
            description: "Prøv en anden adresse eller kontakt dit lokale vandværk.",
            variant: "destructive"
          });
          setSearchResult(null);
        }
      } else {
        setError("Kunne ikke finde adressen");
        toast({
          title: "Adresse ikke fundet",
          description: "Tjek venligst adressen og prøv igen.",
          variant: "destructive"
        });
        setSearchResult(null);
      }
    } catch (err) {
      setError("Der opstod en fejl ved søgningen");
      toast({
        title: "Fejl ved søgning",
        description: "Prøv igen eller kontakt support.",
        variant: "destructive"
      });
      setSearchResult(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Skriv din adresse..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full"
          />
        </div>
        <Button 
          onClick={handleSearch}
          className="flex items-center gap-2"
        >
          <Search size={18} />
          Søg
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 mb-6">
          {error}
        </div>
      )}

      {searchResult && (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1" />
            <div>
              <p className="text-sm text-gray-600 mb-2">{searchResult.address}</p>
              <p className="font-semibold mb-1">{searchResult.station.navn}</p>
              <p className="text-lg">
                Kalkindhold: <span className="font-bold">{searchResult.station.kalk} °dH</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaterHardnessSearch;

