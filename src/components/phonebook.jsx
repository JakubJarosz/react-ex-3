import React, {useState, useEffect} from "react";


 function ListofPeople() {
   const [filteredInput, setfilteredInput] = useState([]);
   const [apiUsers, setApiUsers] = useState('');


   useEffect(() => {
      fetch('https://dummyjson.com/users')
        .then(response => response.json())
      
        .then(data => {
         setApiUsers(data.users);
         setfilteredInput(data.users)
        }
      ) 
        .catch(err => console.log(err))
    }, [])

   const handleInputChange = (e) => {
     const filtereditems = apiUsers.filter((user) => user.firstName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
     setfilteredInput(filtereditems);
   }

return (
   <div>
      <h1>Siema</h1>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      <div>

         {filteredInput.length === 0
         ? <p>No items</p>
         :  <ul>
         {filteredInput.map((user) => <li key= {user.id}>{user.firstName}</li>)}
      </ul>
         }
        
      </div>
   </div>
)
   
 }

 export default ListofPeople