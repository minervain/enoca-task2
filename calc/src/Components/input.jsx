import React from 'react'
import ResultContext from '../Context/ResultContext';

const Input = () => {
  const { result} = React.useContext(ResultContext);

  
  return (
    <div>
      <div className='kapsayici'>
      <div className="ustinput">
     
      </div>
      <div className="genelinput">
      <div className="solinput">
          =
      </div>
      <div className="saginput">
      {result}
          </div>
      
      </div>
    </div>
    </div>
  )
}

export default Input