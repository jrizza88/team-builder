import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Forms/Form';
import SavedList from "./Components/SavedList/SavedList";
import Data from './Data';

function App() {
  const [teamList, setList] = useState(Data)

  const addToList = newTeamMember => {
    const newMember = {
      name: newTeamMember.name,
      email: newTeamMember.email,
      role: newTeamMember.role
    }
    setList([...teamList, newMember])
  }

  const memberToEdit = editTeamMember => {
   
      setList([...teamList, editTeamMember])
    
  }

  // useEffect(() => {

  //       setList({
  //           name: '',
  //           email: '',
  //           role: ''
  //       })
  //     }, [teamList])

  return (
    <div className="App">
      <Form setListProps={addToList} list={teamList} /> 
    </div>
  );
}

export default App;
