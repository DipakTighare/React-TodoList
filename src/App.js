import './App.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import { useState } from 'react';
import Checked from './component/Checked';
import Tooltip from '@mui/material/Tooltip';


function App() {

const [list,setList] = useState(" ");
const [addItem, setAddItem] = useState([]);

const itemList =(event) => {
setList(event.target.value)
};

const addList = ()=> {
!list ? alert("please add todays work list")
:
setAddItem([...addItem,list]);
setList("")
}
 return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>
           😊Todo List
          </h1>
          <br />
        
          <input
            type="text"
            value={list}
            placeholder="Add an items"
            onChange={itemList}
          />
  <Tooltip title="Add in List">                     

          <button className="newbtn" onClick={addList}>
            <PostAddRoundedIcon />
          </button>
</Tooltip> 
          <ol>
{addItem.map((item, index) =>{
            return( <>
<li><Checked key={index} id={index} text ={item}  addItem ={addItem} setAddItem={setAddItem}/></li>

</>)
          
})}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
