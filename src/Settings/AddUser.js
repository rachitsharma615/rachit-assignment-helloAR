import { Modal, Button } from "react-bootstrap";
import addUserPic from "../assets/add-user.png";

export default function AddUser({ showAddPopUp, handleCloseAddPopUp,setInputName,setInputRole,addUser}) {


    
  return (
    <Modal
      show={showAddPopUp}
      onHide={handleCloseAddPopUp}
      size="lg"
      style={{ padding: "0 !important" }}
    >
      <Modal.Body>
        <div className="mainContent">
          <div className="col1">
            <img
              src={addUserPic}
              alt="add-user"
              style={{ marginTop: "80px" }}
            />{" "}
            <br />
            <p style={{ color: "white", marginTop: "1rem", padding: "29px" ,marginBottom:'10rem'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col2">
            <div className="titleUser">User Information</div>

            <div className="formElement">
              <label className="labelText">Email ID of User</label> <br />
              <input
                type="text"
                className="inputElement"
                placeholder="rachit@exapmple.com"
                onChange={(e) => setInputName(e.target.value)}
              />
            </div>

            <div className="formElement">
              <label className="labelText">Roles</label> <br />
              <select id="roles" className="inputElement" onChange={(e) => setInputRole(e.target.value)}>
                <option value=""> Select </option>
                <option value="Owner">Owner</option>
                <option value="Admin">Admin</option>
                <option value="Sales">Sales</option>
              </select>
            </div>

            <br />

            <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'40px'}}>
            <Button variant="secondary" onClick={handleCloseAddPopUp} style={{ background: "#FFBB41", border: "#FFBB41",width:'7rem'}}>
              Cancel
            </Button> 
            <Button
              variant="primary"
              style={{ background: "#57CA85", border: "#57CA85",width:'7rem'}}
              onClick={addUser}
            >
              Add
            </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
