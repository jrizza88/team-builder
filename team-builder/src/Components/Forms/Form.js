import React, {useState, useEffect} from 'react';
import Data from '../../Data';
const Form = ({setListProps, list}) => {

    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
      })
    // const [list, setList] = useState(Data)
 


      const handleChange = e => {
          setTeamMember({ ...teamMember, [e.target.name]: e.target.value })
          
      }

      const handleSubmit = e => {
          e.preventDefault()
          setListProps(teamMember)
       
          console.log('submission made', teamMember)
          console.log('the list', list)
            setTeamMember({ 
            name: '',
            email: '',
            role: ''
            })
            
      }

      
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={teamMember.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        value={teamMember.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="role"
                        placeholder="role"
                        value={teamMember.role}
                        onChange={handleChange}
                    />
                   
                </label>
                <button>Submit</button>
            </form>
            <div className="savedPersonDiv">
                <h1> Saved List </h1>
            {list.map((l, index) => (
                        <div className="individualPerson" key={index}>
                            <li>{l.name}</li>
                            <li>{l.email}</li>
                            <li>{l.role}</li>
                            <button>edit</button>
                        </div>
                    )) }
                </div>
        </div>
    )
}

export default Form;