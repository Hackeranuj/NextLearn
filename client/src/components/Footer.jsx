import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8 transition duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">NextLearn</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Empowering your journey of knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#COURSE" className="hover:underline">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#FAQs" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:underline">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media and Copy */}
        <div className="flex justify-between items-center border-t border-gray-300 dark:border-gray-700 pt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} NextLearn. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22 12C22 5.373 17.627 1 11 1 4.373 1 0 5.373 0 12c0 5.989 4.388 10.934 10.125 11.854V15.4H7.077v-2.633h3.048V10.69c0-3.02 1.79-4.679 4.524-4.679 1.312 0 2.687.236 2.687.236v2.954h-1.514c-1.492 0-1.957.931-1.957 1.884v2.285h3.322l-.53 2.633h-2.792v8.454C19.612 22.934 24 17.99 24 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M24 4.557a9.825 9.825 0 01-2.825.775A4.93 4.93 0 0023.337 3c-.943.56-1.98.974-3.083 1.195a4.908 4.908 0 00-8.384 4.466A13.93 13.93 0 011.671 3.149a4.822 4.822 0 001.523 6.573A4.907 4.907 0 01.96 9.409v.062a4.906 4.906 0 003.946 4.808 4.899 4.899 0 01-2.212.084 4.908 4.908 0 004.588 3.417 9.83 9.83 0 01-6.07 2.092c-.394 0-.779-.023-1.161-.067A13.901 13.901 0 007.548 21c9.052 0 14.002-7.496 14.002-13.986 0-.213-.005-.426-.014-.637A9.935 9.935 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.313 3.608 1.288.975.975 1.226 2.242 1.288 3.608.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.313 2.633-1.288 3.608-.975.975-2.242 1.226-3.608 1.288-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.313-3.608-1.288-.975-.975-1.226-2.242-1.288-3.608-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.313-2.633 1.288-3.608.975-.975 2.242-1.226 3.608-1.288 1.265-.058 1.645-.07 4.85-.07M12 0C8.741 0 8.332.015 7.052.072 5.783.128 4.545.385 3.515 1.415c-1.03 1.03-1.287 2.268-1.343 3.537C2.015 5.931 2 6.34 2 9.602v4.796c0 3.262.015 3.671.072 4.952.056 1.27.313 2.507 1.343 3.537 1.03 1.03 2.268 1.287 3.537 1.343 1.27.056 1.679.072 4.952.072s3.671-.015 4.952-.072c1.27-.056 2.507-.313 3.537-1.343 1.03-1.03 1.287-2.268 1.343-3.537.056-1.27.072-1.679.072-4.952V9.602c0-3.262-.015-3.671-.072-4.952-.056-1.27-.313-2.507-1.343-3.537-1.03-1.03-2.268-1.287-3.537-1.343C15.671.015 15.262 0 12 0zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.324a4.162 4.162 0 1 1 0-8.324 4.162 4.162 0 0 1 0 8.324zm6.406-11.845a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
