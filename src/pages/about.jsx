import OrangeButton from "../components/orangebutton";

const About = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden ma-w-4xl mx-auto  ">
        <div className="flex justify-center items-center w-full  lg:w-1/2 ">
          <div className="w-full   flex flex-col gap-6 items-start  mx-auto text-left justify-center px-40 ">
            <h1 className="text-h1T text-h1 tracking-widest uppercase">about us</h1>
            <p className="font-playfair text-[44px] tracking-wide italic">
              Dedication to Quality
            </p>
            <hr className="text-h1 w-10 border-1" />
            <p className="text-gray-500 text-expiani-h">
              Our mission is to provide sustainably sourced, hand-picked,
              micro-roasted quality coffee. Great coffee is our passion and we
              want to share it with you.
            </p>
            <p className="text-gray-500 text-expiani-h">
              We strive to form profound partnerships with farmers from all over
              the world to create perspective together and form healthy working
              relationships built on trust and respect.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative  ">
          <video
            className="w-full h-[100vh] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2021/02/amaya-video-1-xs.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
            <p className="font-playfair text-2xl md:text-3xl lg:text-4xl italic leading-tight">
              Everything we do is a matter of <br /> heart, body and soul.
            </p>
          </div>
        </div>
      </section>

      {/* phylosopy section */}
      <section className="py-20 px-4 flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-4">
        <p className="text-h1 text-sm md:text-base tracking-widest uppercase mb-4">
          OUR PHILOSOPHY
        </p>
        <h2 className="font-playfair text-[38px] md:text-[52px] tracking-tight leading-tight italic text-gray-800 mb-8">
          Coffee is our <span className="font-bold">craft</span>, our <br />{" "}
          {/* <--- Added <br /> here */}
          <span className="font-bold">ritual</span>, our{" "}
          <span className="font-bold">passion</span>.
        </h2>
        <hr className="text-h1 h-0.5 w-16  mb-8 rotate-90 border-1" />
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
          Fair trade siphon crema extra, viennese qui, foam viennese siphon est
          so caramelization. Carajillo sit ut extra chicory aged instant crema
          chicory. Et dark a cup, cortado. Siphon at arabica flavour macchiato.
          Cream, at, acerbic redeye iced americano coffee white. To go et,
          steamed a café au lait. single origin aftertaste frappuccino blue
          mountain whipped.
        </p>
      </section>

      {/* photogrid section */}
      <section className="flex flex-col lg:flex-row w-full max-w-full mx-auto items-stretch h-[50vh] lg:h-[100vh]">
        <div className="w-full lg:w-1/2 overflow-hidden flex-grow">
          <img
            src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-01-1600x1600.jpg"
            alt="Coffee Farm"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 flex-grow">
          <div className="flex w-full flex-grow h-1/2">
            <div className="w-1/2 overflow-hidden">
              <img
                src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-beans-7-1600x1539.jpg"
                alt="Coffee Roasting Machine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 overflow-hidden">
              <img
                src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-beans-square.jpg"
                alt="Roasted Coffee Beans"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full overflow-hidden flex-grow h-1/2">
            <img
              src="	https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-hero-coffeeshop.jpg"
              alt="Pour Over Coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* our story section */}
      <section className="py-20 px-4 flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-2">
        <p className="text-h1 text-sm md:text-base tracking-widest uppercase mb-4">
          our story
        </p>
        <h2 className="font-playfair text-[38px] md:text-[52px] tracking-tight leading-tight italic text-gray-800 mb-8">
          Everything We Do is a matter of{" "}
          <span className="font-bold">heart</span>, <br />{" "}
          {/* <--- Added <br /> here */}
          <span className="font-bold">body </span>, and{" "}
          <span className="font-bold">soul</span>.
        </h2>
        <hr className="text-h1 h-0.5 w-16  mb-8 rotate-90 border-1" />
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
          It all began with a modest concept: Create exceptional coffee. Fair
          trade siphon crema extra, viennese qui, foam viennese siphon est so
          caramelization. Carajillo sit ut extra chicory aged instant crema
          chicory. Et, dark a cup, cortado, siphon at arabica flavour macchiato.
          Cream, at, acerbic redeye iced americano coffee white. To go et,
          steamed a café au lait, single origin aftertaste frappuccino blue
          mountain whipped.
        </p>
      </section>

      {/* mission section */}
      <section className="flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden mx-w-6xl mx-auto ">
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/12/coffeebean-beans-2.jpg"
            alt=""
          />
        </div>

        <div className="w-full lg:w-1/2  flex flex-col gap-8 justify-center items-start px-10">
          <h1 className="uppercase text-h1T text-h1 tracking-widest cursor-pointer">
            our mission
          </h1>
          <p className="font-playfair text-[38px] md:text-[52px] tracking-tight leading-tight italic text-gray-800 ">
            We source coffee <span className="font-bold">from all over the world</span>  from farmers we know and
            trust
          </p>
          <hr className="w-10 text-h1 border-1" />
          <p className="text-gray-500 text-expiani-h">
            Fair trade siphon crema extra, viennese qui, foam viennese siphon
            est so caramelization. Carajillo sit ut extra chicory aged instant
            crema chicory. Et, dark a cup, cortado, siphon at arabica flavour
            macchiato. Cream, at, acerbic redeye iced americano coffee white. To
            go et, steamed a café au lait.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
