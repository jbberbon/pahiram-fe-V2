"use client";
import {useAction} from "next-safe-action/hooks";
import {logoutUserAction} from "@/core/actions/authentication";
import {UserState, useUserStore} from "@/hooks/useUser";
import {useRouter} from "next/navigation";

export default function LogoutPage() {
    const {execute, result, isExecuting} = useAction(logoutUserAction);
    const clearUserStore = useUserStore(
        (state: unknown) => (state as UserState).handleSignout
    );
    const router = useRouter();

    const handleSignout = () => {
        execute();
        if (result) {
            clearUserStore();
            router.replace("/auth");
        }
    }

    const redirectBack = () => {
        router.push("/auth/login")
    }

    return (
        <>
            {isExecuting ? <p>Logging out...</p> : (
                <div>
                    <h1>Are you sure you want to log out?</h1>
                    <button onClick={handleSignout}>Yes</button>
                    <button onClick={redirectBack}>No</button>
                </div>
            )}
        </>
    )
}