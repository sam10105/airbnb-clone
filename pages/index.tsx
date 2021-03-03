import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import slug from 'slug';

import { Footer } from '@components/common';
import { Tabs, Tab, TabList, TabPanel } from '@components/ui';
import { getAwayDestinations } from '@lib';
import { Location } from '@types';
import styles from '@styles/Home.module.css';

type Props = {
  titles: string[];
  locations: Location[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getAwayDestinations();

  const generateUrl = ({ city, state }: Location) => ({
    city,
    state,
    url: slug(`${city} ${state}`),
  });

  const titles = data.map((destination) => destination.name);
  const locations = data
    .map((destination) => destination.locations)
    .flat()
    .map(generateUrl);

  return {
    props: { titles, locations },
  };
};

function Home({
  titles,
  locations,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <aside className="px-6 lg:px-10 xl:px-20 py-4 md:py-5 relative text-center text-sm leading-tight bg-gray-750 text-gray-350">
        <Link href="/covid-traveler">
          <a className={styles.link}>
            <span className="whitespace-normal">
              Get the latest on our COVID-19 response
            </span>
          </a>
        </Link>
      </aside>
      <h1 className="text-xl h-screen">Airbnb Clone</h1>
      <section className="mx-auto max-w-screen-2xl mb-10 mt-0 px-6 md:px-10 xl:px-20">
        <div className="flex flex-col pb-4">
          <h1 className="whitespace-pre-line text-gray-750 text-xl md:text-2xl lg:text-3xl font-bold leading-none md:leading-tight tracking-tight md:tracking-normal">
            Inspiration for future&nbsp;getaways
          </h1>
        </div>
        <Tabs>
          <TabList>
            {titles.map((title) => (
              <Tab key={title}>{title}</Tab>
            ))}
          </TabList>
          <TabPanel>
            {locations.map(({ city, state, url = '' }) => (
              <div
                key={url}
                className="relative w-full sm:w-1/2 md:w-1/3 xl:w-1/4 mx-0 px-1 md:px-2"
              >
                <div className="py-4">
                  <Link href={url}>
                    <a
                      className="text-base text-gray-750 flex items-center justify-between"
                      href={url}
                    >
                      <div className="overflow-x-hidden">
                        <div className="truncate text-sm">{city}</div>
                        <div className="truncate text-sm text-gray-450 p-0.5">
                          {state}
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </TabPanel>
        </Tabs>
      </section>
      <Footer />
    </>
  );
}

export default Home;
