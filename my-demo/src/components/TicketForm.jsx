// // import React, { useState } from 'react';


// //     function TicketForm(){ 
// //         const [form, setForm] = useState({
// //   custId: '',
// //   query: '',
// //   status: '',
// //   assignto: '',
// //   datetime: ''
// // }); 

// // const handleChange=(e) =>{
// //      setForm({ ...form, [e.target.name]: e.target.value });
   
// // }
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(form);
// //     setForm({
// //       custId: '',
// //       query: '',
// //       status: '',
// //       assignto: '',
// //       datetime: ''
// //     });
// //   };
// //     return (
// //         <div>
// //             <h2>Create  Tickt </h2> 
// //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                   <label>Ticket ID:</label>
// //                        <input
// //             type="text" 
// //             name="custId"
// //             placeholder="Enter Ticket ID"
// //             value={form.custId} 
// //             onChange={handleChange}

// //             />
// //                 </div>
// //             </form>  
// //               <form action="">
// //                 <div>
// //                     <label>
// //                         Ticket Query:  
// //                         </label>
// //                         <input type="text"
                 
// //                         name="query"  
// //                         placeholder='Enther the Query'
// //                         value={form.query}
// //                            onChange={handleChange}
// //                            />
 

// //                 </div>
// //             </form> 

// //               <form action="">
// //                 <div>
// //                     <label>
// //                         Ticket Status:  
// //                         </label>
// //                         <input type="text" 
// //                         name="status" 
// //                         placeholder='Enter the Status' 
// //                         value={form.status}
// //                            onChange={handleChange}/>
// //                 </div>
// //             </form> 

// //                <form action="">
// //                 <div>
// //                     <label>
// //                         Assigned To:  
// //                         </label>
// //                         <input type="text" 
// //                         name="assignto" 
// //                         placeholder='Enter the Assigned Person' 
// //                         value={form.assignto}
// //                         onChange={handleChange} />
// //                 </div>
// //             </form>  
// //                <form action="">
// //                 <div>
// //                     <label>
// //                         Date And Time of Ticket Creation:  
// //                         </label>
// //                         <input type="Date"
// //                             name="datetime" 
// //                             placeholder='Enter the Date and Time'
// //                             value={form.datetime}   
// //                           onChange={handleChange} />
// //                 </div> 
// //                 <button  type="submit"> Add</button>
// //             </form> 


// //         </div>
// //     );
// // }
// // export default TicketForm; 



// import React, { useState } from 'react';

// function TicketForm() {  
//       const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ 
//     custId: '',
//     query: '',
//     status: 'Active',
//     assignto: '',
//     datetime: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
 
//    const handleDelete = (index) => {
//     setUsers(users.filter((_, i) => i !== index));
//   }
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(form);
// //     setForm({
      
// //     });
// //     setUsers([...users, form]);
// //   };
 
// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//     setUsers([...users, form]);
//     setForm({
//       custId: '',
//       query: '',
//       status: 'Active',
//       assignto: '',
//       datetime: ''
//     });
//   };
//   return (
//     <div>
//       <h2>Create Ticket</h2> 
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Ticket ID:</label>
//           <input
//             type="text" 
//             name="custId"
//             placeholder="Enter Ticket ID"
//             value={form.custId}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Ticket Query:</label>
//           <input
//             type="text"
//             name="query"
//             placeholder="Enter the Query"
//             value={form.query}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Ticket Status:</label>
//           <input
//             type="text"
//             name="status"
//             placeholder="Enter the Status"
//             value={form.status}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Assigned To:</label>
//           <input
//             type="text"
//             name="assignto"
//             placeholder="Enter the Assigned Person"
//             value={form.assignto}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Date and Time of Ticket Creation:</label>
//           <input
//             type="datetime-local"
//             name="datetime"
//             value={form.datetime}
//             onChange={handleChange}
//             // required
//           />
//         </div>

//         <button type="submit">Add</button>
//       </form> 
//       <table border="1" cellPadding="5" style={{ marginTop: 20 }}>
//         <thead> 
             
//             <tr>
//                  <th>custId</th>
//                  <th>query</th>
//                  <th>status</th> 
//                  <th>assign to </th> 
//                  <th>datetime</th> 
//                  <th>Actions</th>
//             </tr>
        
//         </thead> 
//         <tbody>
//             {users.map((user, index) => (
//                 <tr key={index}>
//                 <td>{user.custId}</td>
//                 <td>{user.query}</td>
//                 <td>{user.status}</td>
//                 <td>{user.assignto}</td>
//                 <td>{user.datetime}</td>
//                 <td>
//                     {/* <button onClick={handleDelete}>Delete</button> */} 
//   <button onClick={() => handleDelete(index)}>Delete</button>

//                 </td>
//                 </tr>
//             ))} 
//         </tbody>
//       </table>
//     </div> 
//   );
// }

// export default TicketForm;
  


