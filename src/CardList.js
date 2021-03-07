import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	const cardArray = robots.map((user, i) => {
		return (
			<Card
				key={i}
				id={robots[i].id}
				name={robots[i].name}
				email={robots[i].email}
			/>
		);
	});

	return (
		<div className="m-3 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
			{cardArray}
		</div>
	);
};

export default CardList;
