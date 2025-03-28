import React from "react";
import ReactDOM from "react-dom/client";
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
			{pizzaData.map((pizza) => (
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

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
