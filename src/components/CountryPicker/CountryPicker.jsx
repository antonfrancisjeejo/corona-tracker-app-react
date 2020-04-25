import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";
const CountryPicker = (props)=>{
    const [fetchedCountry, setFetchedCountry] = useState([]);
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setFetchedCountry(await fetchCountries());
        }
        fetchAPI();
    },[]);
    
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(event)=>{props.handleChange(event.target.value)}}>
                    <option value="">Global</option>
                    {fetchedCountry.map((country,index)=><option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;