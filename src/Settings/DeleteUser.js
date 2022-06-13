import { Modal,Button } from "react-bootstrap"

export default function DeleteUser({showDeletePopUp,handleCloseDeletePopUp,deleteUser}) 
{
    return(
<Modal show={showDeletePopUp} onHide={handleCloseDeletePopUp}>
<Modal.Header closeButton>
  <Modal.Title>Delete User</Modal.Title>
</Modal.Header>
<Modal.Body style={{padding:'1rem'}}> <br/> &emsp; Are you sure you want to delete this user from the table? </Modal.Body>
<Modal.Footer style={{border:'white'}}>
  <Button variant="secondary" onClick={handleCloseDeletePopUp}>
    No
  </Button>
  <Button variant="primary" onClick={deleteUser} style={{background:'red',border:'red'}}>
   Yes
  </Button>
</Modal.Footer>
</Modal>)
}