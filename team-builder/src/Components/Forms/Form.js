import React, {useState} from 'react';

const Form = props => {
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
      })

    // const {submitMember, history} = props;

      const handleChange = e => {
          setTeamMember({ ...teamMember, [e.target.name]: e.target.value })
      }

      const handleSubmit = e => {
          e.preventDefault()
          props.submitMember(teamMember)
        //   history.push('/')
          console.log('submission made', teamMember)
            setTeamMember({ name: '',
            email: '',
            role: ''
            })
      }

    //   const addTeamMember = () => {
    //       const addTeamMember = addt
    //       addTeamMember(teamMember)
    //   }
      
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
        </div>
    )
}

export default Form;