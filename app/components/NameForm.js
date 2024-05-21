"use client";

import { useState } from 'react';

const NameForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
        required
        className="border border-gray-300 rounded px-4 py-2 text-black"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Guess</button>
    </form>
  );
};

export default NameForm;
