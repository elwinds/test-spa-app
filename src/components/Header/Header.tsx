import { useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import classes from "./Header.module.scss";

const HEADER_TEXT = {
  mainPage: {
    buttonText: "Go to All Items",
    title: "Favorite Items",
  },
  listPage: {
    buttonText: "Go to Favorite Items",
    title: "All Items",
  },
};

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = () => {
    if (location.pathname === "/") {
      navigate("/list");
    } else {
      navigate("/");
    }
  };

  const title =
    location.pathname === "/"
      ? HEADER_TEXT.mainPage.title
      : HEADER_TEXT.listPage.title;

  const buttonText =
    location.pathname === "/"
      ? HEADER_TEXT.mainPage.buttonText
      : HEADER_TEXT.listPage.buttonText;

  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      <Button buttonText={buttonText} onClickHandler={goToPage} />
    </div>
  );
};

export default Header;
