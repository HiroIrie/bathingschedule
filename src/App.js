import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Tabs from './components/tabs/Tabs';
import Forms from './components/forms/Forms';
import BathigList from './components/list/BathingUsersList';


function App() {
  const [error, setError] = useState(null);
    const [usersData, setUsersData] = useState([]);
    const data={usersData,setUsersData};
    useEffect(() => {
        
            axios.get('/api/users').then(users => {
                setUsersData(users.data);
            }).catch(error=>{
                setError(error);
            })
    }
        , []);

    if (error) {
        return (
            <div className="error">エラーが発生しました{error.message}</div>
        )
    }
  return (
    <div className="App">
    {/* <Tabs data={data}/> */}
    {/* <Forms/> */}
    <BathigList data={data}/>
    </div>
  );
}

export default App;
