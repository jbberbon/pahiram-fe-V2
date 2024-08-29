import {Card, CardContent} from "@/components/ui/card";

interface IContentProps {
    children?: React.ReactNode
}


export default function Content({children}: IContentProps) {
    return (
        <Card className="rounded-lg border-none mt-6">
            <CardContent className="px-9 py-8">
                <div
                    className="w-full min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)] flex flex-col md:flex-row gap-8 grid-cols-1">
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}