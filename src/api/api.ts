import axios from "axios";


const URL = 'dapplets';

const api = axios.create({
    baseURL: 'https://dapplets-hiring-api.herokuapp.com/api/v1/',
})

export const getDapplets = async ( start: number, direction: string,search?: string) => {
    const response = await api.get(URL, {
        params: {
            limit: 20,
            start: start,
            ...(search && {
                filter: JSON.stringify([
                    {
                        property: 'title',
                        value: `${search}`,
                    }
                ])
            }),
            sort: JSON.stringify([{
                property: 'title',
                direction: `${direction}`
            }])
        }
    })

    return response.data
}


