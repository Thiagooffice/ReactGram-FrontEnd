import {api, requestConfig} from '../utils/config'

//Registter an user
const register = async (data) => {
    const config = requestConfig("POST", data)

    try {
        const res = await fetch(api + "/users/register", config)
        .then((err) => res.json())
        .catch((err) => err)

        if(res){
            localStorage.setItem("user", JSON.stringify(res))
        }
    } catch (error) {
        console.log(error);
    }
}
const authService = {
    register
}
export default authService