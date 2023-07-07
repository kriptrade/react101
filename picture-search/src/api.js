import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID WWd-vru83eC2t1KzJ1MLCE4b5oDESXpKsBEO4SLmXmE'
        },
        params: {
            query: term,
        }
    })

    console.log(response);

    return response.data.results;
}

export default searchImages;