import '../css/label.css'
export default function Page(props){
    const {setcurrentPage, totalRow, rowPerPage} = props
    const index = []

    for(let i = 1; i < Math.ceil(totalRow/rowPerPage)+1; i++)
        index.push(i)
    
    return(
        <div className="page"> 
            {
                index.map((number) =>{
                    return <p className="index" onClick ={() =>setcurrentPage(number)}>{number}</p>
                })
            }
        </div>
    )
}