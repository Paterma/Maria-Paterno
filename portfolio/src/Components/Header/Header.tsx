import { Grid, Button } from "@mui/material";
import "./Header.css";

type PropTypes = {
  setPage: (page: string) => any;
};

const Header = ({ setPage }: PropTypes) => {
  const handleNavigation = (page: string) => {
    setPage(page);
  };

  return (
    <Grid container className="header">
      Maria Paterno
      <Button className="button" onClick={() => handleNavigation("about")}>
        About Me
      </Button>
      <Button className="button" onClick={() => handleNavigation("projects")}>
        Projects
      </Button>
      <Button className="button" onClick={() => handleNavigation("contact")}>
        Contact Me
      </Button>
    </Grid>
  );
};

export default Header;
