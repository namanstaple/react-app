import axios  from 'axios';

const PostApi = (url, postData, token) => {
    return axios({
        baseURL: BaseUrl,
        url: url,
        method: 'post',
        data: postData,
        headers: {
            'Content-Type': "application/json",
            "Authorization": token ? "Bearer " + token : ''
        },
    });
}
const GetApi = (url, postData, token) => {
    return axios({
        baseURL: BaseUrl,
        url: url,
        method: 'post',
        data: postData,
        headers: {
            'Content-Type': "application/json",
            "Authorization": token ? "Bearer " + token : ''
        },
    });
}