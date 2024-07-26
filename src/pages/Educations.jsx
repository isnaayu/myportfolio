import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Educations = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <>
      <div className="relative dark:bg-gray-800 min-w-full" id="education">
        <div
          className="absolute inset-0 blur-xl h-[670px]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div>

        <div className="relative container mx-auto sm:px-4 px-4">
          <p className="text-4xl font-semibold text-center my-11 dark:text-gray-400 text-gray-700">
            Educations
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
              <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">September 2019 - September 2023</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nahdlatul Ulama Sunan Giri University</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                <tr>
                  <td className="italic">Bachelor’s Degree in Informatics Engineering. GPA: 3.81/4.00.</td>
                </tr>
                <tr>
                  <td>Final Thesis: Real-Time Tomato Quality Detection System Using You Only Look Once (YOLOv7) Algorithm. Journal: <a href="https://ejournals.umn.ac.id/index.php/TI/article/view/3337" className="italic text-blue-500">access journal</a></td>
                </tr>
              </p>
            </motion.li>
          </ol>
        </div>
      </div>
    </>
  );
};
