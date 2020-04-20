import Cookies from 'js-cookie';
import qs from 'qs';

const BASEAPI = 'https://my-json-server.typicode.com/gabrielcastr0/database/user'

// requisição post
const apiFetchPost = async (endpoint, body) => {

    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });

    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/entrar';
        return;
    }

    return json;
}

// requisição get
const apiFetchGet = async (endpoint, body = []) => {

    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);

    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/entrar';
        return;
    }

    return json;
}

const CShopAPI = {
    login:async (email, password) => {
        const json = await apiFetchPost(
            '/user/',
            {email, password}
        );

        return json;
    }
};

export default ()=>CShopAPI;