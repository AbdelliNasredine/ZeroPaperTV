import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const IStyle = "mapbox://styles/nas-embad/ck462buq40ojb1dpp27g0xau0";
const IMap = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibmFzLWVtYmFkIiwiYSI6ImNrNHZ3NWNsZzBhcGUza3JwYzgwMnI2bjcifQ.3-qlI_rVEJG7RyF7GF52Eg",
});

function Map() {
  return (
    <IMap
      className="Map"
      center={[-2.234249, 31.604002]}
      zoom={[16.5]}
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-2.234249, 31.604002]} />
      </Layer>
    </IMap>
  );
}

export default Map;
