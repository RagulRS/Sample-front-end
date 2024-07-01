import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

import StudentList from './StudentsList';

function App() {
  const [stu, setStudents] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const loadData = async () => {
    const response = await axios.get(backendUrl);
    setStudents(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);
  console.log(stu);
  return (
    <>
       <StudentList CallStudents={stu}/> 
    </>
  )
}

export default App
