
import './App.css';
import Card from './Components/Card.js';
import Home from "./Components/Home.js"
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'


function App() {
    const [array, setarray] = useState([]);
    const [Name, setName] = useState("")




    const HandleOnchange = (e) => {
        setName(e.target.value)
    }
    const datafetch = async () => {

        let res = await fetch(` https://restcountries.com/v3.1/name/${Name}`)
        let response = await res.json();
        AppendData(response[0]);
        document.getElementById("Name").value = ""
    }

    const AppendData = (userinput) => {

        setName("")
        array.push(userinput)
        setarray(array)

    }

    const [tableLang, settableLang] = useState(null)
    const [id, setid] = useState(null)
    function getData(lang, value) {

        settableLang(lang);
        setid(value)

    }

    return (<>

        <Routes>

            <Route exact path="/" element={<Home datafetch={datafetch} HandleOnchange={HandleOnchange} array={array} tableLang={tableLang} id={id} Name={Name} />}></Route>

            <Route exact path="/card/:ccn3" element={<Card array={array} getData={getData} gLang={tableLang} />}></Route>
        </Routes>

    </>
    );
}


export default App;