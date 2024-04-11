import {  useRef, useState } from "react";
import PropTypes from "prop-types";

const TagInput = ({ tags, onTagsChange }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onTagsChange([...tags, input]);
      setInput("");
    }
    if(event.key === "Backspace" && input === "") handleRemoveTag(tags.length-1);

  };

  const handleRemoveTag = (index) => {
    onTagsChange(tags.filter((tag, i) => i !== index));
  };

  return (
    <div 
    className='w-full h-20 mt-1 rounded border flex items-start p-1 focus-within:border-blue-600'
    ref={containerRef} 
    onClick={handleFocus}>
      {tags.map((tag, index) => (
        <span key={index} className='flex rounded mx-0.5 bg-gray-100 px-1'>
          {tag}
          <button 
          className="ms-1.5 me-1 hover:text-red-600 hover:scale-105" 
          onClick={() => handleRemoveTag(index)}
          >x</button>
        </span>
      ))}

      <input
        ref={inputRef}
        className='focus:outline-none'
        type="text"
        placeholder="enter..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

    </div>
  );
};

TagInput.propTypes = {
  tags: PropTypes.array.isRequired,
  onTagsChange: PropTypes.func.isRequired,
};

export default TagInput;