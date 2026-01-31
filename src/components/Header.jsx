import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    // Set active menu based on current path
    if (location.pathname === "/") {
      setActiveMenu("home");
    } else if (location.pathname === "/breast-pumbs") {
      setActiveMenu("breast-pumbs");
    } else if (location.pathname === "/feeding-bottles") {
      setActiveMenu("feeding-bottles");
    } else if (location.pathname === "/baby-foods") {
      setActiveMenu("baby-foods");
    } else {
      setActiveMenu("");
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        isScrolled
          ? "fixed top-0 z-20 w-full animate-slideDown bg-primary-50 p-2 drop-shadow-md sm:p-3 md:p-4 lg:p-6"
          : "relative w-full bg-primary-50 p-2 sm:p-3 md:p-4 lg:p-6"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-2 sm:px-3 md:px-4">
        <div className="grid grid-cols-12 items-center gap-2">
          <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <Link className="block w-3/4 sm:w-4/5 md:w-11/12 lg:w-4/5" to="/">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-auto w-full"
              />
            </Link>
          </div>
          <div className="col-span-6 sm:col-span-8 md:col-span-9 lg:col-span-10">
            <div className="grid grid-cols-12 items-center gap-2">
              <div className="relative col-span-12 order-2 w-full sm:order-1 sm:col-span-9 md:col-span-9 md:w-11/12 lg:w-full">
                <input
                  className="w-full rounded-3xl bg-white px-3 py-2 text-xs placeholder:text-zinc-500 sm:px-4 sm:py-2.5 sm:text-sm md:px-4 md:py-3 md:text-sm lg:px-4 lg:py-3 lg:text-sm"
                  type="text"
                  placeholder="What are you looking for"
                />
                <button className="absolute right-2 top-1/2 flex -translate-y-1/2 gap-x-1 sm:right-3 sm:gap-x-2 md:right-4 lg:right-6">
                  <img className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" src="/images/icons/search.svg" />
                  <p className="hidden text-xs font-bold text-black sm:text-sm md:text-sm lg:block lg:text-sm">
                    Search
                  </p>
                </button>
              </div>
              <div className="col-span-3 hidden items-center justify-center space-x-2 text-sm md:flex lg:justify-end">
                <a
                  href=""
                  class="rounded-full bg-primary-700 p-2 transition duration-300 ease-in-out hover:scale-110"
                  target="_blank"
                >
                  <img
                    src="/images/icons/facebook.svg"
                    class="h-5 w-5"
                    alt="facebook icon"
                  />
                </a>
                <a
                  href="#"
                  class="rounded-full bg-primary-700 p-2 transition duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    src="/images/icons/instagram.svg"
                    class="h-5 w-5"
                    alt="instagram icon"
                  />
                </a>
                <a
                  href=""
                  target="_blank"
                  class="rounded-full bg-primary-700 p-2 transition duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    src="/images/icons/youtube.svg"
                    class="h-5 w-5"
                    alt="youtube icon"
                  />
                </a>
                <a
                  href=""
                  class="rounded-full bg-primary-700 p-2 transition duration-300 ease-in-out hover:scale-110"
                  target="_blank"
                >
                  <img
                    src="/images/icons/threads.svg"
                    class="h-5 w-5"
                    alt="threads icon"
                  />
                </a>
              </div>
              <div className="col-span-2 flex justify-end md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="bg-transparent text-primary-700 focus:outline-none"
                >
                  {isMobileMenuOpen ? (
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <nav className="col-span-12 hidden md:col-span-8 md:block lg:col-span-12">
              <div className="mt-6 flex justify-end text-center font-semibold uppercase tracking-[0.25px] text-zinc-600 md:space-x-3 md:text-xs lg:space-x-5 lg:text-sm">
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "home" ? "text-primary-600" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/feeding-bottles"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "feeding-bottles" ? "text-primary-600" : ""
                  }`}
                >
                  Feeding Bottles
                </Link>
                <Link
                  to="/baby-foods"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "baby-foods" ? "text-primary-600" : ""
                  }`}
                >
                  Baby Foods
                </Link>
                <Link
                  to="/breast-pumbs"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "breast-pumbs" ? "text-primary-600" : ""
                  }`}
                >
                  Natural Feedings
                </Link>
                <div class="group relative">
                  <Link
                    to="/"
                    className={`transition-colors duration-200 hover:text-black ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                  >
                    Accessories
                    <div class="invisible absolute left-1/2 top-full z-50 hidden -translate-x-1/2 transform gap-x-10 whitespace-nowrap rounded-2xl bg-black/70 p-6 text-white opacity-0 shadow-xl transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 md:flex">
                      <div class="text-center">
                        <img
                          src="/images/dropdownmenu/bottle_steriliser.png"
                          alt="Bottle Steriliser"
                          class="mx-auto mb-3 h-24 w-auto"
                        />
                        <div class="text-xs font-semibold leading-tight">
                          BOTTLE STERILISER
                          <br />& DRIER
                        </div>
                      </div>
                      <div class="text-center">
                        <img
                          src="/images/dropdownmenu/high_chair.png"
                          alt="High Chair"
                          class="mx-auto mb-3 h-24 w-auto"
                        />
                        <div class="text-xs font-semibold">HIGH CHAIR</div>
                      </div>
                      <div class="text-center">
                        <img
                          src="/images/dropdownmenu/kids_scooter.png"
                          alt="Kids Scooter"
                          class="mx-auto mb-3 h-24 w-auto"
                        />
                        <div class="text-xs font-semibold">KIDS SCOOTER</div>
                      </div>
                      <div class="text-center">
                        <img
                          src="/images/dropdownmenu/walking_aid.png"
                          alt="Walking Aid"
                          class="mx-auto mb-3 h-24 w-auto"
                        />
                        <div class="text-xs font-semibold">WALKING AID</div>
                      </div>
                      <div class="text-center">
                        <img
                          src="/images/dropdownmenu/baby_carrier.png"
                          alt="Baby Carrier"
                          class="mx-auto mb-3 h-24 w-auto"
                        />
                        <div class="text-xs font-semibold">BABY CARRIER</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "" ? "text-primary-600" : ""
                  }`}
                >
                  Nature Skin Care
                </Link>
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "" ? "text-primary-600" : ""
                  }`}
                >
                  Bath & Diapering
                </Link>
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "" ? "text-primary-600" : ""
                  }`}
                >
                  Fun Time
                </Link>
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "" ? "text-primary-600" : ""
                  }`}
                >
                  Travel & Gear
                </Link>
              </div>
            </nav>
            {isMobileMenuOpen && (
              <div
                id="mobile-menu"
                className="absolute left-0 top-full z-10 w-full bg-primary-50 text-sm font-medium text-zinc-600 md:hidden"
              >
                <nav className="flex flex-col">
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "home" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/feeding-bottles"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "feeding-bottles" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Feeding Bottles
                  </Link>
                  <Link
                    to="/baby-foods"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "baby-foods" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Baby Foods
                  </Link>
                  <Link
                    to="/breast-pumbs"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "breast-pumbs" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Natural Feedings
                  </Link>
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Accessories
                  </Link>
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Nature Skin Care
                  </Link>
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Bath & Diapering
                  </Link>
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Fun Time
                  </Link>
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Travel & Gear
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
