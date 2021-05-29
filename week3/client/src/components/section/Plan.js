import '../css/plan.css'
import {useEffect, useState} from 'react'

export default function Plan(){

    
    const [data, setData] = useState([])
    const [freePlan, setFreePlan] = useState([])
    const [proPlan, setProPlan] = useState([])
    const [advancePlan, setAdvancePlan] = useState([])
    const [activeButton, setActiveButoon] = useState(true)
    
    
    
    

    useEffect(() =>{
        getData()
    },[])

    const getData =() =>{
        fetch("http://localhost:3001/plan")
        .then(res => res.json())
        .then(data => {
            setData(data);
            setFreePlan(data.FreePlan);
            setProPlan(data.ProPlan);
            setAdvancePlan(data.AdvancePlan);
        })
    }
    
    const changeFreePlan = (index) => {
        const newFreePlan = [...freePlan]
        newFreePlan[index].checked = !newFreePlan[index].checked
        setFreePlan(newFreePlan)
    }
    const changeProPlan = (index) => {
        const newProPlan = [...proPlan]
        newProPlan[index].checked = !newProPlan[index].checked
        setProPlan(newProPlan)
    }
    const changeAdvancePlan = (index) => {
        const newAdvancePlan = [...advancePlan]
        newAdvancePlan[index].checked = !newAdvancePlan[index].checked
        setAdvancePlan(newAdvancePlan)
    }
    const savePlan =() =>{
        setActiveButoon(false)
        const plan = {
            "FreePlan": freePlan,
            "ProPlan": proPlan,
            "AdvancePlan": advancePlan
        }
        console.log(plan);
        
        fetch("http://localhost:3001/plan",{
            method:"POST",
            body: JSON.stringify(plan),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(res => res.json())
        .then(json => {
            alert(json.mess)
            setActiveButoon(true)
        })
    }

    const resetAllPlan = () =>{
        const resetFreePlan = [...freePlan]
        for(let plan of resetFreePlan){
            plan.checked = false
        }
        setFreePlan(resetFreePlan)

        const resetProPlan = [...proPlan]
        for(let plan of resetProPlan){
            plan.checked = false
        }
        setProPlan(resetProPlan)

        const resetAdvancePlan = [...advancePlan]
        for(let plan of resetAdvancePlan){
            plan.checked = false
        }
        setAdvancePlan(resetAdvancePlan)
    }

    return (
        <div className="plans">
            <div className="router">
                {"B2B Solution > Plans"}
            </div>
            <div className="products">
                <p className="product"> Most used featture: Wholesale </p>
                <p className="product"> Most used featture: Auto tags </p>
                <p className="product"> Most used featture: Statistic </p>
            </div>
            <form className="options">
                <div className="option">
                    <p>FREE PLAN FEATURES</p>
                    {
                        freePlan.map((item, index) =>{
                            return <p className="check">
                                <input type="checkbox" checked={item.checked} onClick={() =>changeFreePlan(index)}/>
                                <label>{item.name}</label>
                            </p>
                        })
                    }
                </div>
                <div className="option">
                    <p>PRO PLAN FEATURES</p>
                    {
                        proPlan.map((item, index) =>{
                            return <p className="check">
                                <input type="checkbox" checked={item.checked? true:false} onClick={() =>changeProPlan(index)} />
                                <label>{item.name}</label>
                            </p>
                        })
                    }
                </div>
                <div className="option">
                    <p>ADVANCE PLAN FEATURES</p>
                    {
                        advancePlan.map((item, index) =>{
                            return <p className="check">
                                <input type="checkbox" checked={item.checked? true:false} onClick={() =>changeAdvancePlan(index)}/>
                                <label>{item.name}</label>
                            </p>
                        })
                    }
                </div>
                
                {activeButton && <button onClick = {() =>savePlan()} type="button">Save</button>}  
                {activeButton && <button type="button" onClick={() => resetAllPlan()}>Reset</button>}
                
            </form>
        </div>
    )
}