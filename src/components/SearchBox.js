import React from "react";

const SearchBox = ({ searchChange }) => {
	return (
		<div className="mb-10 flex justify-center">
			<input
				className="
                p-3 rounded-md border focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-600 border-purple-400 shadow-md w-60 md:w-96"
				type="search"
				placeholder="search robot"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
