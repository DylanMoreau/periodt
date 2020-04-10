import React from "react";

const Legend = ({mode}) => {

    return (
        <table id="legend" className={ mode ? "legend-hide" : '' }> 
            <tr>
                <th colSpan="5"> Legend </th>
            </tr>
    
            <tr>
                <td className="alkali">Alkali Metal</td>
                <td className="alkaline">Alkaline Earth</td>
                <td className="transition">Transition Metal</td>
                <td className="metal">Basic Metal</td>
                <td className="metalloid">Semi- metal</td>
            </tr>
            <tr>
                <td className="nonmetal">Nonmetal</td>
                <td className="halogen">Halogen</td>
                <td className="noble">Noble Gas</td>
                <td className="lanthanoid">Lanthanoid</td>
                <td className="actinoid">Actinoid</td>
            </tr>
        </table> 
    )
}

export default Legend;