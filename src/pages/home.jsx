import OrangeButton from "../components/orangebutton";
import WhiteButton from "../components/white-button";
import ProductTea from "../components/productcoffe";

const HomeScreen = () => {
  return (
    <div>
      {/* hero section */}
      <section
        className="h-screen  bg-cover bg-center lg:bg-left bg-no-repeat flex items-center relative "
        style={{
          backgroundImage:
            "url('https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-hero-espresso.jpg')",
        }}
      >
        <div className="flex gap-10 lg:items-center lg:pl-12 lg:justify-center items-end ">
          <div className="hidden lg:block">
            <p className="text-gray-800 tracking-widest vertical-text">
              OUR MISSION
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-end  ">
            <p className="text-orange-400 text-sm lg:text-left text-center font-semibold tracking-widest">
              EXCEPTIONAL EQULATY
            </p>

            <p className=" text-[36px]  lg:text-[52px] text-black text-center lg:text-left font-semibold font-playfair  tracking-normal leading-10  lg:leading-15 sm:justify-end">
              It all began with amodest <br className="hidden lg:block" />{" "}
              concept: <br className="lg:hidden block" />
              Create <i>amazing</i> <br /> coffee
            </p>
            <hr className="w-10 text-orange-400 border-1  mx-auto lg:mx-0 mt-2 " />
            <p className=" leading-7 text-gray-700  lg:text-left text-center text-expiani-h mt-5 sm:p-4 ">
              Our mission is to provide sustainably sourced, hand-picked quality
              coffee. Great coffee is our passion{" "}
              <br className="hidden lg:block" /> and we want to share it with
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Featured product section */}
      <section className="flex flex-col gap-2 items-center justify-center py-20  relative ">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-h1">FEATURE PRODUCT</h1>
          <p className="text-main-heading text-mainheading font-semibold font-playfair ">
            OUR COFFE
          </p>

          {/* <hr> line  */}
          <div className="h-12 border-l-2 text-h1"></div>

          <div className="w-full ">
            <div className="max-w-[1200px] mx-auto">
              <div className="relative w-full h-[600px] mt-8  flex items-center  ">
                <img
                  src="	https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2021/02/boxes.jpg"
                  alt=""
                  className="w-full h-full object-cover  absolute inset-0"
                />

                <div className="relative flex flex-col px-25 z-10 gap-7 sm:justify-end ">
                  <p className="text-white text-mainheading font-semibold font-playfair lg:items-start lg:text-left text-center leading-[1.2]">
                    Trio Blend
                    <span className="hidden sm:inline">
                      <br />
                    </span>
                    Box
                  </p>
                  <h1 className="text-white font-medium">
                    This box contains all three of our <br /> delicious,
                    ethically sourced coffee <br /> blends.
                  </h1>
                  <WhiteButton title=" OPEN THE BOX" />
                </div>
              </div>

              <div className="  mt-8 flex lg:flex-row  gap-15 flex-col  ">
                <ProductTea
                  imageUrl="	https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-02-600x839.jpg"
                  productName="Colombia Dark Roast"
                  productPrice="$19.00-$27.00"
                />

                <ProductTea
                  imageUrl="	https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-02-600x839.jpg"
                  productName="Colombia Dark Roast"
                  productPrice="$19.00-$27.00"
                />

                <ProductTea
                  imageUrl="	https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-03-600x839.jpg"
                  productName="Colombia Dark Roast"
                  productPrice="$19.00-$27.00"
                />
              </div>
            </div>
          </div>
          <OrangeButton title="SHOP ALL COFFEE" />
        </div>
      </section>

      {/* LEARNMORE section */}

      <section className="relative h-screen flex  justify-items-center bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 flex justify-start items-center">
          <img
            src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/Cold-Brew.jpg"
            alt="Natural Cold Brew Coffee Bottle"
            className="h-full object-cover w-1/2 md:w-auto max-w-none lg:max-w-full"
            style={{ objectPosition: "left" }}
          />
        </div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:justify-end gap-8 md:gap-16 px-4 md:px-8 lg:px-12">
          <div className="hidden lg:block lg:w-1/2 gap-4 "></div>

          <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-8 lg:w-1/2 lg:px-5">
            <p className="text-h1 text-xs md:text-sm uppercase tracking-widest font-medium">
              MORE THAN JUST COLD COFFEE
            </p>
            <h1 className="font-playfair text-main-heading text-[40px] md:text-[60px] lg:text-mainheading leading-tight md:leading-none font-semibold">
              Natural <i>Cold Brew</i> Coffee
            </h1>
            <hr className="w-12 md:w-16 border-2 text-h1 mx-auto lg:mx-0 lg:mr-0" />

            <p className="text-expiani  text-h1T md:text-base leading-relaxed ">
              Refresh your mind with organic, sustainably-sourced cold brew
              coffee, delivered straight to <br className="hidden lg:block" />{" "}
              your door.
            </p>
            <div className="mt-4">
              <OrangeButton title="LEARN MORE" className="bg-gray-400" />
            </div>
          </div>
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 transform rotate-270 origin-right right-0 mr-4 md:mr-8 lg:mr-5 items-center">
            <p className="text-expiani text-h1T uppercase tracking-widest  whitespace-nowrap verticle-text">
              TIME TO CHILL
            </p>
          </div>
        </div>
      </section>

      {/* image video section */}
      <section className=" flex lg:flex-row flex-col items-center flex-wrap justify-center gap-6 sm:gap-8 p-4  lg:p-20">
        <ImageDetail
          imgurl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-01.jpg"
          topic="interview"
          maintopic="Meeting a farmers 
             of Peru"
          name="READ MORE"
        />

        <ImageDetail
          imgurl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-beans-square.jpg"
          topic="become a partner"
          maintopic="Explore Wholesale"
          name="SEND INQUIRY"
        />

        <ImageDetail
          imgurl="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-latte-art-1.jpg"
          topic="learn"
          maintopic="Barista Training"
          name="SING UP"
        />
      </section>

      {/* Free shipping section */}
      <section
        className="h-screen  bg-cover bg-center lg:bg-left bg-no-repeat flex items-center relative "
        style={{
          backgroundImage:
            "url('https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-hero-coffee-cup.jpg')",
        }}
      >
        <div className="flex gap-10 lg:items-center lg:pl-12 lg:justify-center items-end ">
          <div className="hidden lg:block">
            <p className="text-gray-800 tracking-widest vertical-text">
              HOME DILIVERY
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-end  ">
            <p className="text-h1 text-sm lg:text-left text-center font-semibold tracking-widest">
              Free shipping on orders of{" "}
              <span className="font-Raleway">$35+</span>
            </p>

            <p className=" text-[36px]  lg:text-[52px] text-black text-center lg:text-left font-semibold font-playfair  tracking-normal  leading-15">
              Quality coffee <br /> <i>delivered to your</i> <br /> door
            </p>
            <hr className="w-10 text-h1 border-1  mx-auto lg:mx-0 mt-2 " />
            <p className=" leading-7 text-gray-700  lg:text-left text-center text-expiani-h mt-5 ">
              Try a bright spectrum of aromas, essences and acidities{" "}
              <br className="hidden lg:block" />
              cultivated into existence by the committed expertise of our{" "}
              <br className="hidden lg:block" /> producing partners around the
              world. you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;



// image detail components
const ImageDetail = ({ imgurl, topic, maintopic, name }) => {
  return (
    <div className="relative w-[330px] md:w-[380px] lg:w-[440px] h-[650px] overflow-hidden ">
      <img
        src={imgurl}
        alt={maintopic || topic}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="px-6 py-6 absolute inset-0 flex flex-col items-start justify-end gap-3 bg-gradient-to-t from-black/70 to-transparent">
        <p className="text-white text-base uppercase tracking-widest">
          {topic}
        </p>

        <h1 className="text-white text-3xl font-bold leading-tight font-playfair mb-4">
          {maintopic}
        </h1>

        <WhiteButton title={name} />
      </div>
    </div>
  );
};
