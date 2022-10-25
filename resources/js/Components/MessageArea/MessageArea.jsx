import Notification from "@/Components/Notifications/Notification";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer } from "react-bootstrap";

function MessageArea() {
  const { flash } = usePage().props;

  useEffect(() => {});
  return (
    <ToastContainer className='p-3 pt-6' position='top-end'>
      {flash.message && (
        <Notification
          content={flash.message.content}
          type={flash.message.type}
        />
      )}
    </ToastContainer>
  );
}

export default MessageArea;
