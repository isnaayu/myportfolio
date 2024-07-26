import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <div className="relative min-w-full" id="project">
      <div className="absolute inset-0 blur-xl "
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}>
      </div>

      <motion.li
              className=""
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
      <div className="relative container mx-auto sm:px-2 px-4">
      <p className="text-4xl font-semibold text-center my-11 dark:text-gray-400 text-gray-700">
                  Projects
        </p>
        <div className="mx-auto bg-gray-50 rounded dark:bg-gray-600">

          <div id="accordion-collapse" data-accordion="collapse">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden divide-y divide-gray-200 dark:divide-gray-700">

                          {/* Accordion 2 */}
                          <div
                className={`${
                  activeAccordion === 1 ? "bg-gray-100 dark:bg-gray-800" : ""
                }`}
              >
                <div
                  className={`p-5 border-b border-gray-200 dark:border-gray-700 transition duration-500 ${
                    activeAccordion === 1 ? "bg-gray-100 dark:bg-gray-800" : ""
                  }`}
                >
                  <h2 id="accordion-collapse-heading-2">
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full font-medium text-left text-gray-900 dark:text-white focus:outline-none ${
                        activeAccordion === 1 ? "text-indigo-600 dark:text-indigo-400 text-3xl font-semibold mb-4" : ""
                      }`}
                      onClick={() => toggleAccordion(1)}
                      aria-expanded={activeAccordion === 1 ? "true" : "false"}
                      aria-controls="accordion-collapse-body-2"
                    >
                      <span>K-Lound App</span>
                      <svg
                        className={`w-6 h-6 ml-2 transition-transform ${
                          activeAccordion === 1 ? "transform rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-2"
                    className={`${
                      activeAccordion === 1 ? "block" : "hidden"
                    } transition-max-h duration-500 overflow-hidden`}
                    aria-labelledby="accordion-collapse-heading-2"
                  >
                    <img src="/img/kloun.png"  />

                    <p className="text-blue-600 dark:text-blue-500 mt-2 italic">
                      Tech stack: Java Springboot, ReactJs, React Native
                    </p>
                    <p className="text-blue-600 dark:text-blue-500 mt-2 italic font-bold">
                      Job Description:
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                    I spearheaded the development of an advanced online collaboration platform by harnessing the power of Redux, React JS, and TailwindCSS. With seamless integration of backend APIs and JWT decoding, I engineered a frontend boasting robust authorization and authentication capabilities. Notably, I implemented an automated password reset feature using Java SpringBoot, ensuring a secure and user-friendly experience. containerization using docker and deploy the application in Amazon Web Services (AWS) Cloud
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Accordion 1 */}
              <div
                className={`${
                  activeAccordion === 0 ? "bg-gray-100 dark:bg-gray-800" : ""
                }`}
              >
                <div
                  className={`p-5 border-b border-gray-200 dark:border-gray-700 transition duration-500 ${
                    activeAccordion === 0 ? "bg-gray-100 dark:bg-gray-800" : ""
                  }`}
                >
                  <h2 id="accordion-collapse-heading-1">
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full font-medium text-left text-gray-900 dark:text-white focus:outline-none ${
                        activeAccordion === 0 ? "text-indigo-600 dark:text-indigo-400 text-3xl font-semibold mb-4" : ""
                      }`}
                      onClick={() => toggleAccordion(0)}
                      aria-expanded={activeAccordion === 0 ? "true" : "false"}
                      aria-controls="accordion-collapse-body-1"
                    >
                      <span>E-Commerce Project</span>
                      <svg
                        className={`w-6 h-6 ml-2 transition-transform ${
                          activeAccordion === 0 ? "transform rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-1"
                    className={`${
                      activeAccordion === 0 ? "block" : "hidden"
                    } transition-max-h duration-500 overflow-hidden`}
                    aria-labelledby="accordion-collapse-heading-1"
                  >
                    <img src="/img/ecom.png" />

                    <p className="text-blue-600 dark:text-blue-500 mt-2 italic">
                      Tech stack: Java Springboot, ReactJs, React Native
                    </p>
                    <p className="text-blue-600 dark:text-blue-500 mt-2 italic font-bold">
                      Job Description:
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                    <tr>
                <td>-</td>
                    <td>Developed a comprehensive E-commerce platform with transactional capabilities and robust CRUD operations,
                    seamless upload and download functionalities, utilizing Java, Spring Boot, JPA, and software architectural pattern.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Designed and optimized Entity Relationship Diagrams (ERD) to establish efficient database structures, showcasing expertise in relational database concepts.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Implemented RESTful APIs with Swagger documentation for improved project clarity and ease of integration.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Strengthened application security by integrating JSON Web Tokens (JWT) to protect APIs from unauthorized access.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Managed application containers using Docker to streamline deployment processes and enhance scalability.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Demonstrated commitment to delivering secure, efficient, and scalable solutions in Java-based end-to-end application development.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Implemented unit and integration tests using JUnit and Mockito to ensure backend reliability and maintain high code quality standards.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Engineered responsive web interfaces and mobile applications for E-commerce using ReactJS and React Native.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Employed Redux for centralized state management, ensuring smooth data flow and improved performance.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Integrated Axios interceptors to manage HTTP requests effectively and enhance API communication.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Conducted rigorous unit and integration testing using Jest and React Testing Library to ensure frontend robustness and reliability.</td>
                </tr>
                <tr>
                <td>-</td>
                    <td>Created mobile-specific components and leveraged React Navigation for seamless navigation in React Native
                    applications.</td>
                </tr>
                    </p>
                  </div>
                </div>
              </div>
              

              
              {/* Accordion 3 */}
              <div
                className={`${
                  activeAccordion === 2 ? "bg-gray-100 dark:bg-gray-800" : ""
                }`}
              >
                <div
                  className={`p-5 transition duration-500 ${
                    activeAccordion === 2 ? "bg-gray-100 dark:bg-gray-800" : ""
                  }`}
                >
                  <h2 id="accordion-collapse-heading-3">
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full font-medium text-left text-gray-900 dark:text-white focus:outline-none ${
                        activeAccordion === 2 ? "text-indigo-600 dark:text-indigo-400 text-3xl font-semibold mb-4" : ""
                      }`}
                      onClick={() => toggleAccordion(2)}
                      aria-expanded={activeAccordion === 2 ? "true" : "false"}
                      aria-controls="accordion-collapse-body-3"
                    >
                      <span>Real-time detection App</span>
                      <svg
                        className={`w-6 h-6 ml-2 transition-transform ${
                          activeAccordion === 2 ? "transform rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-3"
                    className={`${
                      activeAccordion === 2 ? "block" : "hidden"
                    } transition-max-h duration-500 overflow-hidden`}
                    aria-labelledby="accordion-collapse-heading-3"
                  >
                    <img src="/img/yolo.png" width="100%" />

                    <p className="text-blue-600 dark:text-blue-500 mt-2 italic">
                      Tech stack: Python, Flask
                    </p>
                    <p className="text-blue-600 dark:text-blue-500 mt-2 italic font-bold">
                      Job Description:
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      <tr>
                      <td>-</td>
                        <td>Implementing and integrating computer vision algorithms using YOLOv7 in Python for real-time object detection in images or videos.</td>
                      </tr>
                      <tr>
                      <td>-</td>
                        <td>Utilizing Google Colab for collaborative development and cloud-based model training using PyTorch.</td>
                      </tr>
                      <tr>
                        <td>-</td>
                        <td>Creating a user interface (UI) with PyQT to enable users to interactively evaluate tomato quality.</td>
                      </tr>
                      <tr>
                        <td>-</td>
                        <td>Conducted thorough system testing to ensure accurate and reliable tomato quality detection across diverse environmental conditions.</td>
                      </tr>
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      </motion.li>
    </div>
  );
};

export default Projects;
