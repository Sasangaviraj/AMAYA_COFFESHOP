import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import ProductTea from "../components/productcoffe"

const Shop = () => {
  return (
    <div className=" ">

      <p className="font-Raleway font-semibold text-shop-p1 tracking-[0.7rem] text-center py-15">SHOP</p>

      <div className="flex justify-between items-center px-10 font-semibold">
        <div className="">
          <ul className="flex gap-8 ">
            <li><a href="#" className="text-link-p3 text-main-heading tracking-widest">SHOP ALL</a></li>
            <li><a href="#" className="text-link-p3 text-main-heading tracking-widest">COFFE</a></li>
            <li><a href="#" className="text-link-p3 text-main-heading tracking-widest">COLDE BREW</a></li>
            <li><a href="#" className="text-link-p3 text-main-heading tracking-widest">DECAF</a></li>
            <li><a href="#" className="text-link-p3 text-main-heading tracking-widest">MERCHANDISE</a></li>
          </ul>
        </div>

        <div className="flex  items-center justify-center gap-4">
          <p className="text-link-p3 text-main-heading tracking-widest cursor-pointer">SORT</p>
          <MdOutlineKeyboardArrowDown className="cursor-pointer" />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 ">
        <ProductTea 
          imageUrl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
          productName="Colombia Dark Roast"
          productPrice="$19.00 – $27.00"
        />
        <ProductTea 
          imageUrl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
          productName="Swiss Water Decaf"
          productPrice="$19.00 – $27.00"
        />
        <ProductTea 
          imageUrl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
          productName="French Roast"
          productPrice="$19.00 – $27.00"
        />
        <ProductTea 
          imageUrl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
          productName="Breakfast Blend"
          productPrice="$19.00 – $27.00"
        />
        <ProductTea 
          imageUrl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
          productName="Breakfast Blend"
          productPrice="$19.00 – $27.00"
        />
        <ProductTea 
          imageUrl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
          productName="Breakfast Blend"
          productPrice="$19.00 – $27.00"
        />
        <ProductTea 
          imageUrl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
          productName="Breakfast Blend"
          productPrice="$19.00 – $27.00"
        />
        <ProductTea 
          imageUrl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
          productName="Breakfast Blend"
          productPrice="$19.00 – $27.00"
        />
        <ProductTea 
          imageUrl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
          productName="Breakfast Blend"
          productPrice="$19.00 – $27.00"
        />
        <ProductTea 
          imageUrl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
          productName="Breakfast Blend"
          productPrice="$19.00 – $27.00"
        />
      </div>
    </div>
  )
}

export default Shop
