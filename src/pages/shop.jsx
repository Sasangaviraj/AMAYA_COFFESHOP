import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ProductTea from '../components/productcoffe';

const Shop = () => {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Shop All');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
      try {
        let url = "http://localhost:4000/api/v1/shop/";
        if (selectedCategory !== "Shop All") {
          url += `?category=${encodeURIComponent(selectedCategory)}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        setProductData(data.prodata || []);
      } catch (e) {
        console.error("Error fetching shop data:", e);
        setError(e.message || "Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]); 

  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-[var(--color-expiani)] mt-40">
        Loading Products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500 mt-40">
        Error: {error}
      </div>
    );
  }

  if (productData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-[var(--color-expiani)] mt-40">
        No products found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-raleway">
      {/* "SHOP" heading  */}
      <p className="font-playfair text-shop-p1 tracking-[0.7rem] text-center py-15 uppercase text-main-heading">
        SHOP
      </p>

      <div className="flex justify-between items-center px-10 font-semibold mb-8">
        {/* Category Navigation*/}
        <div className="">
          <ul className="flex flex-wrap gap-4 sm:gap-8 justify-center lg:justify-start">
            <li>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleCategoryClick('Shop All'); }}
                className={`text-link-p3 tracking-widest hover:text-h1 transition-colors duration-200 ${selectedCategory === 'Shop All' ? 'text-h1' : 'text-main-heading'}`}
              >
                SHOP ALL
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleCategoryClick('Coffee'); }}
                className={`text-link-p3 tracking-widest hover:text-h1 transition-colors duration-200 ${selectedCategory === 'Coffee' ? 'text-h1' : 'text-main-heading'}`}
              >
                COFFEE
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleCategoryClick('Cold Brew'); }}
                className={`text-link-p3 tracking-widest hover:text-h1 transition-colors duration-200 ${selectedCategory === 'Cold Brew' ? 'text-h1' : 'text-main-heading'}`}
              >
                COLD BREW
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleCategoryClick('Decaf'); }}
                className={`text-link-p3 tracking-widest hover:text-h1 transition-colors duration-200 ${selectedCategory === 'Decaf' ? 'text-h1' : 'text-main-heading'}`}
              >
                DECAF
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleCategoryClick('Merchandise'); }}
                className={`text-link-p3 tracking-widest hover:text-h1 transition-colors duration-200 ${selectedCategory === 'Merchandise' ? 'text-h1' : 'text-main-heading'}`}
              >
                MERCHANDISE
              </a>
            </li>
          </ul>
        </div>

        {/* Sort Option */}
        <div className="flex items-center justify-center gap-4 mt-4 lg:mt-0">
          <p className="text-link-p3 text--main-heading tracking-widest cursor-pointer">
            SORT
          </p>
          <MdOutlineKeyboardArrowDown className="cursor-pointer text-xl text-main-heading" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 ">
        {productData.map((product) => (
          <Link key={product.productId} to={`/products/${product.productId}`}>
            <ProductTea
              productId={product.productId}
              imageUrl={product.imageUrl}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
