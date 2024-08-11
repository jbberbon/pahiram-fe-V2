import {Users} from "lucide-react";

export const SUPERVISOR_MENULIST = [
    {
        groupLabel: "",
        menus: [
            {
                href: "/office/finance-accounting-office/dashboard",
                label: "Dashboard",
                icon: Users,
                submenus: [],
            },
        ],

    },
    {
        groupLabel: "Management",
        menus: [
            {
                href: "/office/finance-accounting-office/manage-office-accounts",
                label: "Office Accounts",
                icon: Users,
                submenus: [],
            },
            {
                href: "/office/finance-accounting-office/manage-penalties",
                label: "Penalties",
                icon: Users,
                submenus: [],
            },
        ],


    }
]