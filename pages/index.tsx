import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import slug from 'slug';

import { Footer } from '@components/common';
import { Slider, Tabs, Tab, TabList, TabPanel } from '@components/ui';
import { useWindowSize } from '@hooks';
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
  const { width } = useWindowSize();

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

      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className="absolute inset-0 ml-10 md:m-0 xl:mx-8">
            <Image
              className="absolute align-bottom"
              src="/hero.webp"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
        <div role="heading" className={styles.heroHeading}>
          <span className="whitespace-pre-line w-full text-3xl tracking-tight text-white">
            Made possible by&nbsp;Hosts
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-screen-2xl mb-10 mt-14 p-6 md:px-10 xl:px-20">
        <div className="flex flex-col pb-4">
          <h1 className="whitespace-pre-line text-gray-750 text-xl md:text-2xl lg:text-3xl font-bold leading-none md:leading-tight tracking-tight md:tracking-normal">
            Explore nearby
          </h1>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <a
              className="text-base leading-tight text-gray-750 flex items-center"
              href="/s/Nairobi/homes"
            >
              <span className={styles.image}>
                <Image
                  className="absolute w-full h-full object-cover align-bottom"
                  src="/grid-1.webp"
                  layout="fill"
                />
              </span>
              <span className="flex-grow flex flex-wrap overflow-x-hidden">
                <span className={styles.gridText}>
                  <b>Nairobi</b>
                </span>
                <span className={styles.gridText}>15 minute drive</span>
              </span>
            </a>
          </div>
          <div className={styles.gridItem}>
            <a
              className="text-base leading-tight text-gray-750 flex items-center"
              href="/s/Mombasa/homes"
            >
              <span className={styles.image}>
                <Image
                  className="absolute w-full h-full object-cover align-bottom"
                  src="/grid-2.webp"
                  layout="fill"
                />
              </span>
              <span className="flex-grow flex flex-wrap overflow-x-hidden">
                <span className={styles.gridText}>
                  <b>Mombasa</b>
                </span>
                <span className={styles.gridText}>7 hour drive</span>
              </span>
            </a>
          </div>
          <div className={styles.gridItem}>
            <a
              className="text-base leading-tight text-gray-750 flex items-center"
              href="/s/Diani-Beach/homes"
            >
              <span className={styles.image}>
                <Image
                  className="absolute w-full h-full object-cover align-bottom"
                  src="/grid-3.webp"
                  layout="fill"
                />
              </span>
              <span className="flex-grow flex flex-wrap overflow-x-hidden">
                <span className={styles.gridText}>
                  <b>Diani Beach</b>
                </span>
                <span className={styles.gridText}>7 hour drive</span>
              </span>
            </a>
          </div>
          <div className={styles.gridItem}>
            <a
              className="text-base leading-tight text-gray-750 flex items-center"
              href="/s/Watamu/homes"
            >
              <span className={styles.image}>
                <Image
                  className="absolute w-full h-full object-cover align-bottom"
                  src="/grid-4.webp"
                  layout="fill"
                />
              </span>
              <span className="flex-grow flex flex-wrap overflow-x-hidden">
                <span className={styles.gridText}>
                  <b>Watamu</b>
                </span>
                <span className={styles.gridText}>8.5 hour drive</span>
              </span>
            </a>
          </div>
          <div className={styles.gridItem}>
            <a
              className="text-base leading-tight text-gray-750 flex items-center"
              href="/s/Nakuru/homes"
            >
              <span className={styles.image}>
                <Image
                  className="absolute w-full h-full object-cover align-bottom"
                  src="/grid-5.webp"
                  layout="fill"
                />
              </span>
              <span className="flex-grow flex flex-wrap overflow-x-hidden">
                <span className={styles.gridText}>
                  <b>Nakuru</b>
                </span>
                <span className={styles.gridText}>3 hour drive</span>
              </span>
            </a>
          </div>
          <div className={styles.gridItem}>
            <a
              className="text-base leading-tight text-gray-750 flex items-center"
              href="/s/Kisumu/homes"
            >
              <span className={styles.image}>
                <Image
                  className="absolute w-full h-full object-cover align-bottom"
                  src="/grid-6.webp"
                  layout="fill"
                />
              </span>
              <span className="flex-grow flex flex-wrap overflow-x-hidden">
                <span className={styles.gridText}>
                  <b>Kisumu</b>
                </span>
                <span className={styles.gridText}>5.5 hour drive</span>
              </span>
            </a>
          </div>
          <div className={styles.gridItem}>
            <a
              className="text-base leading-tight text-gray-750 flex items-center"
              href="/s/Malindi/homes"
            >
              <span className={styles.image}>
                <Image
                  className="absolute w-full h-full object-cover align-bottom"
                  src="/grid-7.webp"
                  layout="fill"
                />
              </span>
              <span className="flex-grow flex flex-wrap overflow-x-hidden">
                <span className={styles.gridText}>
                  <b>Malindi</b>
                </span>
                <span className={styles.gridText}>8.5 hour drive</span>
              </span>
            </a>
          </div>
          <div className={styles.gridItem}>
            <a
              className="text-base leading-tight text-gray-750 flex items-center"
              href="/s/Mtwapa/homes"
            >
              <span className={styles.image}>
                <Image
                  className="absolute w-full h-full object-cover align-bottom"
                  src="/grid-8.webp"
                  layout="fill"
                />
              </span>
              <span className="flex-grow flex flex-wrap overflow-x-hidden">
                <span className={styles.gridText}>
                  <b>Mtwapa</b>
                </span>
                <span className={styles.gridText}>7 hour drive</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl mb-10 mt-0 p-6 md:px-10 xl:px-20">
        <div className="flex flex-col pb-4">
          <h1 className="whitespace-pre-line text-gray-750 text-xl md:text-2xl lg:text-3xl font-bold leading-none md:leading-tight tracking-tight md:tracking-normal">
            Live anywhere
          </h1>
        </div>

        <Slider>
          <a href="/s/homes">
            <div className="bg-gray-250 overflow-hidden relative rounded-lg">
              <div style={{ paddingTop: '100%' }}>
                <Image src="/house-1.webp" layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="pt-2">
              <div className="whitespace-normal">
                <div className={styles.cardTitle} title="Entire homes">
                  <span className="text-gray-750">Entire homes</span>
                </div>
              </div>
            </div>
          </a>
          <a href="/s/homes">
            <div className="bg-gray-250 overflow-hidden relative rounded-lg">
              <div style={{ paddingTop: '100%' }}>
                <Image src="/house-2.webp" layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="pt-2">
              <div className="whitespace-normal">
                <div className={styles.cardTitle} title="Unique stays">
                  <span className="text-gray-750">Unique stays</span>
                </div>
              </div>
            </div>
          </a>
          <a href="/s/homes">
            <div className="bg-gray-250 overflow-hidden relative rounded-lg">
              <div style={{ paddingTop: '100%' }}>
                <Image src="/house-3.webp" layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="pt-2">
              <div className="whitespace-normal">
                <div className={styles.cardTitle} title="Cabins and cottages">
                  <span className="text-gray-750">Cabins and cottages</span>
                </div>
              </div>
            </div>
          </a>
          <a href="/s/homes">
            <div className="bg-gray-250 overflow-hidden relative rounded-lg">
              <div style={{ paddingTop: '100%' }}>
                <Image src="/dog.webp" layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="pt-2">
              <div className="whitespace-normal">
                <div className={styles.cardTitle} title="Pets allowed">
                  <span className="text-gray-750">Pets allowed</span>
                </div>
              </div>
            </div>
          </a>
        </Slider>
      </section>

      <section className="mx-auto max-w-screen-2xl mb-10 mt-0 px-6 md:px-10 xl:px-20">
        <div className={styles.imageContainer}>
          <div className="md:hidden" style={{ paddingTop: '125%' }} />
          <div className="absolute -inset-y-px inset-x-0">
            <Image
              src={width >= 744 ? '/image.webp' : '/image-small.jpg'}
              alt="Your world is worth sharing"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.imageText} role="presentation">
            <div className="text-3xl xl:text-5xl tracking-normal text-gray-650 font-semibold whitespace-pre-wrap">
              <span className="text-white">Your world is worth sharing</span>
            </div>
            <div className="text-base xl:text-lg leading-tight tracking-normal text-gray-650 pt-2 md:pt-3">
              <span className="text-white">
                Turn your extra space into your next opportunity.
              </span>
            </div>
            <div className="mt-4 md:mt-5 xl:mt-10">
              <a
                href="https://www.airbnb.com/host/homes?locale=en"
                className="inline-block m-0 relative text-center no-underline w-auto font-semibold text-sm xl:text-base leading-tight tracking-normal bg-white text-gray-650 py-2.5 xl:py-3.5 px-4 xl:px-6 border-none rounded-lg"
              >
                Become a Host
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 md:mb-6 max-w-screen-2xl m-auto px-6 md:px-10 xl:px-20">
        <div className="bg-white overflow-auto">
          <div>
            <div className="my-8 md:my-10">
              <div>
                <section>
                  <div className="hidden md:block">
                    <div className="lg:hidden">
                      <div className="flex flex-col pb-2">
                        <h1 className="text-3xl text-gray-750 font-bold">
                          <span>Experience the&nbsp;world</span>
                        </h1>
                        <span className="truncate whitespace-pre-line bg-clip-text text-2xl text-gray-750 font-normal">
                          Unique activities with local experts—in person
                          or&nbsp;online.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex flex-col pb-2">
                      <h1 className="text-3xl text-gray-750 font-bold">
                        <span>Experience the&nbsp;world</span>
                      </h1>
                      <span className="truncate whitespace-pre-line bg-clip-text text-2xl text-gray-750 font-normal">
                        Unique activities with local experts—in person
                        or&nbsp;online.
                      </span>
                    </div>
                  </div>
                </section>
              </div>
              <div>
                <div className="my-2">
                  <div className="relative z-0">
                    <Slider>
                      <a href="/s/experiences/online">
                        <div className="rounded-tl-2xl rounded-tr-2xl h-full md:w-full bg-white">
                          <div className="bg-gray-250 overflow-hidden relative rounded-lg">
                            <div
                              style={{
                                paddingTop: '100%',
                              }}
                            >
                              <Image src="/image-2.webp" layout="fill" />
                            </div>
                          </div>
                          <div className="pt-2">
                            <div className="whitespace-normal">
                              <div
                                className="text-lg leading-tight max-h-11 truncate whitespace-pre-line text-gray-750 font-semibold"
                                title="Online Experiences"
                              >
                                <span className="text-gray-750">
                                  Online Experiences
                                </span>
                              </div>
                              <div
                                className="text-sm leading-tight max-h-14 truncate whitespace-pre-line text-gray-450 font-normal mt-1"
                                title="Travel the world without leaving home."
                              >
                                <span className="text-gray-750">
                                  Travel the world without leaving&nbsp;home.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        target="_blank"
                        href="/s/experiences?location_search=NEARBY"
                      >
                        <div className="rounded-tl-2xl rounded-tr-2xl h-full md:w-full bg-white">
                          <div className="bg-gray-250 overflow-hidden relative rounded-lg">
                            <div
                              style={{
                                paddingTop: '100%',
                              }}
                            >
                              <Image src="/image-3.webp" layout="fill" />
                            </div>
                          </div>
                          <div className="pt-2">
                            <div className="whitespace-normal">
                              <div
                                className="text-lg leading-tight max-h-11 truncate whitespace-pre-line text-gray-750 font-semibold"
                                title="Experiences"
                              >
                                <span className="text-gray-750">
                                  Experiences
                                </span>
                              </div>
                              <div
                                className="text-sm leading-tight max-h-14 truncate whitespace-pre-line text-gray-450 font-normal mt-1"
                                title="Things to do wherever you are."
                              >
                                <span className="text-gray-750">
                                  Things to do wherever you&nbsp;are.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/s/adventures">
                        <div className="rounded-tl-2xl rounded-tr-2xl h-full md:w-full bg-white">
                          <div className="bg-gray-250 overflow-hidden relative rounded-lg">
                            <div
                              style={{
                                paddingTop: '100%',
                              }}
                            >
                              <Image src="/image-4.jpg" layout="fill" />
                            </div>
                          </div>
                          <div className="pt-2">
                            <div className="whitespace-normal">
                              <div
                                className="text-lg leading-tight max-h-11 truncate whitespace-pre-line text-gray-750 font-semibold"
                                title="Adventures"
                              >
                                <span className="text-gray-750">
                                  Adventures
                                </span>
                              </div>
                              <div
                                className="text-sm leading-tight max-h-14 truncate whitespace-pre-line text-gray-450 font-normal mt-1"
                                title="Multi-day trips with meals and stays."
                              >
                                <span className="text-gray-750">
                                  Multi-day trips with meals and&nbsp;stays.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
