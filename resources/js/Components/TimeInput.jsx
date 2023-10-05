import React, { forwardRef, useEffect, useRef, useState } from 'react';

export default forwardRef(function TimeInput({ className = '', isFocused = false, onChange, ...props }, ref) {
  const input = ref ? ref : useRef();
  const [timeValue, setTimeValue] = useState('');

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  const validateTime = (time) => {
    const timePattern = /^(?:[01]\d|2[0-3]).(?:[0-5]\d)\sWIB$/;
    return timePattern.test(time);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedTime = inputValue.trim().toUpperCase();

    if (validateTime(formattedTime)) {
      const [hours, minutes] = formattedTime.split('.')[0].split(':');
      const hoursNum = parseInt(hours, 10);
      const minutesNum = parseInt(minutes, 10);

      if (hoursNum < 24 && minutesNum < 60) {
        setTimeValue(formattedTime);
        if (onChange) {
          onChange(formattedTime);
        }
      } else {
        setTimeValue('');
      }
    } else {
      setTimeValue('');
    }
  };

  return (
    <input
      {...props}
      type="text"
      className={
        'border-gray-300 focus:border-[#3c1010] focus:ring-[#3c1010] rounded-md shadow-sm ' +
        className
      }
      ref={input}
      value={timeValue}
      onChange={handleChange}
    />
  );
});