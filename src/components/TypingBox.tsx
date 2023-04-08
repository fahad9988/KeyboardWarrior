import React, { useState, useEffect } from 'react';

type TypingBoxProps = {
  randomString: string;
  onTypingComplete: (time: number) => void;
};

const TypingBox: React.FC<TypingBoxProps> = ({ randomString, onTypingComplete }) => {
  const [typedString, setTypedString] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    setIsTimerRunning(false);
    setTypedString('');
  }, [randomString]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      setStartTime(Date.now());
    }

    setTypedString(event.target.value);

    if (event.target.value === randomString) {
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);

      setIsTimerRunning(false);
      setTypedString('');
      onTypingComplete(timeTaken);
    }
  };

  return (
    <div className="text-4xl font-bold my-4">
      <input
        type="text"
        value={typedString}
        onChange={handleInputChange}
        placeholder="Start typing here..."
        className="border-b-4 border-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default TypingBox;
