import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import ProductPurchaces from "../components/PurchachesPage/ProductPurchaces"

const PurchasesPage = () => {
  
  const { getAllPurchases, purchases } = usePurchases()

  useEffect(() => {
    getAllPurchases()
  }, [])

  console.log(purchases)

  return (
    <section>
      <h2>My purchases</h2>
      <div>
        {
          purchases?.map(purch => (
            <ProductPurchaces 
              key={purch.id}
              purchase={purch}
            />
          ))
        }
      </div>
    </section>
  )
}

export default PurchasesPage