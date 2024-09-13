export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '6ac465a144msh02270490b69b7f4p17a525jsna416f19bc624',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '6ac465a144msh02270490b69b7f4p17a525jsna416f19bc624',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
const response = await fetch(url, options);
const data = await response.json();


return data;
}