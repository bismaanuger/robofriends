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
		<div
			className="
			grid gap-4 pb-3 mb-0 mt-3 mx-3
			2xl:mx-52 2xl:grid-cols-3
			xl:mx-28 xl:grid-cols-3
			lg:mx-10 lg:grid-cols-3
			md:mx-6 md:grid-cols-3
			sm:grid-cols-2"
		>
			{cardArray}
		</div>
	);
};

export default CardList;
