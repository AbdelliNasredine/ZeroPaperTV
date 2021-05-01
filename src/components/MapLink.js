import { useState } from "react";
import Map from "./Map";
import { BsMap } from "react-icons/bs";
export default function MapLink() {
  const [isShown, setIsShown] = useState(false);

  const onMapShown = function () {
    setIsShown(!isShown);
  };

  return (
    <>
      {isShown ? <Map /> : null}
      <button onClick={onMapShown} class="Map-link">
        <BsMap />
        <span>Map</span>
      </button>
    </>
  );
}
