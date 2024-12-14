const Button = ({ color, title, titlecolor }) => {
  return (
    <button className={`${color} text-white py-2 px-4 rounded`}>
      <span className={titlecolor ? titlecolor : ''}>
        {title}
      </span>
    </button>
  );
};

export default Button;