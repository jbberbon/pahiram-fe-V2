"use client";
import {LENDING_OFFICES_ACRONYMS} from "@/CONSTANTS/OFFICES_CONSTANTS";
import {type UserState, useUserStore} from "@/hooks/useUser";

export default function OfficeParentLayout({
                                               LENDING_OFFICES,
                                               FAO,
                                               PLO
                                           }: {
    LENDING_OFFICES: React.ReactNode;
    FAO: React.ReactNode;
    PLO: React.ReactNode;
}) {
    const userData = useUserStore((state: unknown) => (state as UserState).userData);
    const userOffice = userData?.office;

    return (
        <>
            {typeof userOffice === 'string' && LENDING_OFFICES_ACRONYMS.includes(userOffice) && LENDING_OFFICES}
            {userOffice === "FAO" && FAO}
            {userOffice === "PLO" && PLO}
        </>
    );

}