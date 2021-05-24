import Axios from 'axios';

export const getDataFromServer = async (url) => {
    try {
        let result = null;
        const response = await Axios({
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
            },
            url,
        });
        if (response?.status === 200) {
            result = response.data;
        }
        return result;
    } catch (error) {
        console.warn('getDataFromServer error: ', error);
        return error;
    }
}