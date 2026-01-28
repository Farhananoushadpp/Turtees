const Footer = () => {
  return (
    <footer className="bg-primary-50 p-3 py-0 lg:py-12">
      <div className="container mx-auto">
        <div className="mx-auto w-full lg:w-10/12">
          <div className="grid grid-cols-12 border-b border-t border-gray-400 py-6">
            <div className="col-span-12 lg:col-span-4">
              <h6 className="text-sm font-semibold text-zinc-500">
                Contact Us
              </h6>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                Turtees of Scotland, UK, UAE, KSA, Bahrain, Qatar, Oman, Kuwait,
                Jordan, UK, India, China, Hongkong
                <br />
                <br />
                export@turteesglobal.com
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h6 className="mt-5 text-left text-sm font-semibold text-zinc-500 lg:mt-0 lg:text-center">
                Join the Conversation
              </h6>
              <div className="mt-4 flex justify-start space-x-4 lg:justify-center">
                <a
                  href=""
                  class="rounded-full border border-black p-2 transition duration-300 ease-in-out hover:scale-110"
                  target="_blank"
                >
                  <img
                    src="/images/icons/facebook_black.svg"
                    class="h-5 w-5"
                    alt="facebook icon"
                  />
                </a>
                <a
                  href="#"
                  class="rounded-full border border-black p-2 transition duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    src="/images/icons/instagram_black.svg"
                    class="h-5 w-5"
                    alt="instagram icon"
                  />
                </a>
                <a
                  href=""
                  target="_blank"
                  class="rounded-full border border-black p-2 transition duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    src="/images/icons/youtube_black.svg"
                    class="h-5 w-5"
                    alt="youtube icon"
                  />
                </a>
                <a
                  href=""
                  class="rounded-full border border-black p-2 transition duration-300 ease-in-out hover:scale-110"
                  target="_blank"
                >
                  <img
                    src="/images/icons/threads_black.svg"
                    class="h-5 w-5"
                    alt="threads icon"
                  />
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h6 className="mt-5 text-sm font-semibold text-zinc-500 lg:mt-0">
                Get Enquiry
              </h6>
              <div className="mt-3 flex">
                <input
                  placeholder="Enter your Email"
                  className="w-full rounded-l-sm border border-black bg-white p-2 placeholder:text-xs"
                  type="text"
                />
                <button className="rounded-r-sm bg-black px-6 py-2 text-sm font-semibold text-white">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 py-6">
            <div className="col-span-12 lg:col-span-2">
              <a>
                <img
                  className="mx-auto w-2/6 lg:mx-0 lg:w-4/5"
                  src=".././images/logo.svg"
                />
              </a>
            </div>
            <div className="col-span-12 grid items-center justify-center lg:col-span-9">
              <div className="my-4 flex flex-col items-center gap-y-3 text-sm text-zinc-700 md:my-0 md:flex-row md:gap-x-2 lg:gap-y-0">
                <div className="flex items-center gap-x-1">
                  <p>Our customers say</p>
                  <h5 className="font-semibold text-black">Excellent</h5>
                </div>
                <div className="flex gap-x-1">
                  <img
                    className="w-5"
                    src=".././images/icons/star.svg"
                    alt="star"
                  />
                  <img
                    className="w-5"
                    src=".././images/icons/star.svg"
                    alt="star"
                  />
                  <img
                    className="w-5"
                    src=".././images/icons/star.svg"
                    alt="star"
                  />
                  <img
                    className="w-5"
                    src=".././images/icons/star.svg"
                    alt="star"
                  />
                  <img
                    className="w-5"
                    src=".././images/icons/star.svg"
                    alt="star"
                  />
                </div>
                <div className="flex items-center gap-x-1">
                  <h5 className="font-semibold text-black">4.7</h5>
                  <p>out of 5 based on</p>
                  <h5 className="font-semibold text-black">10,002 reviews</h5>
                </div>
              </div>

              <p className="self-center text-center text-base font-normal text-zinc-600">
                Copyright © turtees | Designed by tarah.ae
              </p>
            </div>
            <div className="col-span-12 mt-4 flex items-center justify-center gap-x-2 lg:col-span-1 lg:mt-0">
              <img className="w-10" src=".././images/icons/uae_flag.svg" />
              <p className="text-sm font-semibold text-zinc-500">Arabic</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
