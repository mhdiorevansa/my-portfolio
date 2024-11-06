const Button = ({ text, bgButton }) => {
	return <button className={`p-2 ${bgButton} text-white rounded-md`}>{text}</button>;
};

export default Button;
