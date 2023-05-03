import { useState } from 'react';

interface MultiSelectInputProps {
  options: string[];
  onSelectionChange: (selection: string[]) => void;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  options,
  onSelectionChange,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selectedOption) => selectedOption !== option);
      }
      return [...prevSelectedOptions, option];
    });
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {filteredOptions.map((option) => (
          <li key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div>
        <span>Selected options: </span>
        {selectedOptions.map((option) => (
          <span key={option}>{option}, </span>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectInput;