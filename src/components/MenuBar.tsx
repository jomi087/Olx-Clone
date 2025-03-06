type menuProps = {
  setMenu : (value: string) => void; 
};


const MenuBar = ({setMenu}:menuProps) => {
  return (
    <div className="flex justify-between shadow-sm h-12 p-3 px-56" >

      <div onClick={()=>setMenu("mens")} className="">Mens Clothing</div>
      <div onClick={()=>setMenu("inch")}>Smart-Phones/Tv</div>
      <div onClick={()=>setMenu("women")}>Womens Clothing</div>
      <div onClick={()=>setMenu("Scooter")}>Scooter</div>
      <div onClick={()=>setMenu("gold")}>Jewlery</div>
      <div onClick={()=>setMenu("TB")}>Accessories</div>


    </div>
  )
}

export default MenuBar

