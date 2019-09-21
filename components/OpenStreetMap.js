import React, { useMemo, useState, useEffect, useCallback } from "react";
import { number } from "prop-types";
import { Map, TileLayer, Marker } from "react-leaflet";
// eslint-disable-next-line no-unused-vars
import L from "leaflet";

export default function LeafletExample({ lat, lng }) {
  const [centerLat, setCenterLat] = useState(lat);
  const [centerLng, setCenterLng] = useState(lng);

  useEffect(() => {
    if (Number.isFinite(lat)) {
      setCenterLat(+lat);
    }
  }, [lat]);
  useEffect(() => {
    if (Number.isFinite(lng)) {
      setCenterLng(+lng);
    }
  }, [lng]);

  const [markerLat, setMarkerLat] = useState(lat);
  const [markerLng, setMarkerLng] = useState(lng);

  useEffect(() => {
    if (Number.isFinite(lat)) {
      setMarkerLat(+lat);
    }
  }, [lat]);
  useEffect(() => {
    if (Number.isFinite(lng)) {
      setMarkerLng(+lng);
    }
  }, [lng]);

  const [zoom] = useState(15);

  const center = useMemo(() => ({ lat: centerLat, lng: centerLng }), [
    centerLat,
    centerLng
  ]);

  const marker = useMemo(() => ({ lat: markerLat, lng: markerLng }), [
    markerLat,
    markerLng
  ]);

  const updateMarkerPosition = useCallback(position => {
    setMarkerLat(position.lat);
    setMarkerLng(position.lng);
  });

  return (
    <Map center={center} zoom={zoom}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={marker} onPositionChange={updateMarkerPosition} />
    </Map>
  );
}

LeafletExample.propTypes = {
  lat: number.isRequired,
  lng: number.isRequired
};
