

const WhiteButton = ({title,onClick}) => {
  return (
    <button className="w-fit  py-4 px-8 text-main-heading text-h1T tracking-widest bg-white hover:text-white hover:font-medium  hover:bg-button-blue"   onClick={onClick}>
        {title}
    </button>
  )
}

export default WhiteButton