import LoginPage from "@/components/LoginPage";
import {ModeToggle} from "@/components/mode-toggle";

export default function AuthLoginPage() {
    return (
        <div className="flex flex-col h-screen">
            <div className="pt-9 pb-12 container h-14 flex items-center justify-end">
                <ModeToggle/>
            </div>
            <main className="mt-[-85px] flex-grow flex items-center justify-center">
                <LoginPage/>
            </main>
        </div>
    );
}