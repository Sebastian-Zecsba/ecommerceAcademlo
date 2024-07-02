import axios from "axios"
import { useState } from "react"

const useFetch = url => {

    const [apiInfo, setApiInfo] = useState()

    const getApi = () => {
        axios
            .get(url)
            .then(res => setApiInfo(res.data))
            .catch(err => console.error(err))
    }
    return [apiInfo, getApi]
}

export default useFetch