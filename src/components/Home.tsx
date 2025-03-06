import { Link } from "react-router-dom";

type Item = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  
  type productsProps = {
    products: Item[];
    search : string
    menu : string
  };
  
  const Home = ({ products, search , menu }: productsProps) => {
    return (
        <div className="grid grid-cols-4 p-5 bg-zinc-100">
            {products.filter((data:Item)=>{
              return data?.title?.toLowerCase().includes(search ? search.toLocaleLowerCase() : menu.toLocaleLowerCase() )
            }).map((data:Item)=>{
                return (
                    <Link to = '/details' state={{data:data}} >
                      <div key={data?.id} className="border-1 rounded-lg bg-gray-100 p-3 ml-3 mt-3">
                        <div className="border-b-2 rounded-lg bg-white">
                          <img  className="w-52 h-50 ml-7 mt-5 mb-3" src={data?.image} alt="product image" />
                        </div>
                          <h1 className="font-bold text-xl pt-3" >${data?.price}</h1>
                          <h1 className="text-md font-semibold  pt-3" >{data?.title}</h1>
                          <h1 className="text-sm font-semibold ">{data?.category}</h1>
                      </div>
                    </Link>
                    
                )   
            })}
        </div>
    )
  };
  
  export default Home;

  // state={{ data: data }} inside the <Link> component is used to pass data to the next page
  //you can retrieve this data using useLocation from React-Router-dom:
 // if you want to pass multiple values in the future (e.g., state={{ product: data, user: userInfo }}).