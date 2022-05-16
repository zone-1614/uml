import axios from "axios";
import qs from "qs";

const user = {
    login(form) {
        return axios.post("user/login", qs.stringify(form));
    },
    register(form) {
        return axios.post("user/register", qs.stringify(form));
    },
};

export default user;
