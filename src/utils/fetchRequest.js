import { baseUrl } from "@/config/api_endpoints"

export const fetchRequest=(url,...agrs)=>{


    return fetch(baseUrl+url, ...agrs)
}

