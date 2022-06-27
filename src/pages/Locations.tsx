export default function Locations() {


  const API_URL = import.meta.env.VITE_API_URL || 'https://rickandmortyapi.com/api'
  const LOCATION_URL = `${API_URL}/location`

  return (
    <div>{LOCATION_URL}</div>
  )
}