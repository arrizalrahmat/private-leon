import './button.css';

const Button = (props) => {
  const {
    text,
    onClick,
    counter,
    customContainer,
    isEven,
  } = props;

  return (
    <button
      className="container"
      onClick={onClick}
      style={customContainer ?? {}}
    >
      {text} {counter} kali {isEven ? 'genap' : 'ganjil'}
    </button>
  );
};

export default Button;
