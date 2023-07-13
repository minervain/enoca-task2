import React, { useState } from 'react';
import HistoryContext from './HistoryContext';

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);


  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
