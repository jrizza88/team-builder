import React, {useState} from 'react';

const Form = () => {
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
      })

      const handleChange = e => {
          setTeamMember({ ...teamMember, [e.target.name]: e.target.value })
      }

      const handleSubmit = e => {
          e.preventDefault()
          console.log('submission made', teamMember)
      }
      
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        value={teamMember.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        value={teamMember.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="role"
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