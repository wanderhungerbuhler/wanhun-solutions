import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import Image from 'next/image'
import { GoogleMapsOptions } from '@/app/utils/maps'

export function MapsWidgets() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`,
  })

  const positionMap = {
    lat: 40.6431118,
    lng: -8.6510275,
  }

  return (
    <div className="mt-9">
      <h3 className="text-2xl font-black text-primary">Localização</h3>
      <div className="mt-2 h-[215px] rounded-[10px] bg-white">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={positionMap}
            zoom={17}
            options={GoogleMapsOptions}
          >
            <Marker position={positionMap}></Marker>
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
      <span className="mt-2 block text-center text-xs font-normal text-primary">
        R. Conselheiro Luís de Magalhães 60, 3800-095 Aveiro
      </span>
    </div>
  )
}
