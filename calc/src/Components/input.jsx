import React from 'react'
import ResultContext from '../Context/ResultContext';

const Input = () => {
  const { result, setResult } = React.useContext(ResultContext);

  
  return (
    <div>
      <div className='kapsayici'>
      <div className="ustinput">
      {result}
      </div>
      <div className="genelinput">
      <div className="solinput">
          =
      </div>
      <div className="saginput">
          </div>
      
      </div>
    </div>
    </div>
  )
}

export default Input