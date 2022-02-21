import React, { useEffect } from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import useGetCoordinates from '../hooks/geolocation'
import MapMarker from '../assets/icons/svg/map-marker'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNearbyPlaces } from '../redux/actions/google-maps/nearby-places-action'

const Maps = () => {
  const [baseCoords, loading] = useGetCoordinates()
  const dispatch = useDispatch()
  const { coords = [] } = useSelector((state) => state.coords)
  const coordsChanged = coords.length > 0
  console.log('loading', loading)

  useEffect(() => {
    if (coords.length > 0) {
      dispatch(
        fetchNearbyPlaces({
          latitude: coords[0].geometry.location.lat,
          longitude: coords[0].geometry.location.lng
        })
      )
    } else if (!loading) {
      dispatch(
        fetchNearbyPlaces({
          latitude: baseCoords.lat,
          longitude: baseCoords.lng
        })
      )
    }
  }, [coords])

  const onMapClick = () => {}
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.google_maps_api_key }}
        center={coordsChanged ? coords[0].geometry.location : baseCoords}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
      >
        <MapMarker
          onClick={onMapClick}
          lat={coordsChanged ? coords[0].geometry.location.lat : baseCoords.lat}
          text="My Marker"
          lng={coordsChanged ? coords[0].geometry.location.lng : baseCoords.lng}
        />
      </GoogleMapReact>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`

export default Maps
