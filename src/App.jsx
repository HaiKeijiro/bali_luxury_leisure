// Images
import logo from "./assets/logo.png";
import logo_black from "./assets/logo_black.png";
import tree from "./assets/tree.png";
import villa1 from "./assets/Villa/villa1.png";
import villa2 from "./assets/Villa/villa2.png";
import villa3 from "./assets/Villa/villa3.png";
import villa4 from "./assets/Villa/villa4.png";
import villa5 from "./assets/Villa/villa5.png";
import preview from "./assets/chilling.png";
import statue from "./assets/statue.png";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const pages = [
    "Dining",
    "Resort & Villas",
    "Guides & Tips",
    "Beachclub",
    "Nightlife",
  ];

  const villas = [
    { src: villa1, location: "Canggu" },
    { src: villa2, location: "Canggu" },
    { src: villa3, location: "Ubud" },
    { src: villa4, location: "Ubud" },
    { src: villa5, location: "Canggu" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        id="navbar"
        className={`fixed top-0 w-full text-white flex justify-between items-center py-[1rem] px-[6rem] z-50 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div>
          <img src={logo} alt="logo.png" />
        </div>
        <div>
          <ul className="hidden lg:flex lg:gap-x-8 font-light">
            {pages.map((page, index) => (
              <li
                key={index}
                className={`inline ${
                  index !== 0
                    ? "opacity-90"
                    : "opacity-100 font-bold underline underline-offset-8"
                }`}
              >
                {page}
              </li>
            ))}
          </ul>
        </div>
        <button className="w-8 text-white cursor-pointer lg:hidden">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="hidden lg:inline w-[100px]"></div>
      </div>

      {/* Banner */}
      <div
        id="banner"
        className="banner grid grid-cols-12 w-full h-screen text-white"
      >
        <div id="cta" className="col-span-12 w-[75%] m-auto">
          <div className="space-y-8">
            <h1 className="h1 font-playfair-display">
              Luxurious Beachfront <br /> Villas & Resorts
            </h1>
            <p className="w-1/2 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <button className="bg-black btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div
        id="desc"
        className="relative grid grid-cols-12 w-full py-[3.75rem] overflow-hidden bg-[#F6F6F6]"
      >
        <div className="col-span-12 w-[75%] mx-auto">
          <h2 className="h2">The Finest of Bali and Beyond</h2>
          <p className="w-2/3 mt-6">
            Discover the most luxurious to the most authentic experiences living
            in the Island of Gods, Bali, in just one simple click. We take our
            time to cherry-picked only the most majestic villas, hotels,
            resorts, yachts, exclusive transports, activities, and entertainment
            in Bali and Beyond.
          </p>
          <img
            src={tree}
            alt="tree.png"
            className="w-[22%] absolute top-4 right-0"
          />
        </div>
      </div>

      {/* Discover */}
      <div id="discover" className="grid grid-cols-12 py-[3.75rem]">
        <div className="col-span-12 w-[75%] m-auto text-center">
          <h2 className="h2 font-playfair-display">
            The Luxury Bali Experience
          </h2>
          <p className="w-[80%] mx-auto mt-6">
            The Luxury Bali is devoted to spoil our guest with the most
            luxurious living experience in Bali. We enlist only the most
            majestic villas, resorts in every corner of Bali and yacht beyond
            Indonesia.
          </p>
          <div
            id="images"
            className="mt-14 grid gap-4 text-white text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          >
            {villas.map((villa, index) => (
              <div key={index} className="relative">
                <img src={villa.src} alt={`villa-${index}`} />
                <div className="absolute flex flex-col justify-between top-0 bottom-0 p-3">
                  <span className="text-2xl">0{index + 1}</span>
                  <div>
                    <h1 className="font-playfair-display text-xl tracking-widest">
                      Villa Lorem
                    </h1>
                    <p className="flex items-center gap-x-2">
                      {/* Icon */}
                      <svg
                        width="9"
                        height="12"
                        viewBox="0 0 9 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.41792 11.9195C3.62077 11.2395 2.88187 10.4941 2.20896 9.69095C1.19915 8.48486 5.54698e-07 6.68865 5.54698e-07 4.97702C-0.000437387 4.10288 0.258454 3.24826 0.743912 2.52131C1.22937 1.79436 1.91957 1.22776 2.72716 0.89322C3.53476 0.558681 4.42345 0.47124 5.28076 0.641962C6.13806 0.812685 6.92546 1.2339 7.54329 1.85229C7.95463 2.2618 8.28067 2.74884 8.50254 3.28519C8.72441 3.82155 8.8377 4.39659 8.83585 4.97702C8.83585 6.68865 7.6367 8.48486 6.62689 9.69095C5.95398 10.4941 5.21508 11.2395 4.41792 11.9195ZM4.41792 3.08363C3.91576 3.08363 3.43417 3.28311 3.07909 3.63819C2.72401 3.99327 2.52453 4.47486 2.52453 4.97702C2.52453 5.47918 2.72401 5.96078 3.07909 6.31586C3.43417 6.67094 3.91576 6.87042 4.41792 6.87042C4.92008 6.87042 5.40168 6.67094 5.75676 6.31586C6.11184 5.96078 6.31132 5.47918 6.31132 4.97702C6.31132 4.47486 6.11184 3.99327 5.75676 3.63819C5.40168 3.28311 4.92008 3.08363 4.41792 3.08363Z"
                          fill="white"
                        />
                      </svg>
                      {villa.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-black btn mt-11">Discover More</button>
        </div>
      </div>

      {/* Preview */}
      <div id="preview">
        <img
          src={preview}
          alt="image.png"
          className="bg-cover bg-no-repeat w-full"
        />
      </div>

      {/* Social Media */}
      <div id="social-media" className="grid grid-cols-12 py-[3.75rem]">
        <div className="col-span-12 w-[75%] m-auto">
          <h2 className="h2 font-playfair-display">INSTAGRAM</h2>
          <p className="w-[60%] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-16 mb-11 bg-[#B0B0B0] h-[23rem]"></div>
          <div className="w-full grid">
            <button className="bg-black btn mx-auto">View More</button>
          </div>
        </div>
      </div>

      {/* Connect */}
      <div id="connect" className="connect relative text-white">
        <img
          src={statue}
          alt="image.png"
          className="object-cover bg-no-repeat w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-[7.75rem] w-[60%] mx-auto">
          <div className="text-center">
            <h2 className="h2 font-playfair-display">Bali Paradise Awaits</h2>
            <p className="mt-4">Receive latest updates from us.</p>
          </div>
          <div className="flex gap-x-11 w-full h-11">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full text-black outline-none px-8 py-2"
            />
            <button className="bg-black tracking-[.5rem] px-6 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer" className="grid grid-cols-12 text-white">
        <div className="col-span-12 md:col-span-4 p-8 my-auto lg:p-32">
          <img
            src={logo_black}
            alt="logo.png"
            className="bg-cover bg-no-repeat mx-auto md:mx-0 md:w-full"
          />
        </div>
        <div className="col-span-12 md:col-span-8 flex justify-around text-left bg-black py-5 p-4 md:pt-16">
          <div>
            <h3 className="h3 font-playfair-display tracking-widest">Contact Us</h3>
            <div className="flex flex-col justify-center gap-y-2 mt-5">
              <div className="flex items-center gap-x-5">
                <small className="icon">T:</small>
                <p>+62 81 123 4558432</p>
              </div>
              <div className="flex items-center gap-x-5">
                <small className="icon">E:</small>
                <p className="underline">info@baliluxuryleisure.com</p>
              </div>
              <div className="flex items-center gap-x-5">
                <small className="icon">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.0435 0.0772539C4.67888 0.0480039 4.88146 0.0415039 6.49996 0.0415039C8.11846 0.0415039 8.32104 0.0485456 8.95588 0.0772539C9.59071 0.105962 10.024 0.207254 10.4032 0.354046C10.8003 0.504087 11.1605 0.738629 11.4584 1.04196C11.7617 1.33934 11.9957 1.699 12.1452 2.09659C12.2925 2.47575 12.3933 2.90909 12.4225 3.54284C12.4518 4.1793 12.4583 4.38188 12.4583 5.99984C12.4583 7.61834 12.4513 7.82092 12.4225 8.4563C12.3938 9.09005 12.2925 9.52338 12.1452 9.90255C11.9957 10.3002 11.7613 10.6604 11.4584 10.9583C11.1605 11.2616 10.8003 11.4956 10.4032 11.6451C10.024 11.7924 9.59071 11.8932 8.95696 11.9224C8.32104 11.9517 8.11846 11.9582 6.49996 11.9582C4.88146 11.9582 4.67888 11.9511 4.0435 11.9224C3.40975 11.8937 2.97642 11.7924 2.59725 11.6451C2.19962 11.4956 1.83936 11.2612 1.54154 10.9583C1.23842 10.6607 1.00384 10.3006 0.854168 9.90309C0.707376 9.52392 0.606626 9.09059 0.577376 8.45684C0.548126 7.82038 0.541626 7.6178 0.541626 5.99984C0.541626 4.38134 0.548668 4.17875 0.577376 3.54392C0.606084 2.90909 0.707376 2.47575 0.854168 2.09659C1.00406 1.69905 1.23882 1.33897 1.54208 1.04142C1.83948 0.738359 2.19938 0.503786 2.59671 0.354046C2.97588 0.207254 3.40921 0.106504 4.04296 0.0772539H4.0435ZM8.90767 1.14975C8.27933 1.12105 8.09083 1.11509 6.49996 1.11509C4.90908 1.11509 4.72058 1.12105 4.09225 1.14975C3.51104 1.1763 3.19579 1.27325 2.98563 1.35505C2.70775 1.46338 2.50896 1.59175 2.30042 1.8003C2.10273 1.99262 1.9506 2.22674 1.85517 2.4855C1.77338 2.69567 1.67642 3.01092 1.64988 3.59213C1.62117 4.22046 1.61521 4.40896 1.61521 5.99984C1.61521 7.59071 1.62117 7.77921 1.64988 8.40755C1.67642 8.98875 1.77338 9.304 1.85517 9.51417C1.9505 9.77255 2.10271 10.0071 2.30042 10.1994C2.49271 10.3971 2.72725 10.5493 2.98563 10.6446C3.19579 10.7264 3.51104 10.8234 4.09225 10.8499C4.72058 10.8786 4.90854 10.8846 6.49996 10.8846C8.09138 10.8846 8.27933 10.8786 8.90767 10.8499C9.48888 10.8234 9.80413 10.7264 10.0143 10.6446C10.2922 10.5363 10.491 10.4079 10.6995 10.1994C10.8972 10.0071 11.0494 9.77255 11.1448 9.51417C11.2265 9.304 11.3235 8.98875 11.35 8.40755C11.3788 7.77921 11.3847 7.59071 11.3847 5.99984C11.3847 4.40896 11.3788 4.22046 11.35 3.59213C11.3235 3.01092 11.2265 2.69567 11.1448 2.4855C11.0364 2.20763 10.908 2.00884 10.6995 1.8003C10.5072 1.60263 10.273 1.45049 10.0143 1.35505C9.80413 1.27325 9.48888 1.1763 8.90767 1.14975ZM5.73892 7.83663C6.16394 8.01355 6.63721 8.03743 7.07788 7.90419C7.51855 7.77094 7.8993 7.48883 8.15508 7.10605C8.41087 6.72327 8.52582 6.26356 8.48032 5.80544C8.43481 5.34731 8.23167 4.9192 7.90558 4.59421C7.69771 4.38647 7.44637 4.2274 7.16964 4.12846C6.89291 4.02952 6.59769 3.99316 6.30523 4.022C6.01276 4.05085 5.73033 4.14418 5.47827 4.29528C5.22621 4.44638 5.01078 4.65149 4.8475 4.89584C4.68422 5.14019 4.57715 5.4177 4.53399 5.7084C4.49083 5.9991 4.51267 6.29575 4.59792 6.57699C4.68317 6.85824 4.82972 7.11708 5.02702 7.3349C5.22431 7.55271 5.46745 7.72406 5.73892 7.83663ZM4.33438 3.83425C4.61876 3.54987 4.95638 3.32428 5.32795 3.17037C5.69953 3.01646 6.09777 2.93724 6.49996 2.93724C6.90215 2.93724 7.30039 3.01646 7.67196 3.17037C8.04354 3.32428 8.38115 3.54987 8.66554 3.83425C8.94993 4.11864 9.17552 4.45626 9.32943 4.82783C9.48334 5.1994 9.56256 5.59765 9.56256 5.99984C9.56256 6.40202 9.48334 6.80027 9.32943 7.17184C9.17552 7.54341 8.94993 7.88103 8.66554 8.16542C8.09119 8.73977 7.31221 9.06244 6.49996 9.06244C5.68771 9.06244 4.90872 8.73977 4.33438 8.16542C3.76003 7.59107 3.43736 6.81209 3.43736 5.99984C3.43736 5.18759 3.76003 4.4086 4.33438 3.83425ZM10.2418 3.39334C10.3123 3.32686 10.3687 3.24691 10.4077 3.15824C10.4467 3.06957 10.4676 2.97396 10.469 2.87709C10.4704 2.78022 10.4524 2.68405 10.4159 2.59428C10.3795 2.5045 10.3254 2.42295 10.2569 2.35444C10.1884 2.28594 10.1069 2.23187 10.0171 2.19545C9.92733 2.15903 9.83116 2.14099 9.73429 2.1424C9.63742 2.14382 9.54181 2.16465 9.45314 2.20367C9.36447 2.2427 9.28452 2.29911 9.21804 2.36959C9.08875 2.50664 9.01797 2.68869 9.02071 2.87709C9.02346 3.06549 9.09952 3.2454 9.23275 3.37863C9.36598 3.51186 9.54589 3.58792 9.73429 3.59067C9.92269 3.59341 10.1047 3.52263 10.2418 3.39334Z"
                      fill="white"
                    />
                  </svg>
                </small>
                <p className="underline">baliluxuryleisure</p>
              </div>
              <p className="mt-32">
                2022 Bali Luxury Leisure Design by Incognito.Asia
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span>About</span>
            <span>Experiences</span>
            <span>Contact</span>
            <span>Privacy</span>
            <span>Career</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span>Lorem</span>
            <span>Lorem</span>
            <span>Lorem</span>
            <span>Lorem</span>
            <span>Lorem</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
