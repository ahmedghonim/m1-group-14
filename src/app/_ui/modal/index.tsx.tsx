import React from "react";

export interface ModalProps {
  children: React.ReactNode;
  label: string;
}
const Modal = ({ children, label }: ModalProps) => {
  return (
    <>
      <label htmlFor="my-modal-4" className="btn btn-primary text-white">
        {label}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer ">
        <label className="modal-box relative max-w-[800px]" htmlFor="">
          {children}
        </label>
      </label>
    </>
  );
};

export default Modal;
