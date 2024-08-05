import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className } = props;

  return (
    <button
      className={ "bg-gradient-to-b from-dark-green to-green text-white py-2 px-8 rounded"
      + " shadow-lg hover:shadow-light-green/60 hover:-translate-y-1"
      + " transition-all"
      + `${ className ? ` ${ className }` : "" }` }>
      { children }
    </button>
  );
};

export default Button;
