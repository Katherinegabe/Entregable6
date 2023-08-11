import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductPage/ProductInfo"
import SimilarProducts from "../components/ProductPage/SimilarProducts"
import SliderImgs from "../components/ProductPage/SliderImgs"

const ProductIdPage = () => {

  const { id } = useParams()

  const [ product, getSingleProduct ] = useFetch()

  useEffect(() => {
    getSingleProduct(`/products/${id}`)
  }, [id])

  return (
    <div>
      <SliderImgs 
        product={product}
      />
      <ProductInfo 
        product={product}
      />
      <SimilarProducts 
        product={product}
      />
    </div>
  )
}

export default ProductIdPage