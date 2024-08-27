import {Card, CardContent} from "@/components/ui/card";

interface IContentProps {
    children?: React.ReactNode
}


export default function Content({children}: IContentProps) {
    return (
        <Card className="rounded-lg border-none mt-6">
            <CardContent>
                <div
                    className="w-full max-w-6xl min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)] mx-auto py-8 flex flex-col md:flex-row gap-8">
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}