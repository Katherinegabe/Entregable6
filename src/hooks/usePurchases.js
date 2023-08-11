import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { useState } from "react"
import { getCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const usePurchases = () => {
  
  const [purchases, setpurchases] = useState()

  const dispatch = useDispatch()

  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
  
  const makePurchase = () => {
    axios.post(url, {}, getConfigToken())
      .then(res => {
        console.log(res.data)
        dispatch(getCartThunk())
      })
      .catch(err => console.log(err))
  }
  
  const getAllPurchases = () => {
    axios.get(url, getConfigToken())
    .then(res => setpurchases(res.data))
    .catch(err => console.log(err))
  }

  return { makePurchase, getAllPurchases, purchases }
}

export default usePurchases