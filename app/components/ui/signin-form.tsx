"use client";

import React, {useState} from "react";
import InputField from "@/app/components/ui/input-field";
import {useRouter} from "next/navigation";
import {Alert, AlertDescription, AlertTitle} from "@/app/components/ui/alert";
import {ExclamationTriangleIcon} from "@radix-ui/react-icons";
import axios from "axios";
import {LoginStatus} from "@/app/types/types";

interface FormData {
    username: string;
    password: string;
}

const SignInForm = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: ''
    });

    let router = useRouter();
    let [loginStatus, setLoginStatus] = useState<LoginStatus>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value, type, checked} = e.target;
        setFormData({...formData, [id]: value});
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {"nickname": formData.username, "password": formData.password}

        axios.post("/api/auth/account/login", user).then(value => {
            if (value.data.loginStatus === "authenticated") {
                let id = value.data.id;
                router.push(id);
            }
        });
    };

    const handleClickRegister = () => {
        router.push("/register")
    }

    return (
        <form onSubmit={handleSubmit}>

            {
                loginStatus === "unauthenticated" &&
                <Alert variant="destructive">
                    <ExclamationTriangleIcon className="h-4 w-4"/>
                    <AlertTitle>로그인 에러</AlertTitle>
                    <AlertDescription>
                        로그인 정보가 일치하지 않습니다!
                    </AlertDescription>
                </Alert>
            }
            <InputField
                id="username"
                label="아이디"
                type="text"
                placeholder="아이디를 입력해 주세요."
                value={formData.username}
                onChange={handleChange}
            />
            <InputField
                id="password"
                label="비밀번호"
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                value={formData.password}
                onChange={handleChange}
            />
            <div className="py-4">
                <button type="submit"
                        className="w-full px-3 py-2 text-[#ffebf6] text-sm font-bold bg-[#FFA301] hover:bg-[#e69500] rounded-md mb-1.5">
                    로그인
                </button>

                <button type="button" className="w-full px-3 py-2 text-[#ffebf6] text-sm font-bold rounded-md mb-1.5"
                        onClick={handleClickRegister}>
                    회원가입
                </button>
            </div>
        </form>
    );
};

export default SignInForm;