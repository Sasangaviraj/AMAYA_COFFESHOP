import OrangeButton from "../components/orangebutton";

const Location = () => {
  return (
    // section one
    <div className="">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden mx-w-6xl mx-auto ">
            <div className="w-full lg:w-1/2">
                <img
                    src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-coffeeshop-1-1024x1024.jpg"
                    alt=""
                />
            </div>

            <div className="w-full lg:w-1/2  flex flex-col gap-8 justify-center items-center">
                <h1 className="uppercase text-h1T text-h1 tracking-widest cursor-pointer">San Francisco</h1>
                <p className="text-shop-p1 font-semibold font-playfair ">Pier 39</p>
                <p className="text-expiani-h">PIER 39, P.O. Box 19730<br /> San Francisco,  CA 94122</p>
                <p>(123) 456-789</p>
                <OrangeButton title="MENU & DETAILS"/>
            </div>
        </div>

        {/* // section two */}

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden mx-w-6xl mx-auto ">

            <div className="w-full lg:w-1/2  flex flex-col gap-8 justify-center items-center">
                <h1 className="uppercase text-h1T text-h1 tracking-widest cursor-pointer">Newport Beach</h1>
                <p className="text-shop-p1 font-semibold font-playfair ">Lido Marina Village</p>
                <p className="text-expiani-h flex flex-col justify-center items-center">3434 Via Lido<br /> Newport Beach, CA 92663</p>
                <p>(123) 456-789</p>
                <OrangeButton title="MENU & DETAILS"/>
            </div>

            
            <div className="w-full lg:w-1/2">
                <img
                    src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffee-bean-cafe-1024x1024.jpg"
                    alt=""
                />
            </div>
        </div>

        {/* section 3 */}
         <div className="flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden mx-w-6xl mx-auto ">
            <div className="w-full lg:w-1/2">
                <img
                    src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffebean-location-3.jpg"
                    alt=""
                />
            </div>

            <div className="w-full lg:w-1/2  flex flex-col gap-8 justify-center items-center">
                <h1 className="uppercase text-h1T text-h1 tracking-widest cursor-pointer">sun city</h1>
                <p className="text-shop-p1 font-semibold font-playfair ">Burlington Road</p>
                <p className="text-expiani-h">PIER 39, P.O. Box 19730<br /> San Francisco,  CA 94122</p>
                <p>(123) 456-789</p>
                <OrangeButton title="MENU & DETAILS"/>
            </div>
        </div>



    </div>
  );
};

export default Location;
