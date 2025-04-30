import { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Uncontrolled;
