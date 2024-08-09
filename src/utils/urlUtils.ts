import {usePathname} from "next/navigation";

export class UrlUtils{
    static getBaseUrlPath(){
        const pathName = usePathname();
        return ("/" + pathName.split("/")[1]);
    }
}