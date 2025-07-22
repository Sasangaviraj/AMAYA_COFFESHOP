import  Form  from "../components/form"

const WhooleSale = () => {
  return (
    <div className="grid grid-cols-1 items-start ">

      <section className="w-full h-auto relative z-0 overflow-hidden mb-12">
        <video
          className="w-full h-auto"
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
          Your browser does not support the video tag.
        </video>
      </section>

      <div className="  grid grid-cols-1  w-[587px] max-w-4xl mx-auto gap-7 ">

        <div className="grid grid-cols-1  mt-12 gap-12">
          <h1 className="text-shop-p1 text-main-heading text-semibold font-playfair">
            Become a wholesale partner
          </h1>
          <p>
            Our wholesale program is all-inclusive and custom-made to your
            specific needs.
          </p>
          <p>
           We offer free local delivery, barista training, maintenance to your coffee equipment and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 justify-start items-center gap-7 py-5">
            <h1 className="text-shop-p1 text-main-heading text-semibold font-playfair">
            Wholesale inquiry form
           </h1>

           <Form/>
        </div>

      </div>

    </div>
  );
};

export default WhooleSale;
