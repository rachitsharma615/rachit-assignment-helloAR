import { useState, useEffect } from "react";
import "./Settings.css";
import logoUrl from '../assets/delete.png';
import DeleteUser from "./DeleteUser";
import AddUser from "./AddUser";


function Settings() {
  const [userData, setUserData] = useState([]);

  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  const [clickedUserIndex,setClickedUserIndex] = useState()

  const [showAddPopUp, setShowAddPopUp] = useState(false)

  const [inputRole,setInputRole] = useState('')

  const [inputName,setInputName] = useState('')

  const [valueUpdated,setValueUpdated] = useState(null)

  const lastSeenValues = ['An hour ago','3 minutes ago',"A minute ago","20 minutes ago","Yesterday"]


  const handleCloseDeletePopUp = () => setShowDeletePopUp(false);
  const handleShowDeletePopUp = (index) => {
    setShowDeletePopUp(true);
    setClickedUserIndex(index)
  }

  const handleCloseAddPopUp = () => setShowAddPopUp(false);
  const handleShowAddPopUp = () => setShowAddPopUp(true)
  
  const addUser = async () => 
  {

     //Generating Random Number for Last Seen Values
     var min = 0;
      var max = 4;
      var rand =  min + (Math.random() * (max-min));


    let newData= {
      name: inputName,
      last: lastSeenValues[parseInt(rand)],
      role: inputRole,
    }


    setUserData(userData => [...userData, newData])
    setValueUpdated(true)
    setShowAddPopUp(false)

  }

  
  


  const deleteUser = () =>
  {
    if (clickedUserIndex > -1) {

      if(clickedUserIndex===0)
      {
        let arr = userData
        arr.shift()
        setUserData(arr)
        localStorage.setItem('userDataStored',JSON.stringify(arr))
        setShowDeletePopUp(false)
      }
      else
      {
      userData.splice(clickedUserIndex, 1); 
      localStorage.setItem('userDataStored',userData.splice(clickedUserIndex, 1)) 
      setShowDeletePopUp(false)
      }
    }
  }

  useEffect(() => { 

    if(valueUpdated)
    {
            localStorage.setItem("userDataStored", JSON.stringify(userData));
    }
  }, [showAddPopUp,valueUpdated])
  

  useEffect(() => { 
    if (localStorage.getItem("userDataStored")) {
      const items = localStorage.getItem("userDataStored");
      setUserData(JSON.parse(items));
    }
   
  }, []);

  return (
    <div className="mainDiv">
      <div className="headButton">
        <button className="addButton" onClick={() => handleShowAddPopUp()}>Add User</button> <br />
        <div className="userTable">
          <table>
            <tr className="headerTable">
              <th className="subHeader">#</th>
              <th className="subHeader">User</th>
              <th className="subHeader">Last Signed In</th>
              <th className="subHeader">Role</th>
            </tr>
            {userData?.length > 0 ? (
              <>
                {userData?.map((elem,index) => {
                  return <tr>
                    <td className="dataValue">{index+1}</td>
                    <td className="dataValue">{elem?.name}</td>
                    <td className="dataValue">{elem?.last}</td>
                    <td className="dataValue">{elem?.role}</td>
                    <td className="dataValue" onClick={() => handleShowDeletePopUp(index)}> <img src={logoUrl} alt="Delete" style={{height:'25px',cursor:'pointer'}} /></td>
                  </tr>
                })}
              </>
            ) : (
              <tr style={{ transform: "translate(28rem, 1px)" }}>
                No Data Avaialble!
              </tr>
            )}
          </table>
        </div>
      </div>

      <DeleteUser showDeletePopUp={showDeletePopUp} handleCloseDeletePopUp={handleCloseDeletePopUp} deleteUser={deleteUser}/>
      <AddUser showAddPopUp={showAddPopUp} handleCloseAddPopUp={handleCloseAddPopUp} setInputName={setInputName} setInputRole={setInputRole} addUser={addUser}/>
    </div>
  );
}

export default Settings;
