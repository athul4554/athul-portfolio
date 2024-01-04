import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Information Technology"
            subTitle="College of Engineering Perumon (2017 - 2021)"
            result="8.3 cgpa"
            des="Acquired a comprehensive understanding of networking principles, including protocols and security measures. Gained proficiency in programming languages such as Java and Python for application development. "
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="St Stephens HSS"
            result="87%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="St Stephens HS"
            result="97%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Research & Development"
            subTitle="Telaverge Communications (2021 - Present)"
            result="Banglore"
            des="3years of experience in Frontend and Backend Development"
          />
          <ResumeCard
            title="Freelancing - Web Developer "
            subTitle="Xon - (2019 - 2021)"
            result="Kollam"
            des="2 years of experience as freelance Web Developer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
