"use client"
import React, {useState} from "react";
import {ToggleGroup, ToggleGroupItem} from "@/app/components/ui/toggle-group";

export default function Home() {
    const [job, setJob] = useState<JobType>("undefined");

    return (
        <main className="flex flex-col justify-center items-center px-4 py-10">
            <div
                className="bg-[#1e1c1c] shadow-custom rounded-lg overflow-hidden w-full max-w-[450px] min-h-[380px] my-8 p-4">
                <div className="p-4">
                    <div className="flex justify-center">

                    </div>
                    <div className="my-5">
                        <h2 className="text-center text-[20px] font-bold text-white mb-1">당신의 직업은 무엇입니까?</h2>
                        <p className="text-center text-[11px] mt-1 text-[#878a99]">Motion의 다양한 유저 경험을 위해 정보를 취합하고
                            있습니다.</p>
                    </div>
                </div>

                <ToggleGroup type="single" onValueChange={(type) => {
                    setJob(type as JobType)
                }}>
                    <ToggleGroupItem value="Student">학생</ToggleGroupItem>
                    <ToggleGroupItem value="Teacher">선생님</ToggleGroupItem>
                    <ToggleGroupItem value="None">백수</ToggleGroupItem>
                    <ToggleGroupItem value="Programmer">프로그래머</ToggleGroupItem>
                    <ToggleGroupItem value="Graphic_Designer">디자이너</ToggleGroupItem>
                </ToggleGroup>

                <button type="submit"
                        className="w-full px-3 py-2 text-[#ffebf6] text-sm font-bold bg-[#FFA301] hover:bg-[#e69500] rounded-md mb-1.5">
                    다음으로
                </button>
            </div>
        </main>
    );
}