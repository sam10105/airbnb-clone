import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className=" border-t border-solid border-gray-250 bg-gray-75">
      <div className="px-6 md:px-10 xl:px-20 m-auto max-w-screen-2xl">
        <div className="py-8 md:py-10 md:flex md:flex-col xl:flex-row">
          <section className={`${styles.column} xl:px-3 xl:flex-1`}>
            <h4 className="text-gray-750 font-bold uppercase text-xs mb-0">
              About
            </h4>
            <ul className="list-none m-0 p-0 md:flex md:flex-wrap md:-mx-3 xl:block xl:mx-0">
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/d/howairbnbworks"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  How Airbnb works
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/press/news"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Newsroom
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="https://investors.airbnb.com"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Investors
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/plus"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Airbnb Plus
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/luxury"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Airbnb Luxe
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.hoteltonight.com/?utm_source_name=Airbnb&amp;utm_campaign_name=Dr_Us_Desktop_Airbnb_Footer"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  HotelTonight
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/work?s=footer"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Airbnb for Work
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/d/video-stories-hub"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Made possible by Hosts
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/d/olympics"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Olympics
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/careers"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Careers
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/what-makes-airbnb-airbnb"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Founders' Letter
                </a>
              </li>
            </ul>
          </section>
          <section className={`${styles.column} xl:px-3 xl:flex-1`}>
            <h4 className="text-gray-750 font-bold uppercase text-xs mb-0">
              Community
            </h4>
            <ul className="list-none m-0 p-0 md:flex md:flex-wrap md:-mx-3 xl:block xl:mx-0">
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/diversity"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Diversity &amp; Belonging
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/against-discrimination"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Against Discrimination
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/accessibility"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Accessibility
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/associates?from=footer"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Airbnb Associates
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/d/covid19relief"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Frontline Stays
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/invite?r=6"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Invite friends
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/gift-cards"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Gift cards
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="https://www.airbnb.org?locale=en"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Airbnb.org
                </a>
              </li>
            </ul>
          </section>
          <section className={`${styles.column} xl:px-3 xl:flex-1`}>
            <h4 className="text-gray-750 font-bold uppercase text-xs mb-0">
              Host
            </h4>
            <ul className="list-none m-0 p-0 md:flex md:flex-wrap md:-mx-3 xl:block xl:mx-0">
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/host/homes?from_footer=1"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Host your home
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/d/onlinehost"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Host an Online Experience
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/host/experiences"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Host an Experience
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/help/responsible-hosting"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Responsible hosting
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/resources"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Resource Center
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/help/community?s=footer"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Community Center
                </a>
              </li>
            </ul>
          </section>
          <section className={`${styles.column} xl:px-3 xl:flex-1`}>
            <h4 className="text-gray-750 font-bold uppercase text-xs mb-0">
              Support
            </h4>
            <ul className="list-none m-0 p-0 md:flex md:flex-wrap md:-mx-3 xl:block xl:mx-0">
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/d/covidsafety"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Our COVID-19 Response
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/help?from=footer"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Help Center
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Cancellation options
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/neighbors"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Neighborhood Support
                </a>
              </li>
              <li className="mt-3 md:w-1/3 xl:w-auto xl:mt-4 md:px-3 xl:px-0">
                <a
                  href="/trust"
                  className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                >
                  Trust &amp; Safety
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="py-6 border-t border-solid border-gray-250">
          <section className="flex flex-col md:items-center md:text-center xl:text-left xl:flex-row-reverse xl:items-stretch xl: justify-between">
            <div className="flex mb-4 xl:mb-0">
              <div className="flex">
                <span className="mr-6">
                  <a
                    data-no-client-routing="true"
                    href="/account-settings/language"
                    className="text-gray-750 text-sm flex whitespace-nowrap no-underline"
                  >
                    <span className={`${styles.linkText}`}>
                      Choose a language
                    </span>
                    <span className="mr-2">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: 'block',
                          height: 16,
                          width: 16,
                          fill: 'currentcolor',
                        }}
                      >
                        <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                      </svg>
                    </span>
                    <span className="font-semibold underline">
                      English (US)
                    </span>
                  </a>
                </span>
                <span className="mr-6">
                  <a
                    data-no-client-routing="true"
                    href="/account-settings/currency"
                    className="text-gray-750 text-sm flex whitespace-nowrap no-underline"
                  >
                    <span className={`${styles.linkText}`}>
                      Choose a currency
                    </span>
                    <span className="mr-2">$</span>
                    <span className="font-semibold underline">USD</span>
                  </a>
                </span>
              </div>
              <div className="hidden md:block md:ml-8">
                <ul className="list-none m-0 p-0 flex">
                  <li className={`${styles.socialLinks}`}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/airbnb"
                      className="text-gray-750 no-underline"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        role="img"
                        aria-hidden="false"
                        aria-label="Navigate to Facebook"
                        focusable="false"
                        style={{
                          height: 18,
                          width: 18,
                          display: 'block',
                          fill: 'currentcolor',
                        }}
                      >
                        <path
                          d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className={`${styles.socialLinks}`}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/airbnb"
                      className="text-gray-750 no-underline"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        role="img"
                        aria-hidden="false"
                        aria-label="Navigate to Twitter"
                        focusable="false"
                        style={{
                          height: 18,
                          width: 18,
                          display: 'block',
                          fill: 'currentcolor',
                        }}
                      >
                        <path
                          d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className={`${styles.socialLinks}`}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://instagram.com/airbnb"
                      className="text-gray-750 no-underline"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-hidden="false"
                        aria-label="Navigate to Instagram"
                        focusable="false"
                        style={{
                          height: 18,
                          width: 18,
                          display: 'block',
                          fill: 'currentcolor',
                        }}
                      >
                        <path
                          d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 3.75-.97 7.29 7.29 0 0 0 2.72-2.63 6.93 6.93 0 0 0 1-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 xl:mr-10">
              <div className="md:text-center xl:text-left">
                <div className="xl:overflow-hidden">
                  <div className="text-gray-750 text-sm inline-block xl:mr-5">
                    © 2021 Airbnb, Inc. All rights reserved
                  </div>
                  <div className="xl:inline-block xl:-ml-5">
                    <span className="hidden xl:inline-block">
                      <span
                        className="inline-block text-center w-5"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                    </span>
                    <a
                      href="/terms/privacy_policy"
                      className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                    >
                      Privacy
                    </a>
                    <span
                      className="inline-block text-center w-5"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                    <a
                      href="/terms"
                      className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                    >
                      Terms
                    </a>
                    <span
                      className="inline-block text-center w-5"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                    <a
                      href="/sitemaps/v2"
                      className="text-gray-750 no-underline hover:underline focus:underline text-sm hover:cursor-pointer"
                    >
                      Sitemap
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
