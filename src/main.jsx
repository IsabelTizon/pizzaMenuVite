import React from "react";
import ReactDOM from "react-dom/client";
import { v4 as uuidv4 } from "uuid";
import pizzaData from "../public/data";

function App() {
	return (
		<>
			<Header />
			<Menu />
			<Footer />
		</>
	);
}

function Header() {
	return <h1>Fast React Pizza Co.</h1>;
}
function Menu() {
	return (
		<>
			<h2>Our Menu</h2>
			{updatedPizzaData.map((pizza) => (
				// Props spread operator ({...pizza})
				<Pizza key={pizza.id} {...pizza} />
			))}
		</>
	);
}
function Footer() {
	//
	// return React.createElement(
	// 	"footer",
	// 	null,
	// 	"We're currently open!"
	// );
	return (
		<footer>
			{new Date().toLocaleTimeString()}.We're currently
			open!
		</footer>
	);
}
const Pizza = ({
	name,
	ingredients,
	price,
	photoName,
	soldOut,
}) => {
	return (
		<>
			<div className={`pizza ${soldOut ? "sold-out" : ""}`}>
				{/* Ternary Operator
				Si soldOut es true, agrega "sold-out" como clase.
				Si soldOut es false, no agrega nada (""). */}
				<h2>{name}</h2>
				<p>Ingredients: {ingredients}</p>
				<p>£{price}</p>
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

// Create a new array (updatedPizzaData) where each pizza is assigned a unique id using uuid after the uuid package was installed
const updatedPizzaData = pizzaData.map((pizza) => ({
	// the spread operator ws used to copy all properties from each pizza object in pizzaData into the new object in updatedPizzaData
	...pizza,
	// if the pizza already has an id property, keep it; otherwise generate a new one using uuidv4()
	id: pizza.id || uuidv4(),
}));

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
