import {useState} from 'react'
import Axios from "axios";
export default function Model(props){
    const {modelClass, itemEdit, setClass} = props
    const [label, setlabel] = useState()
    const [path, setpath] = useState()
    const [file, setfile] = useState()
    const [plan, setplan] = useState()
    const [save, setSave] = useState(false)


    const handleSubmit =(id) =>{
        const data ={
            id: id,
            label: label,
            path: path,
            file: file,
            plan: plan
        }

        fetch('http://localhost:3001/label', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response =>
                response.json()
            ) 
            .then(json => alert(json.mess))
    }
    

    return(
        <div className={modelClass? "model":"model hide"}>
            <div className="formtitle">Edit Label Image Form</div>
            <form >
                <label>Label Name</label>
                <input defaultValue={itemEdit?.label} onChange ={(e) =>setlabel(e.target.value)}/>
                <label>Label Path</label>
                <input defaultValue={itemEdit?.path} onChange ={(e) =>setpath(e.target.value)}/>
                <label>File Name</label>
                <input defaultValue={itemEdit?.file} onChange ={(e) =>setfile(e.target.value)}/>
                <label>Plan</label>
                <select defaultValue={itemEdit?.plan} onChange ={(e) =>{
                    setplan(e.target.value)
                    setSave(true)
                }}>
                    <option value="Free">Free</option>
                    <option value="Pro">Pro</option>
                    <option value="Advance">Advance</option>
                </select>
                  
                { save && <button onClick ={() =>handleSubmit(itemEdit?.id)} type="submit" >Save</button>}
                { save && <button onClick={() =>setClass()}>Cancel</button>}
                
            </form>
        </div>
    )
}