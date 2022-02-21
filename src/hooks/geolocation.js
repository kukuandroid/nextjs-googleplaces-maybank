import { useEffect, useState } from 'react'
export default function useGetCoordinates () {
  const [coords, setCoords] = useState({ lat: 0, lng: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getCoordinates()
  }, [])

  const getCoordinates = () => {
    return navigator.geolocation.getCurrentPosition(function (position) {
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
      setLoading(false)
    })
  }
  return [coords, loading]
}
