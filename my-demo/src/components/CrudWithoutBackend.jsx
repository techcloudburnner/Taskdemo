// import React, { useState } from "react";

// export default function CrudWithoutBackend() {
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ name: "", email: "" });
//   const [editIndex, setEditIndex] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editIndex !== null) {
//       const updatedUsers = [...users];
//       updatedUsers[editIndex] = form;
//       setUsers(updatedUsers);
//       setEditIndex(null);
//     } else {
//       setUsers([...users, form]);
//     }
//     setForm({ name: "", email: "" });
//   };

//   const handleEdit = (index) => {
//     setForm(users[index]);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     setUsers(users.filter((_, i) => i !== index));
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>CRUD Without Backend</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
//       </form>

//       <table border="1" cellPadding="5" style={{ marginTop: 20 }}>
//         <thead>
//           <tr>
//             <th>Name</th><th>Email</th><th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u, i) => (
//             <tr key={i}>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
//               <td>
//                 <button onClick={() => handleEdit(i)}>Edit</button>
//                 <button onClick={() => handleDelete(i)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
