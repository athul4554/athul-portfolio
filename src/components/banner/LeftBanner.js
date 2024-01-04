import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Backend Developer", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME ,</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Athul Babu</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <div className="text-base font-bodyFont leading-6 tracking-wide">
          <div style={{ marginBottom: "0.5rem" }}>
            <strong>👋 Hello, World!</strong>
          </div>

          <p>
            <i>
              Welcome to my digital space where pixels meet functionality, and
              code weaves seamless user experiences. I am Athul, a dedicated
              developer with a passion for both frontend and full-stack
              development.
            </i>
          </p>

          <div style={{ marginBottom: "0.5rem", marginTop: "0.5rem" }}>
            <strong>
              🚀 What Sets Me Apart: Bridging Design and Functionality
            </strong>
          </div>

          <p>
            <i>
              In the ever-evolving landscape of web development, I specialize in
              creating visually stunning and intuitively interactive websites.
              My journey in the world of coding began with a fascination for
              crafting elegant user interfaces that not only look good but also
              enhance the overall user experience.
            </i>
          </p>
          {/* <br />
          <strong>
            🎨 Frontend Alchemy: Transforming Designs into Reality
          </strong>
          <br />
          <p>
            On the frontend, I bring designs to life with a meticulous eye for
            detail and a commitment to delivering pixel-perfect, responsive
            interfaces. From concept to execution, I thrive on turning creative
            visions into engaging web experiences. Proficient in HTML, CSS, and
            JavaScript, I am adept at leveraging the latest technologies and
            frameworks to build captivating user interfaces.{" "}
          </p>
          <br />
          <strong>💡 Full-Stack Wizardry: Building End-to-End Solutions</strong>
          <br />
          <p>
            As a full-stack developer, I don't just stop at the surface. My
            expertise extends to the backend, where I architect robust and
            scalable solutions. From server-side scripting to database
            management, I enjoy the challenge of building end-to-end
            applications that seamlessly integrate frontend aesthetics with
            backend functionality.
          </p>
          <br />
          <strong>
            🌐 Passion Meets Profession: Turning Ideas into Reality{" "}
          </strong>
          <br />
          <p>
            Beyond the lines of code, I am fueled by a passion for
            problem-solving and turning ideas into tangible, user-centric
            solutions. Whether it's a sleek, modern frontend or a robust
            full-stack application, I am committed to delivering excellence and
            pushing the boundaries of what's possible in the digital realm.
          </p>
          <br /> */}
        </div>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
