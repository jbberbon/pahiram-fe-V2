"use client";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import {UserState, useUserStore} from "@/hooks/useUser";
import React from "react";

export default function ProtectedLayout({
                                            ADMIN,
                                            BORROW,
                                            OFFICE,
                                        }: {
    ADMIN: React.ReactNode;
    BORROW: React.ReactNode;
    OFFICE: React.ReactNode;
}) {
    const userData = useUserStore((state: unknown) => (state as UserState).userData);
    const userOffice = userData?.office;
    const userIsAdmin = userData?.isAdmin;


    return (
        <AdminPanelLayout>
            {/*{BORROW}*/}
            {/*/!*{userIsAdmin && ADMIN}*!/*/}
            {userOffice ? OFFICE : null}
        </AdminPanelLayout>
    );
}