"use client"

import SignUpForm from "@/app/components/ui/signup-form";

export default function Home() {

    return (
        <div>
            <div className="bg-overlay"></div>
            <main className="flex flex-col justify-center items-center px-4 py-10">
                <div
                    className="bg-[#1e1c1c] shadow-custom rounded-lg overflow-hidden w-full max-w-[450px] min-h-[380px] my-8 p-4">
                    <div className="p-4">
                        <div className="flex justify-center">

                        </div>
                        <div className="my-5">
                            <h2 className="text-center text-[20px] font-bold text-white mb-1">Motion에 오신 것을 환영합니다</h2>
                            <p className="text-center text-[11px] mt-1 text-[#878a99]">시작하려면 계정을 생성해 주세요.</p>
                        </div>
                        <SignUpForm></SignUpForm>
                    </div>
                </div>
            </main>
        </div>
    );
}
