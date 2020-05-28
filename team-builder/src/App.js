import React, {useState} from 'react';
import './App.css';
import Form from './Components/Forms/Form';
import SavedList from "./Components/SavedList/SavedList";
import Data from './Data';

function App() {
  const [list, setList] = useState(Data)


  const AddToList = newTeamMember => {
    setList([...list, newTeamMember])
  }

  return (
    <div className="App">
      <Form submitMember={AddToList}/> 
      <SavedList list={list} />
    </div>
  );
}

export default App;
