import { Box, Button } from "@mui/material";
import "./Header.css";

type PropTypes = {
  setPage: (page: string) => any;
};

const Header = ({ setPage }: PropTypes) => {
  const handleNavigation = (page: string) => {
    setPage(page);
  };

  return (
    <Box className="header">
      Maria Paterno
      <Button
        sx={{ color: "white" }}
        className="nav-button"
        onClick={() => handleNavigation("about")}
      >
        About Me
      </Button>
      <Button
        sx={{ color: "white" }}
        className="nav-button"
        onClick={() => handleNavigation("projects")}
      >
        Projects
      </Button>
      <Button
        sx={{ color: "whitesmoke" }}
        className="nav-button"
        onClick={() => handleNavigation("contact")}
      >
        Contact Me
      </Button>
    </Box>
  );
};

export default Header;
