import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("color-theme") === "dark" ||
      (!localStorage.getItem("color-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    if (isDarkMode) {
      themeToggleLightIcon.classList.add("hidden");
      themeToggleDarkIcon.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.classList.add("hidden");
      themeToggleLightIcon.classList.remove("hidden");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  };

  const location = useLocation();
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    setActiveSection(location.hash);
  }, [location]);

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu-4");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };


  return (
    <>
        <div className="mx-auto ">
        <nav className="container items-center mx-auto fixed bg-white shadow-md border-gray-200 px-4 py-2.5 rounded dark:bg-gray-800 z-10 min-w-full">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
              <a href="#" className="flex">
              <svg width="55" height="55" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="_x35_74_x2C__Cup_x2C__Coffee_x2C__Tea_x2C__Love"><g>
                <path d="M206.16,209.105c-2.762,0-5-2.239-5-5c0-22.74,18.505-41.24,41.25-41.24h72.49    c3.509,0,6.8-1.364,9.269-3.84c2.485-2.485,3.851-5.782,3.851-9.29c0-7.234-5.885-13.12-13.119-13.12H188.04    c-6.186,0-11.992-2.408-16.352-6.78c-4.363-4.363-6.769-10.168-6.769-16.34c0-12.749,10.371-23.12,23.12-23.12h54.37    c7.234,0,13.12-5.89,13.12-13.13c0-2.761,2.238-5,5-5s5,2.239,5,5c0,12.754-10.372,23.13-23.12,23.13h-54.37    c-7.234,0-13.12,5.886-13.12,13.12c0,3.501,1.365,6.794,3.846,9.274c2.474,2.482,5.766,3.846,9.274,3.846H314.9    c12.748,0,23.119,10.372,23.119,23.12c0,6.179-2.406,11.988-6.774,16.355c-4.353,4.367-10.159,6.774-16.345,6.774h-72.49    c-17.231,0-31.25,14.014-31.25,31.24C211.16,206.866,208.921,209.105,206.16,209.105z" fill="#EDAB7A"/>

                <path d="M79.31,147.735c10,0,18.12,8.12,18.12,18.13c0,10.01-8.12,18.12-18.12,18.12    c-10.01,0-18.13-8.11-18.13-18.12C61.18,155.855,69.3,147.735,79.31,147.735z" fill="#924B35"/>
                <path d="M66.18,175.532c0-10.01,8.12-18.13,18.13-18.13c5.012,0,9.551,2.041,12.832,5.335    c-1.485-8.518-8.899-15.002-17.832-15.002c-10.01,0-18.13,8.12-18.13,18.13c0,4.992,2.021,9.511,5.287,12.788    C66.29,177.637,66.18,176.599,66.18,175.532z" fill="#843F2C"/>
                <path d="M432.69,338.025c10.01,0,18.13,8.109,18.13,18.12c0,10.01-8.12,18.13-18.13,18.13    c-10.011,0-18.12-8.12-18.12-18.13C414.57,346.135,422.68,338.025,432.69,338.025z" fill="#FBB14F"/>
                <path d="M419.57,365.896c0-10.011,8.109-18.12,18.12-18.12c5.026,0,9.573,2.046,12.858,5.35    c-1.442-8.569-8.88-15.1-17.858-15.1c-10.011,0-18.12,8.109-18.12,18.12c0,4.987,2.015,9.504,5.273,12.782    C419.677,367.939,419.57,366.931,419.57,365.896z" fill="#EDA248"/>
                <path d="M387.39,102.435c10.011,0,18.12,8.11,18.12,18.12c0,10.01-8.109,18.12-18.12,18.12    c-10.01,0-18.12-8.11-18.12-18.12C369.27,110.545,377.38,102.435,387.39,102.435z" fill="#FFD15C"/>
                <path d="M374.937,131.055c0-10.01,8.11-18.12,18.12-18.12c4.709,0,8.983,1.81,12.205,4.753    c-1.377-8.643-8.84-15.253-17.872-15.253c-10.01,0-18.12,8.11-18.12,18.12c0,5.301,2.289,10.054,5.915,13.367    C375.035,132.986,374.937,132.033,374.937,131.055z" fill="#FBB14F"/>
                <polygon points="367.14,202.105 367.14,247.415 131.55,247.415 131.55,202.105 206.16,202.105   " fill="#FFC592"/>
                <polygon points="142.55,212.438 217.16,212.438 367.14,212.438 367.14,202.105 206.16,202.105     131.55,202.105 131.55,247.415 142.55,247.415   " fill="#EDAB7A"/>
                <path d="M131.55,247.415h235.59c0,79.53-53.18,144.98-117.8,144.98S131.55,326.945,131.55,247.415z     M296.78,297.445c0-12.62-11.16-22.851-24.94-22.851c-12.46,0-18.69,5.711-24.92,17.141c-6.22-11.43-12.45-17.141-24.91-17.141    c-13.75,0-24.91,10.23-24.91,22.851c0,22.84,24.91,35.86,49.82,58.7C271.84,333.306,296.78,320.285,296.78,297.445z" fill="#924B35"/>
                <g>
                <path d="M145.217,259.081h221.534c0.254-3.851,0.389-7.74,0.389-11.666H131.55     c0,52.789,23.431,99.367,58.082,124.727C162.63,345.479,145.217,304.588,145.217,259.081z" fill="#843F2C"/>
                </g>
                <path d="M271.84,274.595c13.78,0,24.94,10.23,24.94,22.851c0,22.84-24.94,35.86-49.86,58.7    c-24.91-22.84-49.82-35.86-49.82-58.7c0-12.62,11.16-22.851,24.91-22.851c12.46,0,18.69,5.711,24.91,17.141    C253.149,280.306,259.38,274.595,271.84,274.595z" fill="#EF3E5C"/>
                <g><g><g>
                <path d="M213.1,303.779c0-12.62,11.16-22.851,24.91-22.851c0.424,0,0.824,0.023,1.234,0.036       c-4.373-4.239-9.646-6.37-17.234-6.37c-13.75,0-24.91,10.23-24.91,22.851c0,22.84,24.91,35.86,49.82,58.7       c1.431-1.312,2.86-2.587,4.287-3.837C230.758,335.279,213.1,323.009,213.1,303.779z" fill="#E42A53"/></g></g> </g>
                <path d="M398.98,390.705c4.029,3.28,6.529,7.8,6.529,12.811c0,10.01-9.99,18.119-22.31,18.119h-63.71    c-4.65,0-9.23,0.801-13.55,2.33c-4.311,1.54-8.37,3.801-11.98,6.73c-7.21,5.87-16.229,9.06-25.52,9.06h-38.19    c-4.65,0-9.23-0.8-13.54-2.33c-4.32-1.529-8.37-3.8-11.98-6.729c-7.22-5.86-16.229-9.061-25.529-9.061h-63.71    c-6.16,0-11.74-2.029-15.771-5.31c-4.04-3.28-6.54-7.8-6.54-12.81c0-10.011,9.99-18.12,22.311-18.12h133.85H383.2    C389.36,385.396,394.94,387.425,398.98,390.705z" fill="#FFC592"/>
                <path d="M104.18,414.849c0-10.011,9.99-18.12,22.311-18.12h133.85H394.2c3.826,0,7.426,0.785,10.574,2.164    c-1.019-3.146-3.051-5.954-5.794-8.188c-4.04-3.28-9.62-5.31-15.78-5.31H249.34H115.49c-12.32,0-22.311,8.109-22.311,18.12    c0,5.01,2.5,9.529,6.54,12.81c1.526,1.242,3.276,2.304,5.195,3.145C104.437,417.995,104.18,416.447,104.18,414.849z" fill="#EDAB7A"/>
                <path d="M333.955,352.085c-2.594,0-4.786-2.001-4.981-4.629c-0.205-2.754,1.861-5.152,4.615-5.357    c0.304-0.024,31.939-2.894,52.701-34.028c12.711-19.068,10.708-25.751,9.257-27.738c-4.021-5.508-20.818-3.811-30.903-0.93    c-2.654,0.757-5.422-0.779-6.182-3.434c-0.759-2.655,0.779-5.423,3.434-6.182c3.246-0.928,32-8.677,41.729,4.648    c6.016,8.241,3.067,21.058-9.014,39.183c-23.564,35.336-58.791,38.343-60.279,38.453    C334.205,352.081,334.079,352.085,333.955,352.085z" fill="#924B35"/>
                </g>
                </g>
                <g id="Layer_1"/>
                </svg>
                <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                  Isna Ayu M
                </span>
              </a>
              <div className="flex md:order-2">
                <button
                  onClick={toggleDarkMode}
                  id="theme-toggle"
                  type="button"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                >
                  <svg
                    id="theme-toggle-dark-icon"
                    className="w-8 h-8 hidden"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    className="w-8 h-8 hidden"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* <!-- Dark mode switcher end --> */}

                <button
                  onClick={toggleMenu}
                  type="button"
                  className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2 inline-flex items-center dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-4"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
                id="mobile-menu-4"
              >
                <ul className="flex-col font-medium md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:font-medium">
                  <li>
                  <a
            href="#home"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 rounded md:p-0 ${activeSection === "#home" ? "text-blue-700" : ""}`}
            onClick={() => setActiveSection("#home")}
          >
            Home
          </a>
                  </li>
                  <li>
                  <a
            href="#skills"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 rounded md:p-0 ${activeSection === "#skills" ? "text-blue-700" : ""}`}
            onClick={() => setActiveSection("#skills")}
          >
            Skills
          </a>
                  </li>
                  <li>
                  <a
            href="#experience"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 rounded md:p-0 ${activeSection === "#experience" ? "text-blue-700" : ""}`}
            onClick={() => setActiveSection("#experience")}
          >
            Experience
          </a>
                  </li>
                  <li>
                  <a
            href="#education"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 rounded md:p-0 ${activeSection === "#education" ? "text-blue-700" : ""}`}
            onClick={() => setActiveSection("#skills")}
          >
            Educations
          </a>
                  </li>
                  <li>
                  <a
            href="#organizations"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 rounded md:p-0 ${activeSection === "#organizations" ? "text-blue-700" : ""}`}
            onClick={() => setActiveSection("#organizations")}
          >
            Organizations
          </a>
                  </li>
                  <li>
                  <a
            href="#project"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 rounded md:p-0 ${activeSection === "#project" ? "text-blue-700" : ""}`}
            onClick={() => setActiveSection("#project")}
          >
            Projects
          </a>
                  </li>
                  <li>
                  <a
            href="#certifications"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 rounded md:p-0 ${activeSection === "#certifications" ? "text-blue-700" : ""}`}
            onClick={() => setActiveSection("#certifications")}
          >
            Certifications
          </a>
                  </li>
                  <li>
                  <a
            href="#gallery"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 rounded md:p-0 ${activeSection === "#gallery" ? "text-blue-700" : ""}`}
            onClick={() => setActiveSection("#gallery")}
          >
            Gallery
          </a>
                  </li>
                  <li>
                  <a
            href="#contact"
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 rounded md:p-0 ${activeSection === "#contact" ? "text-blue-700" : ""}`}
            onClick={() => setActiveSection("#contact")}
          >
            Contact
          </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
    </>
  );
};
