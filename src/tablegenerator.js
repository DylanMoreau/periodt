import React from "react";


const Tablegenerator = ({amt, bool}) => {

    let arr = [];

    for (let i = 0; i < amt; i++) {
        arr.push(i);
    }
     
    let newArr;

    if (bool) {
        newArr = arr.filter(id => id > 0).map(id => <th className={"group-" + id} key={Math.random() + id}> {id} </th>); 
    } else {
        newArr = arr.map(id => <td className="blank" key={Math.random() + id}> </td> ); 
    }

    return (
        newArr
    )
}


export default Tablegenerator;