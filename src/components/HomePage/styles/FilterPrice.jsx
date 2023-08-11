import { useForm } from "react-hook-form"
import './StyleFilterPrice/FilterPrice.css'

const FilterPrice = ({ setFromTo }) => {

  const { register, handleSubmit } = useForm()

  const submit = data => {
    const from = Number(data.from.trim())
    const to = +data.to.trim()
    const obj = {
      from: from || 0,
      to: to || Infinity
    }
    setFromTo(obj)
  }

  return (
    <article>
      <h3>Price</h3>
      <hr />
      <form onSubmit={handleSubmit(submit)} >
        <div>
          <label htmlFor="from">From</label>
          <input className="filter_input-from" {...register('from')} type="number" id="from" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input className="filter_input-to" {...register('to')} type="number" id="to" />
        </div>
        <button className="filter_price_btn" >Filter Price</button>
      </form>
    </article>
  )
}

export default FilterPrice