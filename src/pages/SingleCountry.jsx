import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

function SingleCountry() {
    const {country} = useParams()
    const url = `https://restcountries.com/v3.1/name/${country}`
    const {data, isPending, error} = useFetch(url)
    const { name: { common },
    flags: {svg},
    population,
    region,
    capital} =  data
  return (
  <div>
  <img className="w-[560px] h-[401px]" src={svg} alt='' />
  </div>
  )
}

export default SingleCountry