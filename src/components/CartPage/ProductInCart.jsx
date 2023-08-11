import useCartApi from "../../hooks/useCartApi"
import './styles/ProductInCart.css'

const ProductInCart = ({ prodCart }) => {

  const { deleteProductInCart } = useCartApi()

  const handleDeleteCart = () => {
    deleteProductInCart(prodCart.id)
  }

  return (
    <article className="container_cart">
      <header className="container_img">
        <img  src={prodCart.product.images[0].url} alt="" />
      </header>
      <section className="product_tex" >
        <h3 className="product_title" >{prodCart.product.title}</h3>
        <span>{prodCart.quantity}</span>
        <button className="product_bnt" onClick={handleDeleteCart}><i className='bx bx-trash'></i></button>
      </section>
      <footer >
        <span>subtotal:</span>
        <span>{prodCart.product.price * prodCart.quantity}</span>
      </footer>
    </article>
  )
}

export default ProductInCart