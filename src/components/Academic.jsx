import { ACADEMICS } from "../constants";
import { motion } from "framer-motion";

const Academic = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Relevância Académica e Habilidades Adquiridas
      </motion.h1>
      <div>
        {ACADEMICS.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-[50rem]"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {experience.context}
              </p>
              <h6 className="mb-2 font-semibold">{experience.projet}</h6>
              <p className="text-sm mb-2 text-neutral-400">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academic;
