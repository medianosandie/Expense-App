import React,{useState} from 'react';
import './components/style/App.css';
import Header from './components/Header';
import InputForm from './components/Input-Form.';
import Tabel from './components/Tabel';

function App() {

  let [data,setData] = useState([]);

  function getData(rawData){
    setData([...data,rawData]);
  }

  function hapusData(index){
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }
  return (
    <div className="App">
      <Header id="header"/>
      <section class="left">
        <InputForm getData={getData}/>
      </section>
      <section class="right">
        <Tabel data={data} hapusData={hapusData}/>
      </section>
    </div>
  );
}

export default App;
