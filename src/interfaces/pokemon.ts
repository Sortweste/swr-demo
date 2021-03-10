interface IPokemonType {
  slot: number;
}

interface IPokemonSprite {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface IPokemonMinimal {
  id: number;
  name: string;
}

export interface IPokemon extends IPokemonMinimal {
  weight: number;
  height: number;
  type: IPokemonType;
  sprites: IPokemonSprite;
}

export interface IPokemonResource {
  name: string;
  url: string;
}

export interface IResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemonResource[];
}
