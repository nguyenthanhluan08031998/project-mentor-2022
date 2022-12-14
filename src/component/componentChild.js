import { useEffect, useMemo, useState, memo } from "react"

const ComponentChild = props => {      
     const {submit = ()=>{}} =props;
     
    console.log("ComponentChild  running")
    return (
        <div>
           <button onClick={submit}>click me</button>
        </div>
    )
}
export default  memo(ComponentChild)