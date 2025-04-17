import React from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react';

const SelectDifficultyModal = ({ playmodalIsOpen, playcloseModal, handleDifficultySelect, playClickSound,  handlePlay, playHoverSound, isCalmMode, difficulty }) => {
  return (
    <Modal
      isOpen={playmodalIsOpen}
      onRequestClose={playcloseModal}
      style={{
        ...modalPlayStyles,
        content: {
          ...modalPlayStyles.content,
          backgroundColor: isCalmMode ? "#86a17d" : "#1e1e2e",
          color: isCalmMode ? "#ffffff" : "#fff",
        },
      }}
    >
      <button
        onClick={playcloseModal}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#fff",
        }}
      >
        <X size={24} />
      </button>

      <h2 className={`${isCalmMode ? "calm-mode-label" : ""} modal-h2`}>
        Select Difficulty
      </h2>
      <div className="difficulty-selection">
        <button
          onClick={() => {
            handleDifficultySelect("green");
            playClickSound();
          }}
          className={`difficulty-button green ${
            difficulty === "green" && !isCalmMode ? "selected" : ""
          } ${isCalmMode && difficulty === "green" ? "calm-selected" : ""}`}
          onMouseEnter={playHoverSound}
        >
          Easy
        </button>
        <button
          onClick={() => {
            handleDifficultySelect("yellow");
            playClickSound();
          }}
          className={`difficulty-button yellow ${
            difficulty === "yellow" && !isCalmMode ? "selected" : ""
          } ${isCalmMode && difficulty === "yellow" ? "calm-selected" : ""}`}
          onMouseEnter={playHoverSound}
        >
          Normal
        </button>
        <button
          onClick={() => {
            handleDifficultySelect("red");
            playClickSound();
          }}
          className={`difficulty-button red ${
            difficulty === "red" && !isCalmMode ? "selected" : ""
          } ${isCalmMode && difficulty === "red" ? "calm-selected" : ""}`}
          onMouseEnter={playHoverSound}
        >
          Hard
        </button>
      </div>

      <div>
        <button
          onClick={handlePlay}
          className="play-button"
          onMouseEnter={playHoverSound}
        >
          Accept
        </button>
      </div>
    </Modal>
  );
};

export default SelectDifficultyModal;

const modalPlayStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  content: {
    backgroundColor: "#1e1e2e",
    border: "2px solid #4a4e69",
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "600px",
    height: "200px",
    width: "90%",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
  },
};

