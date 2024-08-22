import PanelLayout from "@/components/panel/panel-layout";
import React from "react";

export default function ProtectedLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {


    return (
        <PanelLayout>
            {children}
        </PanelLayout>
    );
}