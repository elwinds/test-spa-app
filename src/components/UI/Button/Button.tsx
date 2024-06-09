import classes from './Button.module.scss';

type Props = {
  buttonText: string;
  onClickHandler(): void;
};

const Button: React.FC<Props> = ({ onClickHandler, buttonText }) => {
  return <button onClick={onClickHandler} className={classes.button}>{buttonText}</button>;
};
 
export default Button;