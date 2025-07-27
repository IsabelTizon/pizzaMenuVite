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
	// const updatedPizzaData = [];
	const numPizzas = updatedPizzaData.length; // Using the length of updatedPizzaData to determine how many pizzas are available

	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{/* Conditional rendering with ternary */}
			{numPizzas > 0 ? ( // If there are pizzas available, render the menu
				// React Fragment (<></>) allow us to have more than just one element inside a piece of JSX
				<>
					<p>
						Authentic Italian cuisine, 6 creative dishes to
						choose from. All from our stone oven, all
						organic, all delicious
					</p>
					<ul className="pizzas">
						{updatedPizzaData.map((pizza) => (
							// Props spread operator ({...pizza})
							<Pizza key={pizza.id} {...pizza} />
						))}
					</ul>
				</>
			) : (
				"sorry, We're out of pizzas"
			)}
		</main>
	);
}
function Footer() {
	const hour = new Date().getHours();
	const openHour = 12.0;
	const closeHour = 20.3;
	console.log(hour);
	const isOpen = hour <= closeHour && hour >= openHour;
	console.log(isOpen);

	return (
		<footer className="footer">
			{/* Extracting JSX (return of function Order) into a new component Order */}
			<Order
				closeHour={closeHour}
				isOpen={isOpen}
				openHour={openHour}
			/>
		</footer>
	);
}
function Order(props) {
	return (
		<div className="order">
			<div
				style={{ display: "flex", flexDirection: "row" }}
			>
				{/* new Date().toLocaleTimeString(): a date method that returns a string with the time formatted according to the user's locale settings. */}
				{new Date().toLocaleTimeString("es-ES", {
					timeZoneName: "short",
				})}
				{/* short-circuiting */}
				{props.isOpen && (
					<p>
						: We're currently open! Until {props.closeHour}
					</p>
				)}
				{!props.isOpen && (
					<p>
						: Sorry, We're closed at {props.closeHour}{" "}
						Opening at {props.openHour}
					</p>
				)}
			</div>

			{/* ternary */}
			<p>
				{props.isOpen
					? "Come to order a pizza!"
					: "See you tommorrow!"}
			</p>

			<button className="btn">Order</button>
		</div>
	);
}

// PIZZA COMPONENT
const Pizza = ({
	//destructuring components
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
	{
		/* Conditional Rendering with multiples returns */
	}
	// if (soldOut) return null;

	return (
		<>
			{/* Setting classes and text conditionally */}
			<div className={`pizza ${soldOut ? "sold-out" : ""}`}>
				{/* Ternary Operator
				Si soldOut es true, agrega "sold-out" como clase.
				Si soldOut es false, no agrega nada (""). */}
				<img src={photoName} alt={name} />
				<div>
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
					<p style={priceStyle}>£{price + 3}</p>
				</div>
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
	// the spread operator was used to copy all properties from each pizza object in pizzaData into the new object in updatedPizzaData
	...pizza,
	// if the pizza already has an id property, keep it; otherwise generate a new one using uuidv4()
	id: pizza.id || uuidv4(),
}));
// ROOT: where the entire app is rendered in  the DOM
const root = ReactDOM.createRoot(
	document.getElementById("root")
);
// Rendering the root component and strict mode
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
