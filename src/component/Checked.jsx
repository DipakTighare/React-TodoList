import React, { useState } from 'react'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AdjustIcon from '@mui/icons-material/Adjust';
import Tooltip from '@mui/material/Tooltip';

const Checked = (props) => {
const [line,setline]=useState(false)

 const cutIt = () => {
setline(true);
}
const delItem = (id)=>{
const updatedData = props.addItem.filter((ele ,index)=>{
return index !==id 
})
props.setAddItem (updatedData);

}
  return (
<>
<div className='delete-todo_style'>
    <Tooltip title="Double click for Remove">
       <span  onClick={cutIt} onDoubleClick={()=>delItem(props.id)}>
{line?<CheckCircleIcon  className='deleteSweepIcon'/>:
 <AdjustIcon  className='deleteSweepIcon'/>}</span>
</Tooltip> 
<Tooltip title="click if Done">
   <li style={{textDecoration:line? "line-through": "none"}}> {props.text}</li>
</Tooltip>
</div>
</>
  )
}
export default Checked