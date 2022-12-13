import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import Modal from './Modal';

export default function Card(props) {


    const parms = useParams();

    const Details = props.array.filter((item) => {
        return item.ccn3 === parms.ccn3;
    })


    const [cardLang, setCardLang] = useState(Object.values(Details[0]?.languages).join(" "))

    function getData(value) {

        setCardLang(value);
        props.getData(value, parms.ccn3);

    }


    return (<>

        <div className="card container my-3">
            <h5 className="card-header">Details</h5>
            <div className="card-body">
                <div>
                    <img className="rounded mx-auto d-block" src={Details[0].flags.png} alt="flag" style={{ border: "1px solid black" }} /></div>
                <div className="card-title"><strong>Currencies:  </strong>
                    <span className="card-text">{Object.values(Details[0]?.currencies)[0].name}</span></div>
                <div className="card-title"><strong>Region  </strong>
                    <span className="card-text">{Details[0].region}</span></div>
                <div className="card-title"><strong>Subregion  </strong>
                    <span className="card-text">{Details[0].subregion}</span></div>
                <div className="card-title"><strong>Map    </strong>
                    <a href={Details[0].maps.googleMaps} target="blank"><button className='btn btn-warning btn-sm py-0 px-2'>View on Map</button></a>
                </div>
                <div className="card-title"><strong>Languages:         </strong>
                    <span className='mb-0'>{cardLang}</span></div>

                {/* <span className='mb-0'>{Object.values(Details[0]?.languages).join(" ")}</span></div> */}
                <div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Add Languages
                    </button>
                </div>
            </div>
        </div>
        <Modal array={props.array} getData={getData} lang={cardLang} />

    </>
    )
}