import {Route, Link} from "react-router-dom"
import './css/section.css'
import Plan from './section/Plan'
import Label from './section/Label'

export default function Section(){
    return(
        <div className="content">
            <Route path="/plan" exact component={Plan}></Route>
            <Route path="/label" exact component={Label}></Route>
        </div>
    )
}