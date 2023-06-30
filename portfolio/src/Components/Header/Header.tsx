import { Grid, Button } from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <Grid container className="header">
      Maria Paterno
      <Button className="button">Home</Button>
      <Button className="button">Projects</Button>
      <Button className="button">Contact Me</Button>
    </Grid>
  );
};

export default Header;
