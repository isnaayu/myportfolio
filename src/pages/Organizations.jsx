import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Organizations = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1, 
      });
    
  return (
    <>
        <div className="relative min-w-full" id="organizations">
        
        
        <div className="relative container mx-auto sm:px-4 px-4">
        <p className="text-4xl font-semibold text-center my-11 dark:text-gray-400 text-gray-700">
                  Organizations
        </p>
        <ol className="relative border-s border-gray-700 dark:border-gray-300 text-justify">
        <motion.li
              className=""
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
<li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">September 2019 - September 2023</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Secretary of the Association of Informatics Engineering Students</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                <tr>
                    <td className="italic">Nahdlatul Ulama Sunan Giri University</td>
                </tr>
                </p>
            </li>
                            
            
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">September 2019 - September 2023</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Secretary of the Intra-School Student Organization</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                <tr>
                    <td className="italic">SMA N 1 Soko</td>
                </tr>
                </p>
            </li>
            </motion.li>  
        </ol>


        </div>
        </div>


    </>
  )
}
