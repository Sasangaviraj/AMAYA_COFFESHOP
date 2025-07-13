// product compoent
const ProductTea = ({ imageUrl, productName, productPrice }) => {
  return (
    <div className="relative flex flex-col bg-white items-center justify-start gap-3   w-[392px] h-[650px] overflow-hidden group ">
      <div className="relative w-full h-[500px] flex items-center justify-center  ">
        <img
          src={imageUrl}
          alt={productName}
          className="  object-contain  max-h-full max-w-full"
        />
      </div>

      <h1 className="font-playfair -expiani-h">{productName}</h1>

      <p className="text-h1T">{productPrice}</p>

      <button
        className="absolute inset-x-0 
                   text-accent-orange 
                   uppercase tracking-widest text-sm font-semibold
                   opacity-0 group-hover:opacity-100
                    group-hover:text-ui
                   transition-all duration-300 ease-in-out"
        style={{ top: "calc(100% - 60px)" }}
      >
        SELECT OPTION
      </button>
    </div>
  );
};

export default ProductTea;