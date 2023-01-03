const BASE_URL = "https://coding-challenge-api.aerolab.co";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FlMGEzNmQ0ODcxNjAwMWFkMjY5ZDIiLCJpYXQiOjE2NzIzNTAyNjJ9.jaE3dJtdoPQeorxCWKwC8N2TRWDmzp-PricVzuzh6kk";

export const requestProducts = async() => {
	const response = await fetch(`${BASE_URL}/products`, {
		method: "GET",
		withCredentials: true, 
		headers: {
			"Content-Type": "aplication/json",
			"Accept": "application/json",
			"Authorization": `Bearer ${TOKEN}`
		}
	});

	const products = await response.json();

	return products;
}