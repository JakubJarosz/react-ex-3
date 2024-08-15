import React, {useState} from "react";

const users = [
   { firstName: "John", id: 1 },
   { firstName: "Emily", id: 2 },
   { firstName: "Michael", id: 3 },
   { firstName: "Sarah", id: 4 },
   { firstName: "David", id: 5 },
   { firstName: "Jessica", id: 6 },
   { firstName: "Daniel", id: 7 },
   { firstName: "Olivia", id: 8 },
   { firstName: "Matthew", id: 9 },
   { firstName: "Sophia", id: 10 }
 ]

 function ListofPeople() {
   const [searchItem, setsearchItem] = useState('');
   

   const handleInputChange = (e) => {
      setsearchItem(e.target.value);
   }

return (
   <div>
      <h1>Siema</h1>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      <div>
         <ul>
            {users.map((user) => <li key= {user.id}>{user.firstName}</li>)}
         </ul>
      </div>
   </div>
)
   
 }

 export default ListofPeople