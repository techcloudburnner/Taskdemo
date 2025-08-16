



import { useEffect, useState } from 'react';
import './App.css';
import DetailForm from './components/Detailform';
import { addEmployee, getAllEmployees } from './service/AuthService';


function App() {
  const [data, setData] = useState([]);
x``
  // Fetch all employees on mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const all = await getAllEmployees();
        setData(all);
      } catch (err) {
        setData([]);
      }
    };
    fetchEmployees();
  }, []);

  // Add new employee from DetailForm
  const handleAddEmployee = async (formData) => {
    try {
      const response = await addEmployee(formData);
      const result = response.data;
      setData((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          name: result.name,
          phone: result.phone || '',
          email: result.email,
          age: result.age || '',
          image: result.image || null,
          apiId: result.id || '',
        },
      ]);
    } catch (err) {
      alert('API error: Could not add user');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary mb-4  align-items: center ">Employee Data</h1>
      <DetailForm onSubmit={handleAddEmployee} />
      <table className="table table-bordered table-striped" style={{ marginTop: 32 }}>
        <thead className="table-dark">
          <tr>
            <th>Sr. No</th>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            {/* <th>Age</th> */}
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              {/* <td>{item.id}</td> */}
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              {/* <td>{item.age}</td> */}
              <td>
                {item.image ? (
                  <img
                    src={typeof item.image === 'string' ? item.image : URL.createObjectURL(item.image)}
                    alt="Profile"
                    style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover' }}
                  />
                ) : (
                  <span style={{ color: '#aaa' }}>No Image</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

