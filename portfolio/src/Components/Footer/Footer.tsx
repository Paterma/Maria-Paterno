import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { Tooltip } from "@mui/material";

import "./Footer.css";

const Footer = () => {
  return (
    <footer slot="footer">
      <ul>
        <li>
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/maria-paterno-b4a0271b5/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href="mailto:mariapaterno7@gmail.com">
            <AiOutlineMail size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Paterma" target="_blank" rel="noreferrer">
            <BsGithub size={30} />
          </a>
        </li>
        <Tooltip title="Download My Resume">
          <li>
            <a
              className="nav-link"
              href="https://docs.google.com/document/d/1lrr9xi5yAKFavVbg0Czarp1l27SDLGmPn29Z3JxPxpg/export?format=pdf"
              download="Paterno-Resume"
              target="_blank"
              rel="noreferrer"
            >
              <FiDownload size={30} />
            </a>
          </li>
        </Tooltip>
      </ul>
    </footer>
  );
};

export default Footer;
