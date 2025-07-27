


const BlueButton = ({title,onClick}) => {
  return (
     <button className="w-fit  h-10 px-8  text-h1T tracking-widest bg-button-blue  text-h1  hover:text-white hover:font-medium  hover:bg-h1 cursor-pointer"   onClick={onClick}>
        {title}
    </button>
  )
}

export default BlueButton