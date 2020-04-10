import React from "react";


const Element = ({element, loaded, setLoad}) => {

    const elementBackground = {
        background: `radial-gradient(circle at 100px 100px, #${element.cpkHexColor}, #000 70%)`
    };

    const close = () => {
        setLoad(false);
    }

    const nuetrons = (mass, atomic) => {
        let elemMass = parseInt(mass);
        let elemAtomic = parseInt(atomic);

        return elemMass - elemAtomic;
    }

    if(!loaded) {
        return(
           <div id="">
               <h2> Click any element to learn more about it!</h2> 
           </div>
        )
    } else {
        return (
            <div id="element-div"> 
                <div id="element-header">
                    <h1 onClick={close} id="close"><b> X </b></h1>
                    <h1 id="element-name"> {element.name}</h1> 
                </div>

                <div className="element-model">
                    <h2>CPK Model: #{element.cpkHexColor}</h2>
                    <figure className="circle" style={elementBackground}><p>N:{nuetrons(element.atomicMass, element.atomicNumber)} <br /> P: {element.atomicNumber} </p></figure>
                </div>

                <div className="element-info">
                    <h3>Atomic Number: {element.atomicNumber}</h3>   
                    <h3>Atomic Mass: {element.atomicMass}</h3>
                    <h3>Standard State: {element.standardState}</h3>
                    <h3>Bonding Type: {element.bondingType}</h3>
                    <h3>Group Block: {element.groupBlock}</h3>
                    <h3>Electron Configuration: {element.electronicConfiguration}</h3>
                    <h3>Year Discovered: {element.yearDiscovered}</h3>
                </div>

                <div className="element-info2">
                    <h3>Oxidation States: {element.oxidationStates}</h3>
                    <h3>Ionization Energy: {element.ionizationEnergy} eV</h3>
                    <h3>Electron Affinity: {element.electronAffinity} eV</h3>
                    <h3>Electronegativity: {element.electronegativity}</h3>
                    <h3>Atomic Radius: {element.atomicRadius} pm</h3>
                    <h3>Density: {element.density} g/cm<sup>3</sup></h3>
                    <h3>Boiling Point: {element.boilingPoint} K</h3>
                </div>

            </div>
        )
    }
}



export default Element;