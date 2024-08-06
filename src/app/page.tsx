import LoginForm from "@/components/login-form";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
    return (
        <div className="flex flex-col h-screen">
            <a href='/auth/login'>Login</a>
        </div>
    );
}