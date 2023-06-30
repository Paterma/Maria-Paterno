import { Box, Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Box className="home-page">
      <Box className="intro">
        <Typography>Hi there, and welcome to my site.</Typography>
        <Typography>
          <Typewriter
            words={[
              "My name is Maria Paterno. I work in the Space industry as a front-end developer, and have a deep appreciation for UX/UI. When I'm not coding, I'm likely enjoying the mountains of Colorado, listening to elevating music, or spending time with family and friends.",
            ]}
            cursor
            cursorStyle="|"
            typeSpeed={70}
          />
        </Typography>

        <Box className="quote-box">
          "If you're invested in security and certainty, you are on the wrong
          planet." -Pema Chodron
        </Box>
      </Box>

      <Typography>
        Professional <span className="emphasize-words"> Skillset </span> and
        <span className="emphasize-words"> Tools </span> I Use:
      </Typography>

      <Box className="technology-icons">
        <FaReact size={45} />
        <SiThreedotjs size={45} />
        <SiRedux size={45} />
        <SiTypescript size={45} />
        <SiJavascript size={45} />
        <TiHtml5 size={45} />
        <IoLogoCss3 size={45} />
        <SiCypress size={45} />
        <SiMysql size={45} />
        <SiMongodb size={45} />
        <SiBootstrap size={45} />
        <SiJquery size={45} />
        <SiVisualstudio size={45} />
        <FaNode size={45} />
        <SiHeroku size={45} />
      </Box>
    </Box>
  );
};

export default HomePage;
