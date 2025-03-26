import React from "react";
import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";
const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={noProjectImg}
        alt="no project image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p>
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
