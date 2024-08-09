import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import React from "react";

export default function ProtectedLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {


    return (
        <AdminPanelLayout>
            {children}
        </AdminPanelLayout>
    );
}