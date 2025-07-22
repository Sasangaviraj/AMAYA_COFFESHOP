import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Form = () => {
  return (
    <form className="gap-7 flex flex-col w-full  ">
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="company"
          className="text-h1T font-semibold tracking-widest uppercase text-gray-800"
        >
          Company<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="COMPANY"
          placeholder=" "
          className="font-playfair text-h1T border border-gray-400 outline-none bg-white py-3 px-2 w-full"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="company"
          className="text-h1T font-semibold tracking-widest uppercase text-gray-800"
        >
          Contact Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="COMPANY"
          placeholder=" "
          className="font-playfair text-h1T border border-gray-400 outline-none bg-white py-3 px-2 w-full"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="company"
          className="text-h1T font-semibold tracking-widest uppercase text-gray-800"
        >
          Your Email<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="COMPANY"
          placeholder=" "
          className="font-playfair text-h1T border border-gray-400 outline-none bg-white py-3 px-2 w-full"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="company"
          className="text-h1T font-semibold tracking-widest uppercase text-gray-800"
        >
          Phone<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="COMPANY"
          placeholder=" "
          className="font-playfair text-h1T border border-gray-400 outline-none bg-white py-3 px-2 w-full"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="businessType"
          className="text-h1T font-semibold tracking-widest uppercase text-gray-800"
        >
          Business Type<span className="text-red-500">*</span>
        </label>

        <div className="relative w-full ">
          <select
            id="businessType"
            name="businessType"
            className=" text-h1T border border-gray-400 outline-none bg-white py-3 px-2 pr-10 w-full appearance-none  "
          >
            <option value="">SELECT TYPE</option>
            <option value="Cafe">Cafe</option> clas
            <option value="Restaurant">Restaurant</option>
            <option value="Hotel">Hotel</option>
            <option value="Office">Office</option>
          </select>

          <MdOutlineKeyboardArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="company"
          className="text-h1T font-semibold tracking-widest uppercase text-gray-800"
        >
          Business Type<span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder=""
          className=" text-h1T border border-gray-400 outline-none bg-white py-3 px-4 resize-none w-full"
        ></textarea>
      </div>

      <input type="button" value="SUBMIT" className="bg-button-blue text-white hover:text-h1 py-3 cursor-pointer w-1/3 font-semibold text-h1T tracking-widest" />
    </form>
  );
};

export default Form;
