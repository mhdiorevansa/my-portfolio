const Button = ({ text, styleButton }) => {
	return <button className={`p-2 ${styleButton} text-white rounded-md`}>{text}</button>;
};

export default Button;
