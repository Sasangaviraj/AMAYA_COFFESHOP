
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocation, IoMail } from "react-icons/io5";
import OrangeButton from "../components/orangebutton";
import { useNavigate } from "react-router";

const BaristaTraning = () => {
     const navigate = useNavigate();
  return (
    <div className="bg-gray-100 w-full p-6 ">
      {/* header section */}
      <div className="bg-white py-6 px-0  mx-auto text-center justify-center mt-26 flex flex-col gap-2 w-[1380px] ">
        <h1 className="text-h1 text-h1T tracking-widest uppercase ">
          EVENT LEARN
        </h1>
        <p className="font-playfair font-semibold text-mainheading ">
          Professional Latte Art Class – Advanced Training
        </p>
        <div className="flex text-center justify-center gap-2 items-center ">
          <p className="text-link-p3">
            on<span className="uppercase"> March 4, 2024</span>
          </p>
          <IoLocation />
          <span className="uppercase text-link-p3 tracking-widest">
            los angeles
          </span>
        </div>
      </div>

      {/* post section */}
      <div className="flex gap-6 justify-center  ">
        {/* post leftside */}
        <div className="w-[966.29px] px-6 bg-white ">
          <img
            src="https://www.tastingtable.com/img/gallery/when-did-latte-art-become-the-go-to-way-to-finish-the-drink/l-intro-1673541698.jpg"
            alt="Coffee Bean Latte Art"
          />
          {/* details section */}
          <div className=" flex flex-col gap-2">
            <p className="text-imgfont-h1 text-gray-600 mt-5">
              Cup white, macchiato percolator froth turkish, crema wings at
              carajillo mazagran. Cream, cappuccino, acerbic redeye iced
              americano coffee white. To go medium espresso latte sweet redeye
              kopi-luwak steamed ristretto cortado.
            </p>
            <p className="my-5 text-footer-p1">
              To go, est ut affogato, to go crema percolator steamed whipped
              latte. Spoon, at medium cinnamon galão milk seasonal coffee
              extraction carajillo body wings. Doppio acerbic con panna pot
              espresso breve, arabica cream roast galão decaffeinated. To go
              irish shop affogato, aromatic skinny steamed foam white. Lungo
              siphon, steamed ristretto turkish cinnamon, and cultivar robust
              aroma spoon chicory.
            </p>

            <div className="flex flex-col gap-3 ">
              <div class="max-w-4xl   bg-white  mt-8 mb-8 text-gray-800">
                <h1 class="text-shop-p1  font-semibold font-playfair mb-8 leading-tight">
                  Fair trade, espresso carajillo cinnamon roast cup extra
                </h1>

                <ol class="list-none space-y-6 text-lg ">
                  <li class="relative pl-8 text-footer-p1">
                    <span class="absolute left-0 top-0 font-bold">1.</span> Blue
                    mountain doppio black. Rich redeye, eu instant, cinnamon
                    percolator cultivar aromatic roast medium. Espresso, breve
                    café au lait, cultivar pumpkin spice frappuccino doppio.
                  </li>
                  <li class="relative pl-8 text-footer-p1">
                    <span class="absolute left-0 top-0 font-bold">2.</span>{" "}
                    Black doppio and roast cream mocha. Et. dark a cup, cortado,
                    macchiato. Cream, at. acerbic redeye iced americano coffee
                    white.
                  </li>
                  <li class="relative pl-8 text-footer-p1">
                    <span class="absolute left-0 top-0 font-bold">3.</span>{" "}
                    Turkish lungo qui cappuccino kopi-luwak. Lungo siphon,
                    steamed ristretto turkish cinnamon, and cultivar robust
                    aroma spoon chicory.
                  </li>
                  <li class="relative pl-8 text-footer-p1">
                    <span class="absolute left-0 top-0 font-bold">4.</span>{" "}
                    Trifecta, organic, irish grinder foam roast cup extra.
                    Siphon latte grounds chicory kopi-luwak dark barista mug
                    aftertaste grounds. Acerbic brewed at. mug cultivar mocha
                    aftertaste shop.
                  </li>
                </ol>

                <p class="mt-8 text-lg leading-relaxed text-footer-p1">
                  Cup white, sit percolator froth turkish, crema wings at
                  carajillo mazagran. Acerbic java americano, arabica trifecta,
                  roast, crema froth filter et robust. Est. turkish french press
                  percolator{" "}
                  <span class="text-orange-600 font-semibold">
                    cream lungo milk
                  </span>{" "}
                  acerbic. Latte cup, espresso carajillo cinnamon breve
                  frappuccino. Siphon est, so mug cappuccino fair trade sweet.
                </p>
              </div>
            </div>
          </div>

          {/* points */}
          <div class=" text-gray-800">
            <div class="max-w-4xl   bg-white  mt-8 mb-8">
              <h1 class="text-shop-p1  font-semibold font-playfair mb-8 leading-tight">
                Single origin lungo milk acerbic
              </h1>

              <ul class="list-disc space-y-3 text-footer-p1 pl-4">
                <li>
                  To go, est ut{" "}
                  <span class="text-orange-600 font-semibold">affogato</span>
                </li>
                <li>to go crema percolator</li>
                <li>
                  steamed{" "}
                  <span class="text-orange-600 font-semibold">
                    whipped latte
                  </span>
                </li>
                <li>
                  medium{" "}
                  <span class="text-orange-600 font-semibold">
                    cinnamon galão milk
                  </span>
                </li>
                <li>seasonal coffee extraction</li>
                <li>
                  arabica cream{" "}
                  <span class="text-orange-600 font-semibold">roast galão</span>
                </li>
              </ul>

              <p class="mt-8 text-footer-p1 pl-4">
                Fair trade siphon crema extra, viennese qui, foam viennese
                siphon est so caramelization. Carajillo sit ut extra chicory
                aged instant crema chicory. Et. dark a cup, cortado, siphon at
                arabica flavour macchiato. Cream, at, acerbic redeye iced
                americano coffee white. To go et. steamed a café au lait, single
                origin aftertaste frappuccino blue mountain whipped.
              </p>
            </div>
          </div>

          {/* bottom section tags/icons */}
          <div className="flex flex-wrap items-center justify-between  mt-25 mb-5 ">
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-2">
                <a
                  href="#"
                  class="bg-gray-900 text-link-p3 text-white px-4 py-1 text-sm  tracking-wider font-semibold hover:bg-gray-700 transition-colors duration-200"
                >
                  #events
                </a>
                <a
                  href="#"
                  class="bg-gray-900 text-link-p3 text-white px-4 py-1 text-sm  tracking-wider font-semibold hover:bg-gray-700 transition-colors duration-200"
                >
                  #how to
                </a>
                <a
                  href="#"
                  class="bg-gray-900 text-link-p3 text-white px-4 py-1 text-sm  tracking-wider font-semibold hover:bg-gray-700 transition-colors duration-200"
                >
                  #latte art
                </a>
                <a
                  href="#"
                  class="bg-gray-900 text-link-p3 text-white px-4 py-1 text-sm  tracking-wider font-semibold hover:bg-gray-700 transition-colors duration-200"
                >
                  #learn
                </a>
              </div>
              <div className="">
                <a
                  href="#"
                  class="bg-gray-900 text-link-p3 text-white px-4 py-1 text-sm  tracking-wider font-semibold hover:bg-gray-700 transition-colors duration-200"
                >
                  #milk
                </a>
              </div>
            </div>

            {/* social icons */}
            <div className="flex items-center justify-center  gap-2">
              <div>
                <p className="text-gray-400 uppercase text-link-p3 font-bold ">
                  share
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-600 ">
                <FaFacebookF className="w-5 h-5" />
                <FaXTwitter className="w-5 h-5" />
                <FaPinterest className="w-5 h-5" />
                <IoMail className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* post rightside */}
        <div className="w-[385.71px] flex flex-col gap-2 ">
          <div className="p-6  bg-white flex flex-col gap-3 items-center justify-center my-6">
            <h1 className="text-h1T tracking-widest uppercase mt-2">
              featured post
            </h1>
            <div className="relative">
              <img
                src="https://th.bing.com/th/id/R.8612472bd20aad5624bcceebe959afbf?rik=PKG8TpBSzhALBQ&pid=ImgRaw&r=0"
                alt=""
                className="p-2"
              />
              <div className="absolute text-link-p3 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-black text-white px-4 py-1 uppercase tracking-widest">
                INTERVIEW
              </div>
            </div>
            <p className="text-expiani-h font-semibold text-center font-playfair">
              Meeting a farmer family in the mountains of Peru
            </p>
            <p className="text-link-p3">
              on<span className="uppercase"> March 4, 2024</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 px-6 py-3 bg-white">
            <EventCard
              imageUrl="https://th.bing.com/th/id/R.31f5a8c87cea43ef653a1339dcfdfe95?rik=1yvgTcEr%2f0N3Sw&pid=ImgRaw&r=0"
              labelText="EVENTS"
            />
            <EventCard
              imageUrl="https://th.bing.com/th/id/R.b7adc4ebb4a7799764e28f14a868ba6a?rik=8ol%2f9hFOMo7ZEg&pid=ImgRaw&r=0"
              labelText="interviews"
            />
            <EventCard
              imageUrl="https://tse3.mm.bing.net/th/id/OIP.fmq3Hx3NEqqdkgB6ActfbAHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              labelText="learn"
            />
            <EventCard
              imageUrl="https://thefrisky.com/wp-content/uploads/2023/01/coffee-making.jpg"
              labelText="Knowladge"
            />
            <EventCard
              imageUrl="https://cafe-proqua.com/wp-content/uploads/2022/09/Cafe-sous-toutes-ses-formes-1024x682.png"
              labelText="PARTNERS"
            />
          </div>

          <div className="flex flex-col gap-3 px-6 py-3 bg-white">
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="text-h1T tracking-widest font-semibold ">JOIN WITH US</h1>
              <p className="text-link-p3 text-center border text-gray-600 border-gray-200 p-3">
                " Sign up for our Newsletter for the latest AMAYA news, unique
                offers, and early access to our Professional Barista Course
                content. Master latte art and brewing techniques!"
              </p>
              <OrangeButton title="SING UP" onClick={() => {
                      navigate("/sign-up");
                    }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaristaTraning;

// image bg-cart component

const EventCard = ({ imageUrl, alt, labelText }) => {
  return (
    <div className="relative w-full h-[120px] max-w-sm overflow-hidden shadow-md ">
      <img src={imageUrl} alt={alt} className="w-full h-auto object-cover" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gray-900 opacity-70 text-white hover:text-h1 px-8 py-3 text-link-p3 uppercase tracking-widest font-semibold text-center cursor-pointer">
          {labelText}
        </div>
      </div>
    </div>
  );
};
