import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './GameHistoryModal.css';
import axios from 'axios';

const GameHistoryModal = ({ isOpen, onClose, userId, modalStyles, isCalmMode }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const url = userId
          ? `http://localhost:5000/api/memory/history?userID=${userId}`
          : `http://localhost:5000/api/memory/history`;
  
        const response = await axios.get(url, {
          headers: { "Content-Type": "application/json" }
        });
  
        setHistory(response.data);
      } catch (error) {
        console.error(
          "Error fetching game history:",
          error.response ? error.response.data : error.message
        );
      }
    };
  
    if (isOpen) {
      fetchHistory();
    }
  }, [isOpen, userId]);

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      style={{
        ...modalStyles,
        content: {
          ...modalStyles.content,
          backgroundColor: isCalmMode ? "#86a17d" : "#1e1e2e",
          color: isCalmMode ? "#ffffff" : "#fff",
        },
      }}>

      <h2 className="modal-title">Game History</h2>
      <div className="history-list">
        {history.length === 0 ? (
          <p className="empty">No game history found.</p>
        ) : (
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Difficulty</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={index}>
                  <td>{new Date(item.gameDate).toLocaleDateString()}</td>
                  <td>{item.difficulty}</td>
                  <td>{item.timeTaken}s</td>
                  <td>{item.completed ? '✅' : '❌'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button className="close-button" onClick={onClose}>Close</button>
    </Modal>
  );
};

export default GameHistoryModal;
