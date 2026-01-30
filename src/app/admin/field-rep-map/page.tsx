"use client";

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { DropdownField } from "@/components/Fields/DropdownField";
import { InputField } from "@/components/Fields/InputField";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Circle } from "@react-google-maps/api";

interface FieldRep {
  id: number;
  name: string;
  address: string;
  cellPhone: string;
  phone: string;
  inspectorId: string;
  distance: number;
  lat: number;
  lng: number;
  city: string;
  state: string;
  county: string;
}

interface ClusteredLocation {
  lat: number;
  lng: number;
  count: number;
  city: string;
  county: string;
}

const FindFieldReps = () => {
  const [searchFilters, setSearchFilters] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    radius: "50",
  });

  const [fieldReps, setFieldReps] = useState<FieldRep[]>([]);
  const [filteredReps, setFilteredReps] = useState<FieldRep[]>([]);
  const [clusteredLocations, setClusteredLocations] = useState<ClusteredLocation[]>([]);
  const [mapCenter, setMapCenter] = useState({ lat: 39.8283, lng: -98.5795 });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  // Mock data - each location is a separate cluster
  useEffect(() => {
    // Define 30+ separate locations with specific counts
    const predefinedClusters: ClusteredLocation[] = [
      // Large clusters (Red - 50+)
      { county: "Wayne", city: "Detroit", lat: 42.3314, lng: -83.0458, count: 60 },
      { county: "Cook", city: "Chicago", lat: 41.8781, lng: -87.6298, count: 75 },
      { county: "Los Angeles", city: "Los Angeles", lat: 34.0522, lng: -118.2437, count: 80 },
      
      // Medium clusters (Yellow - 11-50)
      { county: "Kings", city: "Brooklyn", lat: 40.6782, lng: -73.9442, count: 35 },
      { county: "Miami-Dade", city: "Miami", lat: 25.7617, lng: -80.1918, count: 25 },
      { county: "Harris", city: "Houston", lat: 29.7604, lng: -95.3698, count: 30 },
      { county: "Maricopa", city: "Phoenix", lat: 33.4484, lng: -112.0740, count: 28 },
      { county: "San Diego", city: "San Diego", lat: 32.7157, lng: -117.1611, count: 22 },
      { county: "Dallas", city: "Dallas", lat: 32.7767, lng: -96.7970, count: 20 },
      { county: "Santa Clara", city: "San Jose", lat: 37.3382, lng: -121.8863, count: 18 },
      { county: "Orange", city: "Orlando", lat: 28.5383, lng: -81.3792, count: 15 },
      { county: "Travis", city: "Austin", lat: 30.2672, lng: -97.7431, count: 24 },
      
      // Small clusters (Blue - ≤10)
      { county: "King", city: "Seattle", lat: 47.6062, lng: -122.3321, count: 10 },
      { county: "Multnomah", city: "Portland", lat: 45.5152, lng: -122.6784, count: 9 },
      { county: "Denver", city: "Denver", lat: 39.7392, lng: -104.9903, count: 8 },
      { county: "Salt Lake", city: "Salt Lake City", lat: 40.7608, lng: -111.8910, count: 7 },
      { county: "Clark", city: "Las Vegas", lat: 36.1699, lng: -115.1398, count: 10 },
      { county: "Hennepin", city: "Minneapolis", lat: 44.9778, lng: -93.2650, count: 8 },
      { county: "Milwaukee", city: "Milwaukee", lat: 43.0389, lng: -87.9065, count: 6 },
      { county: "Hamilton", city: "Cincinnati", lat: 39.1031, lng: -84.5120, count: 7 },
      { county: "Allegheny", city: "Pittsburgh", lat: 40.4406, lng: -79.9959, count: 9 },
      { county: "Suffolk", city: "Boston", lat: 42.3601, lng: -71.0589, count: 10 },
      { county: "Baltimore", city: "Baltimore", lat: 39.2904, lng: -76.6122, count: 8 },
      { county: "Davidson", city: "Nashville", lat: 36.1627, lng: -86.7816, count: 9 },
      { county: "Mecklenburg", city: "Charlotte", lat: 35.2271, lng: -80.8431, count: 7 },
      { county: "Fulton", city: "Atlanta", lat: 33.7490, lng: -84.3880, count: 10 },
      { county: "Jefferson", city: "Louisville", lat: 38.2527, lng: -85.7585, count: 6 },
      { county: "Jackson", city: "Kansas City", lat: 39.0997, lng: -94.5786, count: 8 },
      { county: "Douglas", city: "Omaha", lat: 41.2565, lng: -95.9345, count: 5 },
      { county: "Oklahoma", city: "Oklahoma City", lat: 35.4676, lng: -97.5164, count: 7 },
      { county: "Bernalillo", city: "Albuquerque", lat: 35.0844, lng: -106.6504, count: 6 },
      { county: "Pima", city: "Tucson", lat: 32.2226, lng: -110.9747, count: 5 },
      { county: "El Paso", city: "El Paso", lat: 31.7619, lng: -106.4850, count: 6 },
    ];

    // Set clusters directly
    setClusteredLocations(predefinedClusters);

    // Generate field reps based on clusters
    const mockFieldReps: FieldRep[] = [];
    let idCounter = 1;

    predefinedClusters.forEach((cluster) => {
      for (let i = 0; i < cluster.count; i++) {
        mockFieldReps.push({
          id: idCounter++,
          name: `${cluster.city} Rep ${i + 1}`,
          address: `${cluster.city}, ${10000 + Math.floor(Math.random() * 90000)}`,
          cellPhone: "810-516-1489",
          phone: "810-516-1489",
          inspectorId: `${2210 + idCounter}`,
          distance: Math.floor(Math.random() * 300) + 10,
          lat: cluster.lat + (Math.random() - 0.5) * 0.3,
          lng: cluster.lng + (Math.random() - 0.5) * 0.3,
          city: cluster.city,
          state: "US",
          county: cluster.county,
        });
      }
    });

    setFieldReps(mockFieldReps);
    setFilteredReps(mockFieldReps);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    let filtered = fieldReps;

    if (searchFilters.city) {
      filtered = filtered.filter((rep) =>
        rep.city.toLowerCase().includes(searchFilters.city.toLowerCase())
      );
    }

    if (searchFilters.state) {
      filtered = filtered.filter((rep) =>
        rep.state.toLowerCase().includes(searchFilters.state.toLowerCase())
      );
    }

    if (searchFilters.zipCode) {
      filtered = filtered.filter((rep) =>
        rep.address.includes(searchFilters.zipCode)
      );
    }

    if (searchFilters.radius) {
      const radiusNum = parseInt(searchFilters.radius);
      filtered = filtered.filter((rep) => rep.distance <= radiusNum);
    }

    setFilteredReps(filtered);

    // Recalculate clusters for filtered data
    const clusters = new Map<string, ClusteredLocation>();
    filtered.forEach((rep) => {
      const key = `${rep.county}`;
      if (clusters.has(key)) {
        const cluster = clusters.get(key)!;
        cluster.count += 1;
      } else {
        clusters.set(key, {
          lat: rep.lat,
          lng: rep.lng,
          count: 1,
          city: rep.city,
          county: rep.county,
        });
      }
    });
    setClusteredLocations(Array.from(clusters.values()));

    if (filtered.length > 0) {
      const avgLat = filtered.reduce((sum, rep) => sum + rep.lat, 0) / filtered.length;
      const avgLng = filtered.reduce((sum, rep) => sum + rep.lng, 0) / filtered.length;
      setMapCenter({ lat: avgLat, lng: avgLng });
    }
  };

  const getClusterColor = (count: number) => {
    if (count > 50) return "#EF4444"; // Red - Large clusters
    if (count > 10) return "#FCD34D"; // Yellow - Medium clusters
    return "#3B82F6"; // Blue - Small clusters
  };

  const getClusterRadius = (count: number) => {
    if (count > 50) return 60000; 
    if (count > 10) return 40000; 
    return 25000;
  };

  return (
    <div className="w-full">
      <div className="max-w-350 mx-auto">
        <div className="p-5 bg-medium-blue rounded-[10px] outline-1 outline-white/20 backdrop-blur-[2.50px] flex flex-col gap-5">
          {/* Header */}
          <div className="flex justify-start items-center">
            <h2 className="text-Black-000 text-2xl font-semibold font-['Plus_Jakarta_Sans'] leading-8">
              Find Field Reps 
            </h2>
          </div>

          {/* Search Section */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              {/* Search Filters */}
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                <div className="flex flex-col sm:flex-row flex-wrap justify-start items-center gap-1.5 w-full xl:w-auto">
                  <DropdownField
                    placeholder="Enter or Select Address"
                    name="address"
                    value={searchFilters.address}
                    onChange={handleInputChange}
                    className="w-full sm:w-60"
                  />
                  <DropdownField
                    placeholder="City"
                    name="city"
                    value={searchFilters.city}
                    onChange={handleInputChange}
                    className="w-full sm:w-28"
                  />
                  <DropdownField
                    placeholder="State"
                    name="state"
                    value={searchFilters.state}
                    onChange={handleInputChange}
                    className="w-full sm:w-28"
                  />
                  <InputField
                    placeholder="Zip Code"
                    name="zipCode"
                    type="text"
                    value={searchFilters.zipCode}
                    onChange={handleInputChange}
                    className="w-full sm:w-28"
                    customHeight="14"
                  />
                  <DropdownField
                    placeholder="Radius"
                    name="radius"
                    value={searchFilters.radius}
                    onChange={handleInputChange}
                    className="w-full sm:w-36"
                  />
                </div>

                <GlobalButton
                  type="button"
                  text="Search"
                  bgColor="bg-primary-blue"
                  onClick={handleSearch}
                  className="w-full xl:w-42"
                />
              </div>

              {/* Google Map */}
              <div className="flex flex-col gap-1.5">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={{
                      width: "100%",
                      height: "400px",
                      borderRadius: "10px",
                    }}
                    center={mapCenter}
                    zoom={4}
                    options={{
                      disableDefaultUI: false,
                      zoomControl: true,
                    }}
                  >
                    {clusteredLocations.map((cluster, index) => {
                      const color = getClusterColor(cluster.count);
                      const radius = getClusterRadius(cluster.count);
                      
                      return (
                        <div key={index}>
                          {/* Animated pulsing outer circle */}
                          <Circle
                            center={{ lat: cluster.lat, lng: cluster.lng }}
                            radius={radius * 1.5}
                            options={{
                              fillColor: color,
                              fillOpacity: 0.15,
                              strokeColor: color,
                              strokeOpacity: 0.3,
                              strokeWeight: 1,
                              zIndex: 1,
                            }}
                          />
                          {/* Main circle */}
                          <Circle
                            center={{ lat: cluster.lat, lng: cluster.lng }}
                            radius={radius}
                            options={{
                              fillColor: color,
                              fillOpacity: 0.6,
                              strokeColor: color,
                              strokeOpacity: 1,
                              strokeWeight: 3,
                              zIndex: 2,
                            }}
                          />
                          {/* Inner bright circle */}
                          <Circle
                            center={{ lat: cluster.lat, lng: cluster.lng }}
                            radius={radius * 0.5}
                            options={{
                              fillColor: "#FFFFFF",
                              fillOpacity: 0.4,
                              strokeColor: color,
                              strokeOpacity: 0.8,
                              strokeWeight: 2,
                              zIndex: 3,
                            }}
                          />
                        </div>
                      );
                    })}
                  </GoogleMap>
                ) : (
                  <div className="w-full h-96 bg-gray-200 rounded-[10px] flex items-center justify-center">
                    <p className="text-gray-500">Loading Map...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Field Reps Cards - 3 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredReps.slice(0, 50).map((rep) => (
              <div
                key={rep.id}
                className="p-4 bg-white rounded-[10px] -outline-offset-1 outline-zinc-100 flex flex-col justify-center gap-2.5"
              >
                <div className="flex justify-between items-center">
                  <div className="text-primary-blue text-base font-semibold font-['Plus_Jakarta_Sans'] leading-6">
                    {rep.name}
                  </div>
                  <div className="px-4 py-2 bg-Blue rounded-full border border-primary-blue flex justify-center items-center gap-2.5 bg-medium-blue">
                    <div className="text-Paragraph text-sm font-medium font-['Plus_Jakarta_Sans']">
                      {rep.distance} Miles
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-Paragraph text-sm font-normal font-['Plus_Jakarta_Sans']">
                    Address
                  </div>
                  <div className="text-Paragraph text-sm font-semibold font-['Plus_Jakarta_Sans'] text-right">
                    {rep.address}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-Paragraph text-sm font-normal font-['Plus_Jakarta_Sans']">
                    Cell Phone
                  </div>
                  <div className="text-Paragraph text-sm font-semibold font-['Plus_Jakarta_Sans']">
                    {rep.cellPhone}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-Paragraph text-sm font-normal font-['Plus_Jakarta_Sans']">
                    Phone
                  </div>
                  <div className="text-Paragraph text-sm font-semibold font-['Plus_Jakarta_Sans']">
                    {rep.phone}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-Paragraph text-sm font-normal font-['Plus_Jakarta_Sans']">
                    Inspector ID
                  </div>
                  <div className="text-Paragraph text-sm font-semibold font-['Plus_Jakarta_Sans']">
                    {rep.inspectorId}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindFieldReps;