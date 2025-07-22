


const OrangeButton = ({title,onClick}) => {
  return (
     <button className="w-fit  h-10 px-8  text-h1T tracking-widest bg-#f1ece9  border-2 border-h1  hover:text-white hover:font-medium  hover:bg-h1"   onClick={onClick}>
        {title}
    </button>
  )
}

export default OrangeButton