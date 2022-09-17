import React, { useState, useEffect } from "react";

import { Toast, ToastContainer } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTypeAttributes } from "./MessageTypes";

function Notification({ title, content, type }) {
  const [show, setShow] = useState(false);
  const typeAttributes = getTypeAttributes(type);

  useEffect(async () => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <Toast
      show={show}
      delay={5000}
      autohide={true}
      bg={typeAttributes.bg}
      animation={true}
      onClose={toggleShow}>
      <Toast.Header>
        <FontAwesomeIcon icon={typeAttributes.icon} />
        &nbsp;
        <strong className='me-auto'>
          {title != null ? title : typeAttributes.defaultTitle}
        </strong>
      </Toast.Header>
      <Toast.Body className='text-white'>{content}</Toast.Body>
    </Toast>
  );
}

export default Notification;
