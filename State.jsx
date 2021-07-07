import React from 'react';
import './State.css';

const State = () => {
   const [name, setName] = useState(0);

    return (
        <div className='State'>
            <button className="button" onClick={()=>setName(name + 1)}>Parvez</button>
            <h2>{name}</h2>
            <button className="button" onClick={()=>setName(name - 2)}>Priya</button>
            
        </div>
    )
}

export default State;