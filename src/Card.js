import React from "react";

const Card = ({ id, name, email }) => {
	return (
		<div className="p-2 rounded bg-blue-300 hover:bg-purple-400 transform hover:scale-105 transition duration-75 ease-in-out  text-center shadow-md">
			<div className="flex justify-center">
				<img alt={name} src={`https://robohash.org/${id}?200x200`} />
			</div>

			<div>
				<h2 className="font-mono font-bold text-lg">{name}</h2>
				<p className="font-mono text-sm">{email}</p>
			</div>
		</div>
	);
};

export default Card;
