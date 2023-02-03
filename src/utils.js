// Variables
export const AMOUNTS = [1000, 5000, 7000];

export const CATEGORIES = [
	"All Products",
	"Laptops",
	"Cameras",
	"Smart Home",
	"Audio",
	"Monitors & TV",
	"PC Accesories",
	"Gaming",
	"Tablets & E-readers",
	"Phones",
	"Drones",
	"Phone Accessories",
];

export const FILTERS = {
	MostRecent: "Most recent",
	LowestPrice: "Lowest price",
	HighestPrice: "Highest price"
};

// Functions
export const formattedDate = (dateToFormatted) => {
	const date = new Date (dateToFormatted);
	const options = {month: "2-digit", day: "2-digit"};
	const finalDate = date.toLocaleDateString("en-US", options);

	return finalDate;
}