import {Input} from "@/app/components/ui/input";
import {Button} from "@/app/components/ui/button";

export default function Home({params: {uuid}}: { params: { uuid: string } }) {


    return (
        <div className="grid place-items-center w-screen">
            <div className="space-y-8">
                <div className="flex justify-between w-[1200px] space-x-10">
                    <div className="w-[500px]">
                        <Input placeholder="페이지 검색"></Input>
                    </div>
                    <Button variant={"ghost"}>페이지 생성</Button>
                </div>
                <div>
                    Untitled
                </div>
            </div>
        </div>
    );
}