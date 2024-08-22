"use client";

import {usePathname} from "next/navigation";

export default function getBaseUrlPath(){
    const pathName = usePathname();
    return ("/" + pathName.split("/")[1]);
}