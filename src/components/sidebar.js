import React from 'react'
import styled from 'styled-components'
import InputAutocomplete from './input-autocomplete'

const Sidebar = () => {
  return (
    <Container>
      <InputAutocomplete />
    </Container>
  )
}

const Container = styled.div`
  min-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`

export default Sidebar
