import axios from "axios";
import {useQuery} from "react-query";
import {useMemo} from "react";


export const useAccount = () => {
    const {data, isLoading, error} = useQuery(['account'], async () => await LoadAccount());


    return {data, isLoading};
};

export const LoadAccount = async () => {
    let res = await axios.get("http://localhost:3000/api/auth/account");

    if (res.data !== undefined) {
        return {
            id: res.data.user
        }
    }

    return {}
}


export const GetAccount = async () => {
    let res = await axios.get("http://localhost:3000/api/auth/account/login");
    if (res.data !== undefined) {
        return {
            id: res.data.user
        }
    }
}
