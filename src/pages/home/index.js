import React from 'react'
import styled from 'styled-components'
import Maps from '../../components/map'
import InputAutocomplete from '../../components/input-autocomplete'
import PlaceCard from '../../components/place-card'
import { useSelector } from 'react-redux'
import useGetCoordinates from '../../hooks/geolocation'

const HomePage = () => {
  const { nearbyPlaces = [] } = useSelector((state) => state.nearbyPlaces)
  const [coords, loading] = useGetCoordinates()
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p >Fetching your location ...</p>
      </div>
    )
  }
  return (
    <Container>
      <Wrapper>
        <div className="w-80 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 absolute md:left-40 left-10 top-20 z-10 bg-white shadow-lg rounded-lg p-4 ">
          <InputAutocomplete />
          <div className="overflow-scroll max-h-96 mt-5">
            {nearbyPlaces.map((x) => (
              <PlaceCard key={x.place_id} {...x} />
            ))}
          </div>
        </div>
        <Maps />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const Wrapper = styled.div`
  background-image: url("https://cdn.dribbble.com/users/3956332/screenshots/15579019/media/f6442ca3d9682b438f7dbb4adca59c19.jpg?compress=1&resize=1600x1200");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`
export default HomePage
