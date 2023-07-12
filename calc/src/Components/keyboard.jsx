import React from 'react';
import ResultContext from '../Context/ResultContext';
import { useContext } from 'react';

const Keyboard = () => {
    const { result, setResult } = useContext(ResultContext);


    const ClickX = (e) => {

        setResult(result.concat(e.target.name))

    };

    const clear=()=>{
        setResult("")
    }

    const Calculate=()=>{
        try{        setResult(eval(result).toString());
        }
        catch(err){
                setResult(err.message)
        }
    }

    return (
        <div>
            <div className="keyboard">
                <div className="geneldiv">
                    <div className="cleaner">
                        <button onClick={clear} id='clear' className="cl">AC</button>
                        <button onClick={ClickX} className="cl">+/-</button>
                        <button onClick={ClickX} className="cl">%</button>
                    </div>
                    <div className="sayilar">
                        <div className="firstnumbers">
                            <button onClick={ClickX} name='1' className="nmbrs">1</button>
                            <button onClick={ClickX} name='4' className="nmbrs">4</button>
                            <button onClick={ClickX} name='7' className="nmbrs">7</button>
                            <button onClick={ClickX} name='.' className="nmbrs">.</button>
                        </div>
                        <div className="firstnumbers">
                            <button onClick={ClickX} name='2' className="nmbrs">2</button>
                            <button onClick={ClickX} name='5' className="nmbrs">5</button>
                            <button onClick={ClickX} name='8' className="nmbrs">8</button>
                            <button onClick={ClickX} name='0' className="nmbrs">0</button>
                        </div>
                        <div className="firstnumbers">
                            <button onClick={ClickX} name='3' className="nmbrs">3</button>
                            <button onClick={ClickX} name='6' className="nmbrs">6</button>
                            <button onClick={ClickX} name='9' className="nmbrs">9</button>
                            <button onClick={ClickX} name='00' className="nmbrs">00</button>
                        </div>  
                    </div>
                </div>
                <div className="islemler">
                    <button onClick={ClickX} name='/' className="islem">&divide;</button>
                    <button onClick={ClickX} name='*' className="islem">&times;</button>
                    <button onClick={ClickX} name='-' className="islem">&ndash;</button>
                    <button onClick={ClickX} name='+' className="islem">+</button>
                    <button onClick={Calculate} name='=' id='result' className="islem">=</button>
                </div>
            </div>
        </div>
    );
};

export default Keyboard;
