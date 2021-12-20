
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/form';
import List from './Components/list';
import axios from 'axios';

function App() {
  const url = 'http://localhost:3331/employee';
  const [data, setData] = useState([])
  const [DataById, setDataById] = useState({
    id: '',
    name: '',
    role: '',
    gender: 'M'
  })

  const getData = () => {
    axios.get(url).then((response) => {
      setData(response.data.sort((a , b) => {
        return a.id - b.id;
      }))
    }, err => {
      console.log(err);
    })
  }


  useEffect(() => {
    getData()
  }, []);

  const getById = (id) => {
    axios.get(`${url}/${id}`).then((response) => {
      setDataById(response.data)
    }, err => {
      console.log(err);
    })
  }

  const Add = (formData) => {
    axios.post(url, formData)
    getData();
    window.location.reload();
  }


  const getDataById = (id) => {
    getById(id);
  }


  const Update = (id, formData) => {
    axios.put(`${url}/${id}`, formData);
    getData();
    window.location.reload();
  }


  const Delete = (id) => {
    axios.delete(`${url}/${id}`);
    getData();
    window.location.reload();
  }

  return (

    <div className="App">
      <h2 style={{ textAlign: "center" }}>CRUD operation</h2>
      <Form data={data} addForm={Add} formDataById={DataById} setDataById={setDataById} updateForm={Update} />
      <br />
      <List data={data} onDelete={Delete} getId={getDataById} />
    </div>
  );
}

export default App;
