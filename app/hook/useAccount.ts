import axios from "axios";
import {useQuery} from "react-query";

export const useAccount = () => {
    const {data, isLoading, error} = useQuery(['account'], async () => await LoadAccount());

    return {data, isLoading};
};

export const LoadAccount = async () => {
    let res = await axios.get("http://localhost:3000/api/auth/account/login");

    if (res.data !== undefined) {
        return {
            nickname: res.data.user.account.nickname
        }
    }

    return {}
}