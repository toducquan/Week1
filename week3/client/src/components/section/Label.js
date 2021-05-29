import '../css/label.css'
import Page from './Page'
import Model from './Model'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Label(){

   

    const [fakedata, setfakedata] = useState([])
    const [rowPerPage] = useState(5)
    const [currentPage, setcurrentPage] = useState(1)


    const loadData =  () =>{
            fetch("http://localhost:3001/label").then(res => res.json()).then(data => {
            setfakedata(data)
        })
    }
    useEffect(() =>{
        loadData()
    },[])

    
    //get row in current page
    const indexOfLastPost = currentPage*rowPerPage
    const indexOfFirstPost = indexOfLastPost-rowPerPage
    const currentRow = fakedata.slice(indexOfFirstPost, indexOfLastPost)
    const [modelClass, setModelClass] = useState(false)
    const [itemEdit, setItemEdit] = useState()
    

    const popUP = (item) =>{
        setModelClass(true)
        setItemEdit(item)
    }

    const setClass =() => {
        setModelClass(false)
    }
    return (
        <div className="label">
            <div className="router">
                {"Product Labels Pro > Label Images"}
            </div>
            <div className="name">
                <strong>Images Lib</strong>
            </div>
            <div className="table">
                <table>
                    <tr className="firstRow">
                        <th className="textLeft">Label</th>
                        <th>File Name</th>
                        <th>Path</th>
                        <th>Belong to plan</th>
                        <th>Sort order</th>
                    </tr>
                    {
                        currentRow.map((item) =>{
                            return  <tr className="row" onClick={() =>popUP(item)}>
                                        <td className="textLeft">{item.label}</td>
                                        <td>{item.file}</td>
                                        <td>{item.path}</td>
                                        <td>{item.plan}</td>
                                        <td>{item.order}</td>
                                    </tr>
                        })
                    }
                </table>
                <Page setcurrentPage = {setcurrentPage} 
                      totalRow = {fakedata.length}
                      rowPerPage = {rowPerPage} 
                />
            </div>
            <Model modelClass= {modelClass} itemEdit= {itemEdit} setClass={() => setClass()}></Model>
        </div>
        // end table
    )
}