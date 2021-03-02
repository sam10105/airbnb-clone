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

// This could be data from an api
export const getAwayDestinations = async () => data;
