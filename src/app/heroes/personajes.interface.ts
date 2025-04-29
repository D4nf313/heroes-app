// Modelo de información de paginación
export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

// Modelo de origen y ubicación del personaje
export interface Location {
  name: string;
  url: string;
}

// Modelo de un personaje
export interface Character {
  id: number;
  name: string;
  status: string;  // "Alive", "Dead" o "unknown"
  species: string;
  type: string;
  gender: string;  // "Male", "Female", "unknown"
  origin: Location;
  location: Location;
  image: string;
  episode: string[]; // Lista de URLs de episodios en los que aparece
  url: string;
  created: string;
}

// Modelo de la respuesta completa
export interface ApiResponse {
  info: Info;
  results: Character[];
}

export interface CharacterSimple {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
}



