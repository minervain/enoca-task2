import React, { useContext } from 'react'
import { useState } from 'react';
import HistoryContext from '../Context/HistoryContext';
import ResultContext from '../Context/ResultContext';
const History = () => {
    const {result}=useContext(ResultContext)
    const { history, setHistory } = useContext(HistoryContext)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };  

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const updateHistory = () => {
        setHistory(prevState => [...prevState, result]);
    };
    console.log(history)

    return (
        <div className='history'>
           <div onClick={() => {
        updateHistory(); // updateHistory fonksiyonunu çağırmak için
        openModal(); // modalı açmak için
      }} id='buton'></div>

            {isModalOpen && (
                <div className="overlay">
                    <div className="modal">
                        {history.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}              <button onClick={closeModal}>Kapat</button>
                    </div>
                </div>
            )}
        </div>
    );
}


export default History