"use client";

import type {UserState} from "@/hooks/useUser";
import {useUserStore} from "@/hooks/useUser";

export default function OfficeLayout({
                                            EMPLOYEE,
                                            SUPERVISOR,
                                            COSUPERVISOR
                                        }: {
    EMPLOYEE: React.ReactNode;
    SUPERVISOR: React.ReactNode;
    COSUPERVISOR: React.ReactNode;
}) {
    const userData = useUserStore((state: unknown) => (state as UserState).userData);
    const userRole = userData?.role;

    console.log("From layout: " + userRole);
    return (
        <>
            {userRole === "EMPLOYEE" && EMPLOYEE}
            {userRole === "SUPERVISOR" && SUPERVISOR}
            {userRole === "COSUPERVISOR" && COSUPERVISOR}
        </>
    );
}