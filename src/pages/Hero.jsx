import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const Hero = () => {
  const onDownloadResume = () => {
    fetch("/img/cv.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume_Isna_Ayu_M.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div className="relative dark:bg-gray-800 min-w-full" id="home">
        <div
          className="absolute inset-0 blur-xl h-[670px]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div>
        <div className="relative sm:p-2" >
          <section >
            <motion.div
              className="container mx-auto px-4 py-28 sm:gap-2 gap-64 text-gray-600 overflow-hidden md:flex justify-between"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex-none space-y-5 max-w-2xl sm:max-w-screen-sm">
                <a
                  href=""
                  className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
                >
                  <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
                    News
                  </span>
                  <p className="flex items-center dark:text-gray-200">
                    Read the launch post from here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                </a>
                <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl dark:text-gray-400">
                  Welcome to my Portfolio <br />
                </h1>
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1000,
                    'Back End Developer',
                    1000,
                    'Front End Developer',
                    1000,
                    'Software Engineer',
                    1000,
                  ]}
                  className="text-4xl text-gray-800 font-extrabold sm:text-5xl inline-block dark:text-gray-400"
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <p className="text-justify dark:text-gray-300">
                  I am Isna Ayu Muarofah, a graduate in Informatics Engineering with a strong passion for advancing in the field of
                  technology. I bring experience in software development and actively pursue training to enhance both my technical and
                  soft skills. I am keen to pursue a career as a frontend developer, backend developer, or full stack developer, while
                  remaining open to exploring other areas within the technology sector. I believe that every challenge is an opportunity for
                  learning and growth, and I am prepared to make meaningful contributions in a dynamic and innovative work environment.
                </p>
                <div className="flex items-center gap-x-3 sm:text-sm sm:gap-x-2">
                  <button
                    onClick={onDownloadResume}
                    className="flex sm:text-sm items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                  >
                    Download Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <a
                    href="https://github.com/isnaayu?tab=repositories"
                    target="_blank"
                    className="flex sm:text-sm items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                  >
                    Github
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/isna-ayu-m/"
                    target="_blank"
                    className="flex sm:text-sm items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-500 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                  >
                    LinkedIn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex-1 flex justify-center sm:justify-center sm:items-center sm:py-4">
                <img
                  src="/img/image.png"
                  className="max-w-md"
                />
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};
