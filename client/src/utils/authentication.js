import axios from "axios";




export const Authentication =  async () => {

    axios.defaults.headers.get['access-token'] = JSON.parse(window.localStorage.getItem('jwtToken'));

    try {
        const resAuth = await axios.get('http://localhost:3001/user/auth');

        console.log(resAuth);
        
        return resAuth 
    } catch (error) {
        console.log(error)
        /*if(error.response.status === 400)*/ window.localStorage.removeItem("jwtToken");
        
        return error 
    }
}