import type { NextApiRequest, NextApiResponse } from 'next';

// TODO: add more data
const data = [
  {
    name: 'Destinations for arts & culture',
    locations: [
      {
        city: 'New York',
        state: 'New York',
        url: '/new-york-ny/stays',
      },
      {
        city: 'Phoenix',
        state: 'Arizona',
        url: '/phoenix-az/stays',
      },
    ],
  },
];

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.json(data);
};
