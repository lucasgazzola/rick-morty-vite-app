import Character from '../interfaces/Character'

export default function CharacterItem(character: Character) {

  return (
    <div>{character.name}</div>
  )
}
