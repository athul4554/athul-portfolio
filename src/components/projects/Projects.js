import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  chatApp,
  projectFour,
  estateApp,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects (MERN)"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="MERN CHAT APP - (Personal Project)"
          des=" Fully fledged chat app with real-time message delivery, notification feature, authentication and authorization feature. Used Socket.io, react-libraries, JWT, NodeJS, MongoDB"
          src={chatApp}
          showCode={true}
          gitLink="https://github.com/athul4554/chat-app"
          webLink="https://talk-a-tive-1-1.onrender.com/"
        />
        <ProjectsCard
          title="MERN ESTATE APP - (Personal Project)"
          des="Sell and Buy Properties with ease, Google Authentication ,Media upload and more.. "
          src={estateApp}
          showCode={true}
          gitLink="https://github.com/athul4554/fortune-estate"
          webLink="https://fortune-estate-l0p0.onrender.com/"
        />
        <ProjectsCard
          title="YuviPep - (Company Project)"
          des=" YuviPep is the leading provider of next-generation Technical and Practical education. Help your child to Build, Learn and Earn. An ocean of opportunities with exceptional creators and innovators is just a click away."
          src={projectTwo}
          showCode={false}
          webLink="https://yuvipep.com/"
        />
        <ProjectsCard
          title="Regal - (Company Project)"
          des="Regal for Containers and Cloud (RCC) is a robust Test Automation Orchestration Tool Kit. It offers a whole new approach to testing by streamlining and optimising the process. DevOps/Microservice models today are more mature to take on the continuous activities of software testing. Test Automation Orchestration is key to improving quality, reducing cost, improving time-to-market, and getting better visibility through analytics using AI/ML."
          src={projectThree}
          showCode={false}
          webLink="https://telavergecommunications.com/products/regal/"
        />
        <ProjectsCard
          title="YuviPep Store - (Company Project)"
          des=" A dedicated online marketplace designed for students, offering a curated selection of products essential for experiments and projects. Providing a seamless shopping experience, the platform ensures easy access to specialized tools and materials to enhance academic and hands-on learning. Empowering students to conveniently acquire resources vital for their educational pursuits. "
          src={projectFour}
          showCode={false}
          webLink="https://yuvipepstore.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
