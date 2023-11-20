import React, { useState } from "react";
import Modal from "react-modal";
import styles from "../stylings/Modal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 40,
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

function ModalComponent({ newTask }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [taskId, setTaskId] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskMessage, setTaskMessage] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const saveNewTaskData = (event) => {
    event.preventDefault();
    const newTaskData = {
      id: taskId,
      status: taskStatus,
      message: taskMessage,
      dueDate: new Date(taskDate),
    };
    newTask(newTaskData);
    setIsOpen(false);
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          type="text"
          placeholder="Task Id"
          name="task_id"
          className={styles.inputComponent}
          value={taskId}
          onChange={(event) => setTaskId(event.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          name="status"
          className={styles.inputComponent}
          value={taskStatus}
          onChange={(event) => setTaskStatus(event.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          name="message"
          className={styles.inputComponent}
          value={taskMessage}
          onChange={(event) => setTaskMessage(event.target.value)}
        />
        <input
          type="date"
          name="taskDate"
          value={taskDate}
          onChange={(event) => setTaskDate(event.target.value)} // eveniment la modficarea continutului
        />

        <button onClick={saveNewTaskData}> Add new Card </button>
      </Modal>
    </div>
  );
}

export default ModalComponent;
