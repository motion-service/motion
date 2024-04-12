import {Button} from "@/app/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"
import {Input} from "@/app/components/ui/input"
import {Label} from "@/app/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/app/components/ui/tabs"


interface TabProp {
    isEmpty: boolean;
    array: Page[];
}

export function CustomTabs() {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">개인 페이지</TabsTrigger>
                <TabsTrigger value="password">공유 페이지</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader/>
                    <CardContent className="space-y-2">
                        <h1>Untitled</h1>
                    </CardContent>
                    <CardFooter/>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader/>
                    <CardContent className="space-y-2">
                        <h1>Untitled</h1>
                        <h1>Untitled</h1>
                        <h1>Untitled</h1>
                        <h1>Untitled</h1>
                    </CardContent>
                    <CardFooter/>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
