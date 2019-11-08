import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {logout} from '../../../utils/index';
import {withRouter} from 'react-router-dom'


const ModalLogout = (props) => {
  const {
    buttonLabel="Logout",
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const logOut=()=>{
    logout();
    props.history.push('/');
}
  return (
    <div>
      <a className="dropdown-item" onClick={toggle}>{buttonLabel}</a>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ready to Leave?</ModalHeader>
        <ModalBody>
        Select "Logout" below if you are ready to end your current session.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Cancel</Button>{' '}
          <Button color="secondary" onClick={() => logOut()}>Logout</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default withRouter(ModalLogout);