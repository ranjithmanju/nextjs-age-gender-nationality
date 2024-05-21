import axios from 'axios';

export const fetchAge = (name) => axios.get(`https://api.agify.io?name=${name}`);
export const fetchGender = (name) => axios.get(`https://api.genderize.io?name=${name}`);
export const fetchNationality = (name) => axios.get(`https://api.nationalize.io?name=${name}`);

export const fetchDetails = async (name) => {
  const [ageResponse, genderResponse, nationalityResponse] = await Promise.all([
    fetchAge(name),
    fetchGender(name),
    fetchNationality(name)
  ]);

  return {
    age: ageResponse.data.age,
    gender: genderResponse.data.gender,
    nationality: nationalityResponse.data.country
  };
};
