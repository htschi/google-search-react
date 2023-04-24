import Axios from 'axios'

async function search(keyword) {
  let response = await Axios.get(
    'https://project-google-search-api-demo.herokuapp.com/results',
    {
      params: {
        search: 'javascript',
      },
    }
  )
  return response.data
}

console.log(search())
