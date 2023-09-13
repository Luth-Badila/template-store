"use client";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function MainModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  //   const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <h2>This is your modal content</h2>
        <p>Any content can go here.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}
