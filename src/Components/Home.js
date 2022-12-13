
import img from "../images/globe.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Home(props) {
    //  const [lang, setlang] = useState("")
    let lang = "";
    const languagefunc = (obj) => {

        let txt = "";
        for (let x in obj.languages) {
            txt += obj.languages[x] + " \n";
        }
        return txt;
    }

    function check(element) {
        if (props.tableLang === null || element.ccn3!==props.id) {
            // setlang(languagefunc(element))
            lang = languagefunc(element)
        }
        else if(element.ccn3===props.id) {
            lang = props.tableLang
        }
        //  setlang(props.tableLang)
        return lang
    }

    return (
        <><div style={{ background: "#f0f7f7" }}>
            <div className="container my-3 text-align-center">
                <img className="rounded mx-auto d-block" alt="..." src={img} style={{ height: "200px", width: "200px" }}></img>
            </div>
            <div className="input-group mb-3 container my-3" id="main">
                <input type="text" className="form-control" id='Name' required="text" placeholder="Country name" aria-label="Country name" aria-describedby="button-addon2" onChange={props.HandleOnchange} />
                <button disabled={props.Name.length===0} className="btn btn-primary" type="button" id="button-addon2" onClick={props.datafetch}>Add</button>
            </div>
            <table className="table container my-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Country Name</th>
                        <th scope="col">Official Name</th>
                        <th scope="col">Languages</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody id="tableBody">{props.array.map((ele) => (
                    <tr itemID={props.array && props.array.indexOf(ele)} key={props.array.indexOf(ele).toString()}>
                        <td>{props.array.indexOf(ele) + 1}</td>
                        <td>{ele.name.common}</td>
                        <td>{ele.name.official}</td>
                        <td>{check(ele)}</td>

                        <td><Link to={"/card/" + ele.ccn3} ><button className="btn btn-info" >View</button></Link></td>
                        {/* <td><Link className="border border-info" to="/card-1" params={()=>console.log(selectedObj = props.array.indexOf(ele))}>View</Link></td> */}
                        {/* onClick={props.getData(ele.ccn3)} */}
                    </tr>
                ))}

                    {/* */}
                </tbody>
            </table>
        </div>
        </>
    )
}

//export {selectedObj}
