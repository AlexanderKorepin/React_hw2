// Задание 2 (тайминг 20 минут)
// 1. Создать компонент TextInput, который содержит текстовое
// поле ввода и отображает введённый текст под ним в реальном
// времени.

import React, { useState } from 'react';

function TextInput() {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="textInput">
      <input type="text" value={inputText} onChange={handleChange} />
      <p>{inputText}</p>
    </div>
  );
}

export default TextInput;