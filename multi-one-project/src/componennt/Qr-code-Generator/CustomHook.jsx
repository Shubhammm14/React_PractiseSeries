import React, { useEffect, useState } from 'react';

function CustomHook(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch (error) {
      console.error(`Error parsing stored value for key "${key}":`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default CustomHook;
