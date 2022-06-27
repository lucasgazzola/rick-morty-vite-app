
export default function Episodes() {

  const API_URL = import.meta.env.VITE_API_URL || 'https://rickandmortyapi.com/api'
  const EPISODE_URL = `${API_URL}/episode`

  return (
    <div>{EPISODE_URL}</div>
  )
}