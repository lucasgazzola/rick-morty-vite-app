import { useEffect, useState } from "react"
import Character from '../interfaces/Character'
import Info from '../interfaces/Info'
import CharacterItem from '../components/Character'

export default function Characters() {

  const API_URL = import.meta.env.VITE_API_URL || 'https://rickandmortyapi.com/api'
  const CHARACTER_URL = `${API_URL}/character`

  const [characters, setCharacters] = useState<Character[]>([])
  const [info, setInfo] = useState<Info>()


  useEffect(() => {
    async function fetchCharacters(URL: string) {
      const response = await fetch(URL)
      const data = await response.json()
      const { info, results } = data
      setInfo(info)
      setCharacters(results)
    }
    fetchCharacters(CHARACTER_URL);
  }, [])


  return (
    <div>
      {characters.map(character => (
        <CharacterItem key={character.id} {...character} />
      ))}
    </div>
  )
}

