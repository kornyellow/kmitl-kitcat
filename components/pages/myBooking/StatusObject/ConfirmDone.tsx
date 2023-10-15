"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import toDoList from "@/image/todo.png";
import BookingModal from "../BookingModal/BookingModal";

const ConfirmDone: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-row justify-center h-[20rem]">
      <div className="flex flex-col items-center w-[12.5rem]">
        <h3 className="mt-3 font-extrabold">รอการยืนยัน</h3>
        <div className="working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--light-blue)] flex justify-center items-center">
          <Image width={117} src={toDoList} alt="toDoList" />
        </div>
        <button
          onClick={openModal}
          className="bg-neutral-50 hover:bg-[var(--light-blue)] text-black font-bold py-2 px-4 mt-3 rounded-[50px] w-[9rem] border-2 border-[var(--light-blue)] hover:border-white drop-shadow-lg"
        >
          ดูรายละเอียด
        </button>
      </div>

      <Modal isOpen={isModalOpen} className="z-10">
        <BookingModal isOpen={isModalOpen} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default ConfirmDone;
