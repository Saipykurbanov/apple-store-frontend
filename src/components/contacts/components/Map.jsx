'use client';
import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { LOCATION } from '../lib/variables';
import customMapStyle from '../lib/mapStyle'

export default function Map () {
  const [reactifiedApi, setReactifiedApi] = useState();

  useEffect(() => {
    Promise.all([ymaps3.import('@yandex/ymaps3-reactify'), ymaps3.ready]).then(([{ reactify }]) =>
      setReactifiedApi(reactify.bindTo(React, ReactDOM).module(ymaps3))
    );
  }, []);

  if (!reactifiedApi) {
    return null; 
  }

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = reactifiedApi;

  return (
    <div className="map_container">
        <YMap 
        location={LOCATION}>
            <YMapDefaultSchemeLayer 
              theme="dark"
              customization={customMapStyle}  
            />
            <YMapDefaultFeaturesLayer />

            <YMapMarker coordinates={[34.099222, 44.937404]}>
              <div className="custom_marker">
                <div className="marker_label">ifix<span>Store.</span> </div>
              </div>
            </YMapMarker>
        </YMap>
    </div>
  );
};

