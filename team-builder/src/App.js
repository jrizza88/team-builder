import React, {useState} from 'react';
import './App.css';
import Form from './Components/Forms/Form';
//import SavedList from "./Components/SavedList/SavedList";
import Data from './Data';

function App() {
  const [teamList, setList] = useState(Data)
  const [memberToEdit, setMemberToEdit] = useState(Data)

  const addToList = newTeamMember => {
    setList([...teamList, newTeamMember])
  }

  const editMember = editTeamMember => {
    teamList.map( (member, index) => (
       member.id === editTeamMember.id ? console.log('what\'s happening') : console.log(member.id)
    ))
    // teamList.find(m => (m.id===editTeamMember.id)).name = editTeamMember.name;
    // teamList.find(m => (m.id===editTeamMember.id)).email = editTeamMember.email;
    // teamList.find(m => (m.id===editTeamMember.id)).role = editTeamMember.role;
    console.log('editMember function', editTeamMember)
    setMemberToEdit([...teamList, editTeamMember])
    // setMemberToEdit([])
  }


  return (
    <div className="App">
      <Form setListProps={addToList} list={teamList}  memberToEdit={memberToEdit} editMember={editMember}/> 
    </div>
  );
}

export default App;
