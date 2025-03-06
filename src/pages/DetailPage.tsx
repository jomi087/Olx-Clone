import { useLocation } from "react-router-dom"
import Footer from "../components/Footer"
const DetailPage = () => {
    const location = useLocation()
    console.log(location)
  return (
    <>
        <h1 className="ml-15 mt-7 text-3xl font-serif underline ">{location?.state?.data?.title.toUpperCase()}</h1>

        <div className="grid grid-cols-2 p-4 ">
            <img className="h-[90%] w-[90%]" src={location?.state?.data?.image} alt="product img"/>
            <div>
                <div className="mt-24 ml-15">
                    <h1 className="font-bold text-3xl">${location?.state?.data?.price}</h1>
                    <h1 className="mt-5"><span className="font-semibold">Category</span> : {location?.state?.data?.category}</h1>
                    <h1 className="mt-5"><span className="font-semibold ">Description</span> : {location?.state?.data?.description}{location?.state?.data?.description}</h1>
                    <h1 className="mt-5"><span className="font-semibold">Rating</span> : {location?.state?.data?.rating?.rate}</h1>
                </div>
            </div>
            

        </div>
        <Footer/>
    </>
  )
}

export default DetailPage