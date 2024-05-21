"use client";

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { fetchDetails } from './utils/api';
import NameForm from './components/NameForm';
import { CircleLoader } from 'react-spinners';

const Home = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (name) => {
    setLoading(true);
    try {
      const details = await fetchDetails(name);
      setResult(details);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#94b5b2]">
      <h1 className="text-4xl font-bold mb-8 text-customTeal">Guess Age, Gender, and Nationality</h1>
      <NameForm onSubmit={handleSubmit} />
      {loading && <CircleLoader color="#ff0000" />}
      <Transition
        show={!!result}
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {result && (
          <div className="mt-8 p-6 bg-[#94a5b5] rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-triadic1">Results</h2>
            <p className="text-lg text-triadic2">Age: {result.age}</p>
            <p className="text-lg text-complementary">Gender: {result.gender}</p>
            <p className="text-lg text-analogous1">Nationality: {result.nationality.map(country => (
              <span key={country.country_id} className="mr-2">{country.country_id}</span>
            ))}</p>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Home;
