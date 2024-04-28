import './mapa.css'
import './../index.css'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer} from "react-leaflet";

export function Mapa(){

  const position = [40.46786,-3.64857]

  return(

      <div className='mapa-container'>

        <MapContainer center={position} zoom={18} style={{ height: '250px', width: '100%' }}>
          <TileLayer
            url="https://tile.thunderforest.com/transport/{z}/{x}/{y}@2x.png?apikey=6a45f6dce3954ca5913a23f97697fe3d"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>

  )

}