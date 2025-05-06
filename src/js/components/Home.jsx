import React, {useState} from "react";

//create your first component
const TrafficLight = () => {
	const [color,setColor] = useState("green");
	const [otherColor,setOtherColor] = useState(false);
	
	const alternateColor = () => {
		let listColor = ['green', 'yellow', 'red'];
		if(otherColor){
			listColor.push('purple');
		}
		let index = listColor.indexOf(color);
		setColor (listColor[(index + 1) % listColor.length]); // Vuelve a 0 cuando index es -1 o es length-1
	}

	return (
	<div>
		<button onClick={alternateColor} className="button">Alternate color</button>
		<div className="box">
			<button onClick={() => setColor('red')} className={`red light ${color === "red" ? "active" : ""}`}></button>
			<button onClick={() => setColor('yellow')} className={`yellow light ${color === "yellow" ? "active" : ""}`}></button>
			<button onClick={() => setColor('green')} className={`green light ${color === "green" ? "active" : ""}`}></button>
			{ otherColor? <button onClick={() => setColor('purple')} className={`purple light ${color === "purple" ? "active" : ""}`}></button> : null }
		</div>
		<button onClick={() => setOtherColor(!otherColor)} className="button">{otherColor ? "Remove purple" : "Add purple"}</button>
	</div>
	);
};

export default TrafficLight;