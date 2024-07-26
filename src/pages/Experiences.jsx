import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Experiences = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  return (
    <>
      <div className="relative dark:bg-gray-800 min-w-fit" id="experience">
        <div
          className="absolute inset-0 blur-xl h-[670px]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div>

        <div className="relative container mx-auto sm:px-4 px-4">
          <p className="text-4xl font-semibold text-center my-11 dark:text-gray-400 text-gray-700">
            Experience
          </p>
          <ol className="relative border-s border-gray-700 dark:border-gray-300 text-justify">
            <motion.li
              className="mb-10 ms-4"
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">November 2023 - Present</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">IT Talent Fullstack Developer in PT. Enigma Cipta Humanika</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                <tr>
                  <td>-</td>
                  <td>Developed a comprehensive E-commerce platform with transactional capabilities and robust CRUD operations...</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>Designed and optimized Entity Relationship Diagrams (ERD) to establish efficient database structures...</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>Implemented RESTful APIs with Swagger documentation for improved project clarity and ease of integration...</td>
                </tr>
                {/* Add other points here */}
              </p>
            </motion.li>
            <motion.li
              className="mb-10 ms-4"
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">July 2023 - August 2023</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Processing in Central Statistics Agency (BPS)</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-300">Successfully spearheaded the refinement and anomaly removal process of agricultural survey data, rendering it reliable and suitable for in-depth analysis.</p>
            </motion.li>
            <motion.li
              className="ms-4"
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">June 2022 – August 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Research and Development Division in Tuban Library and Archives Office</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-300">
                <tr>
                  <td>-</td>
                  <td>Spearheaded the development of the E-Kodwil project, a dynamic back-end solution designed to streamline the management and accessibility of regional codes...</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>Implemented robust functionalities allowing users to seamlessly search, add, edit, and delete region codes...</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>Utilized a cutting-edge tech stack, including PHP, MySQL, and CodeIgniter...</td>
                </tr>
              </p>
            </motion.li>
          </ol>
        </div>
      </div>
    </>
  );
};
