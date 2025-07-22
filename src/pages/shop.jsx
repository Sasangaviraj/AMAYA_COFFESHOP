import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ProductTea from "../components/productcoffe";
import { useEffect, useState } from "react";

const Shop = () => {
  const pathParam = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/shop", {
      method: "GET",
    })
      .then((res) => {
        //  api call then
        return res.json();
      })
      // json data then
      .then((data) => {
        console.log(data);
        setProductData(data.prodata);
      })
      .catch((e) => {
        console.log(e);
      });
  },[]);

  console.log(productData);

  return (
    <div className=" ">
      <p className="font-Raleway font-semibold text-shop-p1 tracking-[0.7rem] text-center py-15">
        SHOP
      </p>

      <div className="flex justify-between items-center px-10 font-semibold">
        <div className="">
          <ul className="flex gap-8 ">
            <li>
              <a
                href="#"
                className="text-link-p3 text-main-heading tracking-widest"
              >
                SHOP ALL
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-link-p3 text-main-heading tracking-widest"
              >
                COFFE
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-link-p3 text-main-heading tracking-widest"
              >
                COLDE BREW
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-link-p3 text-main-heading tracking-widest"
              >
                DECAF
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-link-p3 text-main-heading tracking-widest"
              >
                MERCHANDISE
              </a>
            </li>
          </ul>
        </div>

        <div className="flex  items-center justify-center gap-4">
          <p className="text-link-p3 text-main-heading tracking-widest cursor-pointer">
            SORT
          </p>
          <MdOutlineKeyboardArrowDown className="cursor-pointer" />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 ">
       {productData.map((product) => (
          <ProductTea
            key={product.productId}
            imageUrl={product.imageUrl}
            productName={product.productName}
            productPrice={product.productPrice}
          />
        ))}
      </div>


    </div>
  );
};

export default Shop;
