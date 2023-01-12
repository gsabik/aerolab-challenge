const BASE_URL = "https://coding-challenge-api.aerolab.co";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FlMGEzNmQ0ODcxNjAwMWFkMjY5ZDIiLCJpYXQiOjE2NzIzNTAyNjJ9.jaE3dJtdoPQeorxCWKwC8N2TRWDmzp-PricVzuzh6kk";

export const requestUser = async() => {
	const response = await fetch(`${BASE_URL}/user/me`, {
		method: "GET",
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": `Bearer ${TOKEN}`
		}
	});

	const user = await response.json();

	return user;
}

export const requestProducts = async() => {
	const response = await fetch(`${BASE_URL}/products`, {
		method: "GET",
		withCredentials: true, 
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": `Bearer ${TOKEN}`
		}
	});

	const products = await response.json();

	return products;
}

export const requestRedeemHistory = async() => {
	const response = await fetch(`${BASE_URL}/user/history`, {
		method: "GET",
		withCredentials: true, 
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": `Bearer ${TOKEN}`
		}
	});

	const redeemHistory = await response.json();

	return redeemHistory;
}

export const postPoints = async(points) => {
	const response = await fetch(`${BASE_URL}/user/points`, {
		method: "POST",
		withCredentials: true,
		body: JSON.stringify({ "amount": points }),
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": `Bearer ${TOKEN}`
		}
	});

	const postPoints = await response.json();

	return postPoints;
}

export const postProduct = async(id) => {
	const response = await fetch(`${BASE_URL}/redeem`, {
		method: "POST",
		body: JSON.stringify({ "productId": id }),
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": `Bearer ${TOKEN}`
		}
	});

	const redeem = await response.json();

	return redeem;
}