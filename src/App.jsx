import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import List from "./components/List";
import Cart from "./components/Cart";

const products = [
  {
    name: "Playboi carti bloodsucker tee",
    image: "src/assets/BLOODSUCKER-TEE-247x247.png",
		price: "$40.00"
  },
  {
    name: "Playboi Carti Burn Tee",
    image: "src/assets/5-247x247.png",
		price: "$50.00"

  },
  {
    name: "Playboi carti wlr sympathy for the vampire tee",
    image: "src/assets/WLR-SYMPATHY-FOR-THE-VAMPIRE-TEE-247x247.png",
		price: "$40.00"
  },
  {
		name: "Playboi Carti Devils Trill Tee",
    image: "src/assets/7-247x247.png",
		price: "$50.00"
  },
	{
		name: "Playboi carti cpfm 4 wlr king vamp hoodie",
    image: "src/assets/CPFM-4-WLR-KING-VAMP-HOODIE-247x247.png",
		price: "$150.00"
  },
	{
		name: "Playboi Carti Neon Tour T-shirt Black",
		image: "src/assets/36-247x247.png",
		price: "$90.00"
	},
	{
		name: "Playboi carti new maps of hell poppy tee",
		image: "src/assets/NEW-MAPS-OF-HELL-POPPY-TEE-247x247.png",
		price: "$40.00"
	},
		{
		name: "Playboi carti new maps of hell tee",
		image: "src/assets/NEW-MAPS-OF-HELL-TEE-247x247.png",
		price: "$40.00"
	},
			{
		name: "Playboi Carti Neon Tour Drug Zone Tee Black",
		image: "src/assets/29-247x247.png",
		price: "$80.00"
	},
	{
		name: "Playboi carti war dog coffee mug",
		image: "src/assets/WAR-DOG-COFFEE-MUG-247x247.png",
		price: "$25.00"
	},

];

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [shoppingStarted, setShoppingStarted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCheckboxChange = (product) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(product)
        ? prevSelected.filter((item) => item !== product)
        : [...prevSelected, product]
    );
  };

	// const openCart = () => {
  //   setIsCartOpen(true);
  // };

	 const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const startShopping = () => {
    setShoppingStarted(true);
  };

	const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);


  return (
    <>
      <Navbar selectedCount={selectedProducts.length} toggleCart={toggleCart} />
      <div className="main-content">
        {!shoppingStarted ? (
          <Jumbotron startShopping={startShopping} />
        ) : (
          <List products={products} onCheckboxChange={handleCheckboxChange} />
        )}
      </div>

      {isCartOpen && <Cart products={selectedProducts} totalPrice={totalPrice} />}
      <Footer />
    </>
  );
}

export default App;
