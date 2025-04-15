import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Experiences = () => {

  const { ref: refOne, inView: refOneInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refTwo, inView: refTwoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refThree, inView: refThreeInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refFour, inView: refFourInView } = useInView({
    triggerOnce: true,
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
              ref={refOne}
              variants={fadeInUp}
              initial="hidden"
              animate={refOneInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">August 2024 - Present</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer in Bank Negara Indonesia ( BNI )</h3>
              <ul className="list-disc pl-5 text-base font-normal text-gray-500 dark:text-gray-300">
                <li>Leveraged JHipster to accelerate microservices development using Java, delivering modular and maintainable solutions aligned with business requirements.</li>
                <li>Utilized Oracle Database for schema creation, including Entity-Relationship Diagrams (ERDs) and establishing optimal relational structures to ensure data integrity and performance.</li>
                <li>Developed and maintained microservices, ensuring high availability and fault tolerance while adhering to modern software design principles.</li>
                <li>Designed and implemented robust services to handle internal, external, and mixed account submissions, ensuring seamless functionality and user experience.</li>
                <li>Developed and managed SOAP-based integrations for secure and efficient consumption of account-related data across various systems.</li>
                <li>Implemented transaction management strategies, including the use of optimistic and pessimistic locking, to maintain data consistency and reliability across distributed systems.</li>
                <li>Implemented RabbitMQ for integrating OCR Engines and automating Rules Engines, enabling streamlined document processing and decision-making workflows.</li>
                <li>Built and optimized Extract, Transform, Load (ETL) processes to clean, transform, and validate large datasets, ensuring data accuracy and consistency for downstream applications.</li>
                <li>Applied complex regular expressions to parse, extract, and validate data efficiently, significantly improving automation and reducing manual intervention.</li>
                <li>Deployed applications using Docker, ensuring consistent and scalable deployments across all environments.</li>
                <li>Parameterized configurations to enable flexibility and adaptability in various deployment scenarios, enhancing scalability and maintainability.</li>
                <li>Supported Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) to identify and mitigate vulnerabilities, ensuring compliance with security standards.</li>
              </ul>

            </motion.li>
            <motion.li
              className="mb-10 ms-4"
              ref={refTwo}
              variants={fadeInUp}
              initial="hidden"
              animate={refTwoInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">November 2023 - July 2024</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">IT Talent Fullstack Developer in PT. Enigma Cipta Humanika</h3>
              <ul className="list-disc pl-5 text-base font-normal text-gray-500 dark:text-gray-300">
                <li>Leveraged JHipster to accelerate microservices development using Java, delivering modular and maintainable solutions aligned with business requirements.</li>
                <li>Developed a comprehensive E-commerce platform with transactional capabilities and robust CRUD operations, seamless upload and download functionalities, utilizing Java, Spring Boot, JPA, and software architectural pattern.</li>
                <li>Designed and optimized Entity Relationship Diagrams (ERD) to establish efficient database structures, showcasing expertise in relational database concepts.</li>
                <li>Implemented RESTful APIs with Swagger documentation for improved project clarity and ease of integration.</li>
                <li>Strengthened application security by integrating JSON Web Tokens (JWT) to protect APIs from unauthorized access.</li>
                <li>Managed application containers using Docker to streamline deployment processes and enhance scalability.</li>
                <li>Demonstrated commitment to delivering secure, efficient, and scalable solutions in Java-based end-to-end application development.</li>
                <li>Engineered responsive web interfaces and mobile applications for E-commerce using ReactJS and React Native.</li>
                <li>Implemented unit and integration tests using JUnit and Mockito to ensure backend reliability and maintain high code quality standards.</li>
                <li>Employed Redux for centralized state management, ensuring smooth data flow and improved performance.</li>
                <li>Integrated Axios interceptors to manage HTTP requests effectively and enhance API communication.</li>
                <li>Conducted rigorous unit and integration testing using Jest and React Testing Library to ensure frontend robustness and reliability.</li>
                <li>Created mobile-specific components and leveraged React Navigation for seamless navigation in React Native applications.</li>
              </ul>

            </motion.li>
            <motion.li
              className="mb-10 ms-4"
              ref={refThree}
              variants={fadeInUp}
              initial="hidden"
              animate={refThreeInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">July 2023 - August 2023</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Processing in Central Statistics Agency (BPS)</h3>
              <ul className="list-disc pl-5 text-base font-normal text-gray-500 dark:text-gray-300">
  <li>Successfully spearheaded the refinement and anomaly removal process of agricultural survey data, rendering it reliable and suitable for in-depth analysis.</li>
</ul>

            </motion.li>
            <motion.li
              className="mb-10 ms-4"
              ref={refFour}
              variants={fadeInUp}
              initial="hidden"
              animate={refFourInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">June 2022 – August 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Research and Development Division in Tuban Library and Archives Office</h3>
              <ul className="list-disc pl-5 text-base font-normal text-gray-500 dark:text-gray-300">
                <li>Spearheaded the development of the E-Kodwil project, a dynamic back-end solution designed to streamline the management and accessibility of regional codes.</li>
                <li>Implemented robust functionalities allowing users to seamlessly search, add, edit, and delete region codes, enhancing overall efficiency in data management.</li>
                <li>Utilized a cutting-edge tech stack, including PHP, MySQL, and CodeIgniter.</li>
              </ul>

            </motion.li>
          </ol>
        </div>
      </div>
    </>
  );
};
