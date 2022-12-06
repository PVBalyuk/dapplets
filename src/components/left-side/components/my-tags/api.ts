import axios from 'axios'
import { ITagDataDto } from './api-models';

export const getTags = async(): Promise<ITagDataDto> => {
    const response = await axios.get('https://dapplets-hiring-api.herokuapp.com/api/v1/tags');

    return response.data
}