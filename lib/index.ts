import { Destination } from '@types';

const { BASE_URL = 'http://localhost:3000' } = process.env;

export const getAwayDestinations = async () => {
  const res = await fetch(`${BASE_URL}/api/locations`);
  const data: Destination[] = await res.json();

  return data;
};
