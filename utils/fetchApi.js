import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async(url)=>{
    const {data} =await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c170f98788msh5e8fd40bd9f6648p17a1e5jsn2c74f7fb353c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }

    });
    return data;
}