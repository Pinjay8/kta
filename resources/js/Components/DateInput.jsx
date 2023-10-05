import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default forwardRef(function DateInput(
  {
    className = '',
    isFocused = false,
    selectedDate,
    onDateChange,
    ...props
  },
  ref
) {
  return (
    <div className="flex flex-col items-start">
      <DatePicker
        {...props}
        selected={selectedDate}
        onChange={onDateChange}
        className={
          'border-gray-300 focus:border-blue-900 focus:ring-blue-900 rounded-md shadow-sm ' +
          className
        }
        ref={ref}
        autoFocus={isFocused}
        dateFormat="dd/MM/yyyy"
        showYearDropdown // add this line to show the year dropdown
        scrollableYearDropdown // add this line to allow the user to scroll through the years
        yearDropdownItemNumber={60}

      />
    </div>
  );
});
