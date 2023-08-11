import './styles/ProductPurchaces.css'

const ProductPurchaces = ({ purchase }) => {


  return (
    <article className='purchases_container'>
      <header>
        <img className='purchases_img' src={purchase.product.images[0].url} alt="" />
      </header>
      <h3>{purchase.product.title}</h3>
      <div>{purchase.quantity}</div>
      <div>{purchase.quantity * purchase.product.price}</div>
    </article>
  )
}

export default ProductPurchaces