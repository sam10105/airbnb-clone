export interface Location {
  city: string;
  state: string;
  url: string;
}

export interface Destination {
  name: string;
  locations: Location[];
}
