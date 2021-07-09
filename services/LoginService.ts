import { useState } from "react";
import { INSTANCE } from "./Axios/AxiosApi";

interface LoginProps {
    user: string,
    password: string
}

export async function DoLogin(props: LoginProps){

   let loginStatus = await INSTANCE.post('login', props).then((result) => (result.status));

    return (loginStatus === 200 ? true : false);
}