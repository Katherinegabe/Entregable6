import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import { useRef, useState } from "react";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/styles/FilterPrice";
import '../components/HomePage/styles/HomePageStyles.css' 

const HomePage = () => {

  const [nameValue, setnameValue] = useState('')
  const [fromTo, setfromTo] = useState({
    from: 0,
    to: Infinity
  })

  const products = useSelector((reducer) => reducer.products);

  const inputName = useRef()

  const handleFilterName = () => {
    setnameValue(inputName.current.value)
  };

  const cbFilter = prod => {
    //Filter by name
    const inputNameLower = nameValue.toLowerCase().trim()
    const nameReal = prod.title.toLowerCase()
    const filterName = nameReal.includes(inputNameLower)
    //Filter by price
    const price = Number(prod.price)
    const filterPrice = fromTo.from <= price && price <= fromTo.to
    
    return filterName && filterPrice
  }

  console.log(products)

  return (
    <div className="home_container">
      <input
        className="home_input"
        placeholder="what are you looking for"
        value={nameValue}
        ref={inputName}
        onChange={handleFilterName}
        type="text"
      />
      <FilterCategory />
      <FilterPrice 
        setFromTo={setfromTo}
      />
      <div className="products_container" >
      { 
        products?.filter(cbFilter).length         
          ?products?.filter(cbFilter).map((prod) => (
            <CardProduct key={prod.id} product={prod} />
          ))
          : <h2>Sorry, not exist products whit that filters.</h2>
      }
      </div>
    </div>
  );
};

export default HomePage;
