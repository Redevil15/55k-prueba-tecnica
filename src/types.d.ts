// MARK: - APIResults
export interface APIResults {
  results: User[];
  info: Info;
}

// MARK: - Info
export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

// MARK: - Result
export interface User {
  gender: Gender;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

// MARK: - Dob
export interface Dob {
  date: string;
  age: number;
}

export enum Gender {
  Female = "female",
  Male = "male",
}

// MARK: - ID
export interface ID {
  name: string;
  value?: string;
}

// MARK: - Location
export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: Postcode;
  coordinates: Coordinates;
  timezone: Timezone;
}

// MARK: - Coordinates
export interface Coordinates {
  latitude: string;
  longitude: string;
}

export enum Postcode {
  Integer = "integer",
  String = "string",
}

// MARK: - Street
export interface Street {
  number: number;
  name: string;
}

// MARK: - Timezone
export interface Timezone {
  offset: string;
  description: string;
}

// MARK: - Login
export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

// MARK: - Name
export interface Name {
  title: Title;
  first: string;
  last: string;
}

export enum Title {
  Madame = "Madame",
  Miss = "Miss",
  Monsieur = "Monsieur",
  Mr = "Mr",
  Mrs = "Mrs",
  Ms = "Ms",
}

// MARK: - Picture
export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
