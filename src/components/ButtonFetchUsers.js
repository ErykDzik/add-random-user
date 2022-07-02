import React from "react";

const ButtonFetchUsers = (props) => {
	return (
		<button
			style={{
				padding: "10px 20px",
				border: "solid 2px black",
				borderRadius: "10px",
				backgroundColor: "black",
				color: "white",
			}}
			onClick={props.click}
		>
			Dodaj Użytkownika
		</button>
	);
};

export default ButtonFetchUsers;
