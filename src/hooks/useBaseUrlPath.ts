"use client";

import {usePathname} from "next/navigation";

export default function useBaseUrlPath(){
    const pathName = usePathname();
    return ("/" + pathName.split("/")[1]);
}