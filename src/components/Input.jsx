import React from "react";

const Input = ({ label, textarea, ...props }) => {
  return (
    <p>
      <label htmlFor="">Title</label>
      {textarea ? <textarea {...props} /> : <input type="text" {...props} />}
    </p>
  );
};

export default Input;
