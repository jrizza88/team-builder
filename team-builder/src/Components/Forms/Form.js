import React, {useState, useEffect} from 'react';
// import Data from '../../Data';
const Form = ({setListProps, memberToEdit, editMember, list}) => {

    const [teamMember, setTeamMember] = useState({
        id: '',
        name: '',
        email: '',
        role: ''
      })

      const handleChange = e =>{
        setTeamMember({ ...teamMember, [e.target.name]:e.target.value });
      }

      const handleSubmit = e => {
          e.preventDefault()
          if (memberToEdit.name){
              console.log('member to edit: ', memberToEdit.id)
              teamMember.id = memberToEdit.id
              editMember(teamMember)
              console.log('the list', list)
              setTeamMember({ 
                id: '',
                name: '',
                email: '',
                role: ''
                })
          } else {
                if (teamMember.name !== '') {
                setListProps(teamMember)
                console.log('submission made', teamMember)
                console.log('the list', list)
                    setTeamMember({ 
                    id: '',
                    name: '',
                    email: '',
                    role: ''
                    })
                } else {
                    console.log('Please enter credentials!')
                }
          }
      }

      useEffect(() => {
        setTeamMember(memberToEdit)
      }, [memberToEdit])

      
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
            {list.map( (member, index) => (
                        <div className="individualPerson" key={index}>
                            <li>{member.name}</li>
                            <li>{member.email}</li>
                            <li>{member.role}</li>
                            <button onClick={()=> editMember(member)}>edit</button>
                        </div>
                    )) }
                </div>
        </div>
    )
}

export default Form;