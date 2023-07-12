import React, { useState } from 'react';
import ResultContext from './ResultContext';

const ResultProvider = ({ children }) => {
  const [result, setResult] = useState('');


  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultProvider;
