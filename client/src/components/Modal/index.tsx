import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "..";

import "./index.css";

type ModalProps = {
  showModal: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

function Modal(props: ModalProps) {
  if (!props.showModal) return null;
  else
    return createPortal(
      <div className="app-modal">
        <div className="modal-backdrop"></div>
        <div className="modal">
          <div className="modal-header">
            <h2>{props.title}</h2>
            <div>
              <Button onClick={props.onClose}>
                <MdOutlineClose size={16} />
              </Button>
            </div>
          </div>
          <hr />
          <div className="modal-body">{props.children}</div>
        </div>
      </div>,

      document.body
    );
}

export default Modal;
