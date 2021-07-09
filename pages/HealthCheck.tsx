import { useEffect, useState } from "react";
import { INSTANCE } from "../services/Axios/AxiosApi"


export default function HealthCheck(){

    const [health, setHealth] = useState();

    useEffect(() => {
        INSTANCE.post('healthCheck')
        .then(result => setHealth(result.data.value))
    }, [])

    

    return <h1>{health}</h1>
}