import { Api } from '../../config/api';

function parseJSON(response) {
    return response.json()
}

/**
 * Start Request
 *
 * @param {*url,*method,*data} options
 */
export function startReq(data) {
    const options = {};
    options.url = `${Api}/start/`;
    options.method = 'POST';
    options.mode = 'cors';
    options.body = JSON.stringify(data);
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8'
    }
    return fetch(options.url, options, { credentials: 'include' })
        .then(parseJSON)
        .then((res) => {
            if (res.code === 200) {
                // returned items
                localStorage.setItem('user-id', res.body.user_id)
                window.location.assign("/#/mainpage");

                return res;
            }
            else {
                console.log('error', res);
                return res;
            }
        })
        .catch(err => ({ err }))
}

/**
 * Regular Requests
 * @param {*url,*method,*data} options 
 */
export function request(options = {}) {
    const user_id = localStorage.getItem('user-id')
    const { data, url } = options
    options = { ...options }
    options.mode = 'cors'
    delete options.url
    if (data) {
        delete options.data
        options.body = JSON.stringify(data)
    }
    options.headers = {
        'user-ID': user_id,
    }
    return fetch(url, options, { credentials: 'include' })
        .then(parseJSON)
        .then((res) => {
            if (res.code === 200) {
                return res;
            }
            else {
                console.log('error', res);
                return res;
            }
        })
        .catch(err => ({ err }))
}