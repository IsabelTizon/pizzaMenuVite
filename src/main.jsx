import React from "react";
import ReactDOM from "react-dom/client";
import { v4 as uuidv4 } from "uuid";
import pizzaData from "../public/data";
import "./index.css";

// COMPONENTS STRUCTURE ADDED TO APP COMPONENT
function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}
// COMPONENTS STRUCTURE: header, menu, footer
function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>;
		</header>
	);
}
function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{updatedPizzaData.map((pizza) => (
				// Props spread operator ({...pizza})
				<Pizza key={pizza.id} {...pizza} />
			))}
		</main>
	);
}
function Footer() {
	const hour = new Date().getHours();
	console.log(hour);
	const isOpen = hour >= 12 && hour <= 20.3;
	console.log(isOpen);

	return (
		<footer className="footer">
			<p>
				{isOpen
					? "We're currently open!"
					: "Sorry, We're closed!"}
			</p>
			{/* new Date().toLocaleTimeString(): a date method that returns a string with the time formatted according to the user's locale settings. */}
			<p>
				{new Date().toLocaleTimeString("es-ES", {
					timeZoneName: "short",
				})}
			</p>
		</footer>
	);
}

// PIZZA COMPONENT
const Pizza = ({
	name,
	ingredients,
	price,
	photoName,
	soldOut,
}) => {
	{
		/* Internal css for the price */
	}
	const priceStyle = { color: "green", fontSize: "1.5rem" };
	return (
		<>
			<div className={`pizza ${soldOut ? "sold-out" : ""}`}>
				{/* Ternary Operator
				Si soldOut es true, agrega "sold-out" como clase.
				Si soldOut es false, no agrega nada (""). */}
				<h3>{name}</h3>
				<p>
					{/* Inline css in React */}
					<span
						style={{
							color: "green",
							fontSize: "1.2rem",
							textTransform: "uppercase",
						}}
					>
						Ingredients:
					</span>
					{ingredients}
				</p>
				{/* Internal css in React */}
				<p style={priceStyle}>£{price}</p>
				<img src={photoName} alt="photo picture" />
				{/* short-circuiting
				Si soldOut es true, renderiza el <p>.
				Si soldOut es false, no renderiza nada (no muestra el <p>). */}
				{soldOut && (
					<p style={{ color: "red" }}>Sold Out!!</p>
				)}
			</div>
		</>
	);
};

// NEW ARRAY (updatedPizzaData) where each pizza is assigned a unique id using uuid after the uuid package was installed
const updatedPizzaData = pizzaData.map((pizza) => ({
	// the spread operator ws used to copy all properties from each pizza object in pizzaData into the new object in updatedPizzaData
	...pizza,
	// if the pizza already has an id property, keep it; otherwise generate a new one using uuidv4()
	id: pizza.id || uuidv4(),
}));
// ROOT: where the entire app is rendered in  the DOM
const root = ReactDOM.createRoot(
	document.getElementById("root")
);
// RENDER
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
