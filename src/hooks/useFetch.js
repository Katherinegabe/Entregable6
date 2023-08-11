import axios from "axios"
import { useState } from "react"

const useFetch = () => {

  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  
  const [infoApi, setinfoApi] = useState()
  
  const getApi = (path = '') => {
    const url = `${baseUrl}${path}`
    axios.get(url)
    .then(res => setinfoApi(res.data))
    .catch(err => console.log(err))
  }
  return [infoApi, getApi]
}

export default useFetch