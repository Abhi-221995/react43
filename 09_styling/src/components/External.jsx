import "./external.css";

const External = ({ primary }) => {
  let className = primary ? "primary" : "";

  return <h2 className={`${className} font-xl`}>External Stylesheet</h2>;
};

export default External;
