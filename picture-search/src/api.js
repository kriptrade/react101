import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplah.com/search/photos', {
        headers: {
            Authorization: 'Client-ID WWd-vru83eC2t1KzJ1MLCE4b5oDESXpKsBEO4SLmXmE'
        },
        params: {
            query: 'cars'
        }
    })
}