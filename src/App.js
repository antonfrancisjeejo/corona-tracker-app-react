import React, { useState,useEffect } from "react";
import { Cards,Chart,CountryPicker} from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api";
import image from "./images/image.png";

function App() {
  const [state,setState] = useState({
    data:{},
    country:''
  });
  useEffect(()=>{
    async function mount(){
      const data = await fetchData();
      setState({data}); 
  }
  mount();
  },[])
  async function handleChange(country){
    const data = await fetchData(country);
    setState({ data, country: country });
  }
  const { data, country } = state;
  
  return (
    <div className={styles.container}>
    <img src={image} className={styles.image} alt="COVID-19"/>
    <Cards data={data}/>
    <CountryPicker handleChange={handleChange}/>
    <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
