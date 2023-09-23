import { useState } from 'react'
import Button from './Button';

const styleMarginButton = {
  margin: '10px',
  padding: '5px',
}

const styleMarginButtonReset = {
    margin: '10px',
    padding: '5px',
    paddingRight: '30px',
    paddingLeft: '30px',
}
  
const styleInline = {
    display: 'flex',
};

export default function CounterButton(){
  
    const [counters, setCounters] = useState(0);
    
    function handlePlus(){
        setCounters(counters + 1);
    }
  
    function handleMinus(){
        setCounters(counters - 1);
    }
  
    function handleReset(){
        setCounters(0);
    }
  
    return (
        <>
            <div style={styleInline}>
                <Button text={"-"} style={styleMarginButton} handle={handleMinus} disabledStatus={counters == 10 || counters < 0 ? true : false} />
                <p style={styleMarginButton}>{counters == 10 || counters < 0 ? 'Done!' : counters}</p>
                <Button text={"+"} style={styleMarginButton} handle={handlePlus} disabledStatus={counters == 10 || counters < 0 ? true : false} />
            </div>
            <Button text={"Reset!"} style={styleMarginButtonReset} handle={handleReset} disabledStatus={counters == 0 ? true : false}/>
        </>
    )
}