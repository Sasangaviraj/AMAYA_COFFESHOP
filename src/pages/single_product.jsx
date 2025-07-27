import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlueButton from "../components/bluebutton";
import { auth } from "../config/config";
import ProductTea from "../components/productcoffe";

const SingleProductDetails = () => {
  const { productId } = useParams(); // Get product ID from URL for dynamic fetching
  const [product, setProduct] = useState(null); // State to store fetched product details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedRoast, setSelectedRoast] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);

  const navigate = useNavigate();
  const currentUser = auth.currentUser; // Get the currently logged-in user

  // Fetch product details from your backend API
  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `http://localhost:4000/api/v1/products/${productId}`
        );

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(
            errData.message || "Failed to fetch product details."
          );
        }
        const data = await response.json();
        setProduct(data.product); // Assuming your API returns { product: { ... } }

        // Set default selected options if available
        if (
          data.product.availableSizes &&
          data.product.availableSizes.length > 0
        ) {
          setSelectedSize(data.product.availableSizes[0]);
        } else {
          setSelectedSize(""); // Clear if no sizes
        }
        if (
          data.product.availableRoasts &&
          data.product.availableRoasts.length > 0
        ) {
          setSelectedRoast(data.product.availableRoasts[0]);
        } else {
          setSelectedRoast(""); // Clear if no roasts
        }
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError(err.message || "Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]); // Re-run effect if productId changes

  // Function to get Firebase ID Token
  const getIdToken = async () => {
    if (currentUser) {
      try {
        return await currentUser.getIdToken();
      } catch (err) {
        console.error("Error getting ID token:", err);
        setError("Authentication error. Please re-login.");
        return null;
      }
    }
    return null;
  };

  // "Add to Cart" button click handler
  const handleAddToCart = async () => {
    if (!currentUser) {
      alert("Please log in to add items to your cart!");
      navigate("/login");
      return;
    }
    if (!product) {
      setError("Cannot add to cart: Product details not loaded.");
      return;
    }
    // Validate selections only if options are available
    if (
      product.availableSizes &&
      product.availableSizes.length > 0 &&
      !selectedSize
    ) {
      setError("Please select a size.");
      return;
    }
    if (
      product.availableRoasts &&
      product.availableRoasts.length > 0 &&
      !selectedRoast
    ) {
      setError("Please select a roast option.");
      return;
    }

    setError("");
    const token = await getIdToken();
    if (!token) return;

    try {
      const response = await fetch("http://localhost:4000/api/v1/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product.productId,
          productName: `${product.productName} ${
            selectedSize ? `(${selectedSize})` : ""
          } ${selectedRoast ? `(${selectedRoast})` : ""}`.trim(),
          productPrice: product.productPrice,
          quantity: quantity,
          selectedSize: selectedSize, 
          selectedRoast: selectedRoast,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Failed to add item to cart.");
      }

      const data = await response.json();
      alert(`${product.productName} added to cart successfully!`);
      console.log("Cart updated:", data.cart);

      navigate("/cart");
    } catch (err) {
      console.error("Error adding to cart:", err);
      setError(err.message || "Failed to add item to cart. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-expiani">
        Loading Product...
      </div>
    );
  }

  if (error && !product) {
    
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        {error}
      </div>
    );
  }

  if (!product) {
    
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-expiani">
        Product not found.
      </div>
    );
  }

 
  const {
    imageUrl,
    productName,
    productPrice,
    description,
    notes,
    availableSizes,
    availableRoasts,
    harvest,
    country,
    region,
    altitude,
  } = product;

  return (
    <div className="min-h-screen bg-white font-raleway p-4 sm:p-6 lg:p-8 mt-40">
      <div className="max-w-6xl mx-auto bg-color-white  p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
        {/* Left Section: Product Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full max-w-md h-auto  object-cover"
          />
        </div>

        {/* Right Section: Product Details and Add to Cart */}
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="font-playfair text-mainheading lg:text-5xl  text-color-main-heading mb-4">
            {productName}
          </h1>
          <p className="text-[20px] font-semibold text-h1 mb-4">
            {productPrice}
          </p>
          <p className="text-expiani text-expiani-h mb-6 leading-relaxed">
            {description}
          </p>

          {/* NOTES Section  */}
          {notes && notes.length > 0 && (
            <div className="mb-6">
              <p className="uppercase text-expiani font-semibold mb-2">NOTES</p>
              <p className="text-[var(--color-expiani)]">{notes.join(" – ")}</p>
            </div>
          )}

          {/* SIZE Option */}
          {availableSizes && availableSizes.length > 0 && (
            <div className="mb-4">
              <label
                htmlFor="size-select"
                className="block text-link-p3 font-semibold text-main-heading mb-2 uppercase tracking-wide"
              >
                SIZE
              </label>
              <div className="relative">
                <select
                  id="size-select"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="block w-[300px] px-4 py-2 border border-gray-300 focus:outline-none   text-expiani bg-white appearance-none pr-8"
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  {availableSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-58 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* ROAST Option */}
          {availableRoasts && availableRoasts.length > 0 && (
            <div className="mb-4">
              <label
                htmlFor="roast-select"
                className="block text-link-p3 tracking-wide font-semibold text-main-heading mb-2 uppercase"
              >
                ROAST
              </label>{" "}
              {/* Used var for text size */}
              <div className="relative">
                <select
                  id="roast-select"
                  value={selectedRoast}
                  onChange={(e) => setSelectedRoast(e.target.value)}
                  className="block w-[300px] px-4 py-2 border border-gray-300  focus:outline-none   text-[var(--color-expiani)] bg-white appearance-none pr-8" // Added rounded-md and shadow-sm
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  {availableRoasts.map((roast) => (
                    <option key={roast} value={roast}>
                      {roast}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-58 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Quantity Input */}
          <div className="mb-6 mt-10">
            <input
              type="number"
              id="quantity-input"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-24 p-2 border border-gray-300  text-center text-expiani "
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <BlueButton title="ADD TO CART" onClick={handleAddToCart} />
        </div>
      </div>

      {/* ADDITIONAL INFORMATION Section */}
      <div className="max-w-6xl mx-auto bg-white  p-6 lg:p-8 mt-12 mb-12 border-t border-t-gray-200 text-center text-link-p3">
        <h2 className="font-playfair text-footer-p2 font-bold text-main-heading mb-6 text-center ">
          <u>Additional Information</u>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-[var(--color-expiani)]">
          {harvest && (
            <div className="flex justify-between sm:block">
              <p className="font-semibold text-[var(--color-main-heading)] uppercase mr-4 sm:mr-0">
                Harvest
              </p>
              <p>{harvest}</p>
            </div>
          )}
          {country && (
            <div className="flex justify-between sm:block">
              <p className="font-semibold text-[var(--color-main-heading)] uppercase mr-4 sm:mr-0">
                Country
              </p>
              <p>{country}</p>
            </div>
          )}
          {region && (
            <div className="flex justify-between sm:block">
              <p className="font-semibold text-[var(--color-main-heading)] uppercase mr-4 sm:mr-0">
                Region
              </p>
              <p>{region}</p>
            </div>
          )}
          {altitude && (
            <div className="flex justify-between sm:block">
              <p className="font-semibold text-[var(--color-main-heading)] uppercase mr-4 sm:mr-0">
                Altitude
              </p>
              <p>{altitude}</p>
            </div>
          )}
          {availableSizes &&
            availableSizes.length > 0 && ( 
              <div className="flex justify-between sm:block">
                <p className="font-semibold text-[var(--color-main-heading)] uppercase mr-4 sm:mr-0">
                  Size
                </p>
                <p>{availableSizes.join(", ")}</p>
              </div>
            )}
          {availableRoasts &&
            availableRoasts.length > 0 && ( 
              <div className="flex justify-between sm:block">
                <p className="font-semibold text-[var(--color-main-heading)] uppercase mr-4 sm:mr-0">
                  Roast
                </p>
                <p>{availableRoasts.join(", ")}</p>
              </div>
            )}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="max-w-6xl mx-auto bg-[var(--color-white)] rounded-lg shadow-md p-6 lg:p-8 mt-12">
          <h2 className="font-playfair text-3xl font-bold text-[var(--color-main-heading)] mb-6 text-center uppercase">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.productId}
                to={`/products/${relatedProduct.productId}`}
                className="block"
              >
                <ProductTea
                  imageUrl={relatedProduct.imageUrl}
                  productName={relatedProduct.productName}
                  productPrice={relatedProduct.productPrice}
                  productId={relatedProduct.productId} // <-- මෙය අලුතින් එකතු කරන්න
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductDetails;
