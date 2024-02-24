import React, {useState} from 'react'
import './Dropdown.css'

const Dropdown = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const handleSelect = (e)=>{
        setSelectedOption(e.target.value)
    };  

  return (
    <div className='dropdown-container'>
       <select className='dropdown' value={selectedOption} onChange={handleSelect}>
         <option value="">Select your State</option>
         <option value="option 1">Uttar Pradesh</option>
         <option value="option 2">Chhatisgarh</option>
         <option value="option 3">Delhi</option>
         <option value="option 4">Jharkhannd</option>
         <option value="option 5">Keral</option>
       </select>
       {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};
export default Dropdown