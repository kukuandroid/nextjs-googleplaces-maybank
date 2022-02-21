import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/sidebar'
import Maps from '../../components/map'

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
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
background-image: url('https://cdn.dribbble.com/users/3956332/screenshots/15579019/media/f6442ca3d9682b438f7dbb4adca59c19.jpg?compress=1&resize=1600x1200');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`
export default HomePage
