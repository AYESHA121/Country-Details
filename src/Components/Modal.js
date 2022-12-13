import { useState } from "react"
import React from 'react'

export default function Modal(props) {

const [Addlang,setAddLang]=useState('')

    function handleClick(e) {
        setLocalnewLang(pre=>pre+" "+Addlang)

    }

    const [LocalnewLang, setLocalnewLang] = useState(props.lang)
    return (<>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Languages</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {props.getData(LocalnewLang) }}></button>
                    </div>
                    <div className="modal-body">

                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Update Languages" id="floatingTextarea" onChange={(e) => {setLocalnewLang(e.target.value)}}></textarea>
                            
                        </div>
                        <div >
                            <button  type="button" id="Bodyupdate" className="btn btn-secondary my-2" onClick={props.getData(LocalnewLang) }>Update</button>
                        </div>
                    </div>

                    <div className="modal-footer" id="footer">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Add language" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => {setAddLang(e.target.value)}}/>
                            <button disabled={Addlang.length===0} className="btn btn-primary" type="button" id="button-addon2" onClick={handleClick}>Add</button>
                        </div>

                    </div> 
                </div>
            </div>
        </div>
    </>
    )
}