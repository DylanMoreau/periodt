import React, {useState, useEffect} from 'react';
import Tablegenerator from "./tablegenerator";
import Element from "./element";
import Legend from "./legend";
import "./images/breaking_background2.jpeg";

const Table = () => {

    const [items, setItems] = useState([]);
    const [element, setElement] = useState({});
    const [elemload, setElemLoad] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [darkText, setDarkText] = useState(false);
    const [mode, setMode] = useState(false);

    async function fetchData() {
        try {
           const data = await fetch('https://neelpatel05.pythonanywhere.com');
           data.json().then( json => {
               setIsLoaded(true);
               setItems(json);
           })
        } catch (err) {
                console.log(err);
           }
    }
        useEffect(() => {
            fetchData();
        }, []);


    async function fetchElement(event) {
        event.preventDefault();
        try{
           let atomicValue = event.target.value;
           const elementLink = await fetch(`https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=${atomicValue}`);
           elementLink.json().then( json => {
                setElemLoad(true);
                setElement(json);
           })
        } catch (err) {
            console.log(err);
        }
    }
      
       const period7a = items.filter(item => item.atomicNumber > 86 && item.atomicNumber <= 89);
       const period7b = items.filter(item => item.atomicNumber > 103 && item.atomicNumber <= 118);
       const period7c = items.filter(item => item.atomicNumber >= 90 && item.atomicNumber <= 103);

       const period6a = items.filter(item => item.atomicNumber > 54 && item.atomicNumber <= 57);
       const period6b = items.filter(item => item.atomicNumber > 71 && item.atomicNumber <= 86);
       const period6c = items.filter(item => item.atomicNumber >= 58 && item.atomicNumber <= 71);

       const period5 = items.filter(item => item.atomicNumber > 36 && item.atomicNumber <= 54);
       const period4 = items.filter(item => item.atomicNumber > 18 && item.atomicNumber <= 36);

       const period3a = items.filter(item => item.atomicNumber > 10 && item.atomicNumber <= 12);
       const period3b = items.filter(item => item.atomicNumber > 12 && item.atomicNumber <= 18);
      
       const period2a = items.filter(item => item.atomicNumber > 2 && item.atomicNumber <= 4);
       const period2b = items.filter(item => item.atomicNumber > 4 && item.atomicNumber <= 10);
       
       const period1a = items.filter(item => item.atomicNumber === 1);
       const period1b = items.filter(item => item.atomicNumber === 2);

    
        if(!isLoaded) {
            return(
            <h1> Data Is Loading... </h1>
            )
        } else {
            return (
                <div className={ mode ? "breaking-back" : 'slow-transition' }> 
                    <header>

                        <h1 className={ mode ? "h1" : '' }> P<span>eriodic Table of Elements</span></h1>

                        <div id="position">
                            <p className="slider-text" id="margin"> <b> Dark Text </b></p>
                            <label className="switch">
                                <input type="checkbox" name="checkbox" />
                                <span className="slider round" onClick={() => setDarkText(prev => !prev)} > </span>
                            </label>
                        <br />

                            <p className="slider-text" id="margin-2"> <b> Breaking Bad </b></p>
                            <label className="switch" id="position">
                                <input type="checkbox" name="checkbox" />
                                <span className="slider round" onClick={() => setMode(prev => !prev)} > </span>
                            </label>
                        </div> 
                    </header>

                        
                    <table id="periodic-table">
                        < Legend mode={mode}/>
                        <tbody>
                            <tr id="groups">
                               <th></th>
                               <Tablegenerator amt={19} bool={true}/>
                            </tr>

                            <tr >
                                <td className={ mode ? "period2": "period" }><b> 1 </b></td>
                                {period1a.map(item => (
                                <td key={item.atomicNumber} className={`${item.groupBlock} ${darkText ? "dark-text-mode": ""} ${mode ? "breaking-bad" : "slow-transition"} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                    <b>{item.atomicNumber} </b> 
                                    <p><b> {item.symbol} </b> </p>
                                    <p id="name"> {item.name} </p>
                                </td>
                                ))}
                            
                                <Tablegenerator amt = {16} bool={false}/>
                         

                                {period1b.map(item => (
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                ))}
                            </tr>

                            <tr>
                                <td className={ mode ? "period2": "period" }> <b> 2 </b> </td>
                                {period2a.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                    <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}

                                <Tablegenerator amt = {10} bool={false} />
                              
                                {period2b.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}
                            </tr>


                            <tr>
                                <td className={ mode ? "period2": "period" }><b>3</b></td>
                                {period3a.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}
                               
                               <Tablegenerator amt = {10} bool={false}/>

                                {period3b.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}
                            </tr>

                            <tr>
                                <td className={ mode ? "period2": "period" }> <b>4</b> </td>
                                {period4.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}
                            </tr>

                            <tr >
                                <td className={ mode ? "period2": "period" }> <b>5</b></td>
                                {period5.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}
                            </tr>

                            <tr>
                                <td className={ mode ? "period2": "period" }> <b>6</b> </td>
                                {period6a.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}
                                 {period6b.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                    <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}
                            </tr>

                            <tr>
                                <td className={ mode ? "period2": "period" }><b>7</b> </td>
                                {period7a.map(item => 
                                <td  key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}
                                {period7b.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`} id={item.name}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                    <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}
                            </tr>

                            <tr id="spacer"></tr>

                            <tr>
                                <td className="period">  </td>

                                <Tablegenerator amt = {3} bool={false}/>

                                {period6c.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`}> 
                                    <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p id="name"> {item.name} </p>
                                </td>
                                )}
                            </tr>


                            <tr >
                                <td className="period">  </td>

                                <Tablegenerator amt = {3} bool={false}/>

                                {period7c.map(item => 
                                <td key={item.atomicNumber} className={ `${item.groupBlock} ${mode ? "breaking-bad" : "slow-transition"} ${darkText ? "dark-text-mode": ""} element`} id={item.name}>
                                     <form>
                                        <button onClick={fetchElement} value={item.atomicNumber} name={item.name} >
                                        </button>
                                    </form>
                                     <b>{item.atomicNumber} </b> 
                                   <p><b> {item.symbol} </b></p> 
                                    <p> {item.name} </p>
                                </td>
                                )}
                            </tr>
                         </tbody>
                    </table>

                    <Element loaded={elemload} element={element} setLoad={setElemLoad}/>
                </div>
            )
        };
}
export default Table;