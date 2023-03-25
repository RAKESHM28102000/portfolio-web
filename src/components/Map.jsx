import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  // ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-80,-19, 0],
        center: [0, 0],
        scale: 1600
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {/* <Annotation
      // subject [longitude,lat]
        subject={[79.98334,12.68399]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-1" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Chengalpattu"}
        </text>
      </Annotation> */}
      <Annotation
        subject={[79.942790,12.661225]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth:2,
          strokeLinecap: "round"
        }}
      >
        <text x="-1" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Maiyur=>Chengalpattu=>TN=>India"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
