import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer"
            subTitle="Telaverge Communications (2021 - Present)"
            result="Banglore"
            des="3 years of experience in Frontend (ReactJS, Javascript, Tailwind, HTML5, CSS3, Redux, NextJS)"
          />
          <ResumeCard
            title="Backend Developer"
            subTitle="Telaverge Communications (2021 - Present)"
            result="Banglore"
            des="3 years of experience in Backend Development (NodeJS,MongoDB,ExpressJS)"
          />
          <ResumeCard
            title="Team Lead"
            subTitle="Telaverge Communications(2023 - 2024)"
            result="Banglore"
            des="Mentored Interns and Lead a team to build Yuvipep student management application from scratch"
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

export default Experience;
