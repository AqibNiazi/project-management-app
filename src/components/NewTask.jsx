import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };
  const handleClick = () => {
    if (enteredTask.trim().length === 0) {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-900 bg-slate-300 hover:bg-slate-400 px-2 py-1 rounded-md"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
