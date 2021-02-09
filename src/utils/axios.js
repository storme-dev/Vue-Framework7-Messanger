import axios from 'axios';

export default (route, data, callback) => {
    const url = 'http://localhost:3000'

    axios.post(url+route, data).then((response) => {
        callback(response);
    }).catch((error) => {
        console.log(error);
    });
}