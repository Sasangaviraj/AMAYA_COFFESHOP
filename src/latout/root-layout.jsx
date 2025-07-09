import { Outlet } from "react-router"
import Header from "./header"
import Footer from "./FOOTER.JSX"


const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer />
    </>
  )
}

export default RootLayout