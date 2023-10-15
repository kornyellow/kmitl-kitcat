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
        <div className="flex justify-center items-center w-screen h-screen">
          <div className="bg-white w-[600px] h-[700px] p-4 rounded-[20px] shadow">
            <div className="detailCatSitter flex justify-center">
              <Image
                className="d-flex w-[150px] h-[150px] ml-24 mr-6"
                src={UserCatSitter}
                alt=""
              />
              <button
                onClick={closeModal}
                className="flex justify-end text-[var(--navy)] py-2 px-4 rounded "
              >
                <IoClose size={35} />
              </button>
            </div>

            <div className="detailCatSitter flex justify-center">
              <text className="text-xl font-medium text-blueText">
                สมศรี รักสะอาด
              </text>
            </div>

            <div className="detailCatSitter flex items-center mt-3.5">
              <Image
                className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6"
                src={PlaceMarker}
                alt=""
              />
              <text className="text-xl font-medium mt-1 text-blueText">
                ลาดกระบัง 54 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร
              </text>
            </div>

            <div className="detailCatSitter flex items-center mt-3.5">
              <Image
                className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6"
                src={Calendar}
                alt=""
              />
              <text className="text-xl font-medium mt-1 text-blueText">
                01 ต.ค. 2023 07:00 ถึง 01 ต.ค. 2023 09:00
              </text>
            </div>

            <div className="detailCatSitter flex items-center mt-3.5">
              <Image
                className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6"
                src={Notes}
                alt=""
              />
              <text className="text-xl font-medium mt-1 text-blueText">
                โน้ตถึงพี่เลี้ยง:
              </text>
            </div>

            <div className="detailCatSitter flex items-center mt-1">
              <text className="text-xl font-medium ml-[152px] mr-3 text-blueText mb-[15px]">
                น้องชื่อจ้มจ้ม ชอบให้ลูบหัว
              </text>
            </div>

            <div className="detailCatSitter flex items-center mt-2">
              <text className="text-xl font-medium ml-24 w-[120px] text-blueText">
                2 ชั่วโมง
              </text>
              <text className="text-xl font-medium ml-[230px] w-[120px] text-right text-blueText">
                400 บาท
              </text>
            </div>
            <hr className="h-px ml-24 w-[470px] border-1"></hr>

            <div className="detailCatSitter flex items-center mt-px">
              <text className="text-xl font-medium ml-24 w-[120px] text-blueText">
                อาบนํ้า
              </text>
              <text className="text-xl font-medium ml-[230px] w-[120px] text-right text-blueText">
                100 บาท
              </text>
            </div>
            <hr className="h-px ml-24 w-[470px] border-1"></hr>

            <div className="detailCatSitter flex items-center mt-px">
              <text className="text-xl font-medium ml-24 w-[120px] text-blueText">
                ตัดเล็บ
              </text>
              <text className="text-xl font-medium ml-[230px] w-[120px] text-right text-blueText">
                100 บาท
              </text>
            </div>
            <hr className="h-px ml-24 w-[470px] border-1"></hr>

            <div className="detailCatSitter flex items-center mt-px">
              <text className="text-xl font-medium ml-24 w-[120px] text-blueText">
                ตัดขน
              </text>
              <text className="text-xl font-medium ml-[230px] w-[120px] text-right text-blueText">
                100 บาท
              </text>
            </div>
            <hr className="h-px ml-24 w-[470px] border-1"></hr>

            <div className="detailCatSitter flex items-center mt-px">
              <text className="text-xl font-medium ml-24 w-[120px] text-blueText">
                ยอดรวม
              </text>
              <text className="text-xl font-medium ml-[230px] w-[120px] text-right text-blueText">
                1700 บาท
              </text>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmDone;
