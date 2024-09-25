const Footer = () => {
  return (
    <footer className="bg-[#14a8e1] md:py-20 py-10 text-white">
      <div className="container md:w-[83%] mx-auto px-4 ">
        <div className="border-b-[1px] md:mb-12 mb-6 border-gray-100 border-opacity-25">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center">
              <img src="/flair_logo copy.svg" alt="logo" width={120} />
            </div>

            <div className="flex space-x-4 ">
              <a href="https://www.linkedin.com/company/flairhealth/"
                className="hover:opacity-75"
                aria-label="Linkedin"
                target="_blank" >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24" >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com/flairhealthcare?s=08"
                className="hover:opacity-75"
                aria-label="Twitter"
                target="_blank" >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24" >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/flairhealth/?igsh=MTJlazhuaTFyZ3ZmMw%3D%3D"
                className="hover:opacity-75"
                aria-label="Instagram"
                target="_blank" >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24" >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12 text-base">
          <div className="space-y-3">            
            <div className="text-lg font-semibold">Contact Our Team</div>
            <div className="block "></div>
            <a href="mailto:hello@flairhealth.com" className="block hover:underline">
              hello@flairhealth.com
            </a>
            <a className="block">
              San Francisco, CA
            </a>
          </div>
          <div className="space-y-3">
            <div className="text-lg font-semibold">Quick Links</div>
            <div className="block "></div>
            <a href="/#features" className="block hover:underline">
              Features
            </a>
            <a href="/about" className="block hover:underline">
              About Us
            </a>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row  items-center text-sm">
          <div className="space-x-6 mb-2">
            <a href="#" className="hover:underline"> Terms of Use </a>
            <a href="#" className="hover:underline"> Privacy Policy </a>
          </div>
          <div>© Flair Health 2024</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;