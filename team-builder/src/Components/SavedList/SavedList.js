import React, { useState, useEffect } from 'react';
import "./SavedList.scss";

const SavedList = props => {
    // console.log('savedlist props: ', props)
    const {list} = props;
    const [member, setMember] = useState({name: "", email: "", role: ""})

    // //     useEffect(() => {
    // //     setMember({
    // //         name: '',
    // //         email: '',
    // //         role: ''
    // //     })
    // //   }, [])

    useEffect(() => {
        console.log('props.members in useEffect', props.members)
        setMember(props.members)
    }, [props.members])

    const editMember = e => {
        e.preventDefault()
        props.members.map(m => {
            if (m.id.toString() === props.match.params.id) {
                console.log('member in savedlist, ', member)
                return member
            } else {
                console.log('else m', m)
                return m
            }
        })
      }

      const handleSubmit = e => {
        e.preventDefault()
        props.editMember(member)
        console.log('submission made',member)
         editMember({ name: '',
          email: '',
          role: ''
          })
    }

    return (
        <div className="savedPersonDiv">
           <h1> Saved List </h1>

            {list.map((l, index) => (
                <div className="individualPerson" key={index}>
                    <li>{l.name}</li>
                    <li>{l.email}</li>
                    <li>{l.role}</li>
                    <button onClick={handleSubmit}>edit</button>
                </div>
            )) }
                  
        </div>
    )
    }

export default SavedList;

