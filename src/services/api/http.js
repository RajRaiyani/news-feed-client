import axios from "axios";

const makeHTTPCall = ({method,url,headers={},params=null,data=null})=>new Promise((resolve,reject)=>{
    const options = {
        method,
        url,
        params,
        data,
        headers,
        responseType : 'json',
        withCredentials : true
    }

    axios(options).then((response)=>{resolve(response.data)})
    .catch((error)=>{
        if(error.message === 'Network Error')return;
        if(!error.response) return;
        if(error.response.status === 401) return window.location.href = '/login';
        return reject(error.response.data)
    })
})

export const GET = ({url,headers,params}) => makeHTTPCall({method:'get',url,headers,params});

export const POST = ({url,headers,params,data}) => makeHTTPCall({method:'post',url,headers,params,data});

export const PUT = ({url,headers,params,data}) => makeHTTPCall({method:'put',url,headers,params,data});

export const DELETE = ({url,headers,params,data}) => makeHTTPCall({method:'delete',url,headers,params,data});


export default {
    GET,POST,PUT,DELETE
}