


import axios from 'axios';

// const API_BASE = 'https://reqres.in/api/users';

// export const followUpTicket = async ({ name, email, image }) => {
 
//     const response = await axios.post(`${API_BASE}`, {
//       name,
//       email,
//       image,
//     });
//     return response.data;
//   }

// export const EmployeeDataa = async () => {
//   try {
//     const response = await axios.get(`${API_BASE}`);
//     // reqres.in returns data in response.data.data
//     return response.data.data;
//   } catch (error) {
//     console.error('Error fetching employee data:', error);
//     return [];
//   }
// };


const API_BASE = 'http://192.168.69.194:8085/api';
console.log(`API Base URL: ${API_BASE}`);
export const addEmployee = (data) =>
  axios.post(`${API_BASE}/user/add`, data);

export const getAllEmployees = async () => {
  const response = await axios.get(`${API_BASE}/user/all`);
  return response.data;
};

