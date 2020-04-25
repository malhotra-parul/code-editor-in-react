import React from "react";
import {Bg, PopUp, Tip, ImageHolder, DivHolder, Img, ButtonHolder, ModalBtn } from "../styles";

const Modal = ({isModalOpen, handleCancel, handleDelete}) => {
    const handleCancelBtn = ()=>{
        handleCancel();
   };
   const handleDeleteBtn = ()=>{
    handleDelete();
   }

  return (
    isModalOpen && <Bg isModalOpen>
      <PopUp>
        <h3>Are you sure you want to delete it?</h3>
        <Tip>
          Tip: You can download the file from the Download button in the bottom
          toolbar!
        </Tip>
        <DivHolder>
          <ImageHolder>
            <Img src="https://i.ibb.co/ngLGcbV/delete.png" alt="delete-icon" />
          </ImageHolder>
        </DivHolder>
        <ButtonHolder>
          <ModalBtn onClick={handleDeleteBtn}>Delete</ModalBtn>
          <ModalBtn onClick={handleCancelBtn}>Cancel</ModalBtn>
        </ButtonHolder>
      </PopUp>
    </Bg>
    );
};

export default Modal;
