import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Forms/Form';
import SavedList from "./Components/SavedList/SavedList";
import Data from './Data';

function App() {
  // const [teamMember, setTeamMember] = useState({
  //   name: '',
  //   email: '',
  //   role: ''
  //   // dataSet: []
  // })
  const [list, setList] = useState(Data)

  useEffect(() => {
    setList(Data)
  }, [])

  return (
    <div className="App">
      <SavedList list={list} />
    </div>
  );
}

export default App;
