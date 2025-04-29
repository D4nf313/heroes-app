import { Character, CharacterSimple } from "./personajes.interface";

export function mapToSimpleCharacters(characters: Character[]): CharacterSimple[] {
  return characters.map(char => ({
    id: char.id,
    name: char.name,
    species: char.species,
    gender: char.gender,
    status: char.status
  }));
}
