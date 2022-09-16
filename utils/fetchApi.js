import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '56638eeeaemshc55f966e30904ebp148287jsna31a3bb84693',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })

  return data
}