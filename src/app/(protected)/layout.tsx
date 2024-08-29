import PanelLayout from "@/components/panel/containers/panel-layout";

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