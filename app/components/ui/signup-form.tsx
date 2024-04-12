"use client";

import React, {useState} from "react";
import InputField from "@/app/components/ui/input-field";
import {redirect, useRouter} from "next/navigation";
import {useAccount} from "@/app/hook/useAccount";
import axios from "axios";

interface FormData {
    username: string;
    password: string;
}

const SignUpForm = () => {
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value, type, checked} = e.target;
        setFormData({...formData, [id]: value});
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {"nickname": formData.username, "password": formData.password}

        axios.post("/api/auth/account/register", user).then(value => {
            console.log(value.data)
        });
    };
    const handleClickLogin = () => {
        router.push("/login")
    }

    return (
        <form onSubmit={handleSubmit}>
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
                    회원가입
                </button>
                <button type="button" className="w-full px-3 py-2 text-[#ffebf6] text-sm font-bold rounded-md mb-1.5"
                        onClick={handleClickLogin}>
                    로그인
                </button>
            </div>
        </form>
    );
};

export default SignUpForm;