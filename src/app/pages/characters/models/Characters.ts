export interface CharacterResponseInterface {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharacterInterface[];
}

export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    urL: string;
  };
  location: {
    name: string;
    urL: string;
  };
  image: string;
}
