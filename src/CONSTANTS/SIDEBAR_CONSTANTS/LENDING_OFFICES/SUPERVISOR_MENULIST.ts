import {Users} from "lucide-react";

export const SUPERVISOR_MENULIST = [
    {
        groupLabel: "",
        menus: [
            {
                href: "/dashboard",
                label: "Dashboard",
                icon: Users,
                submenus: [],
            },
            {
                href: "/borrowing-history",
                label: "Borrowing History",
                icon: Users,
                submenus: [],
            },
        ],

    },
    {
        groupLabel: "Management",
        menus: [

            {
                href: "/manage-transactions",
                label: "Transactions",
                icon: Users,
                submenus: [],
            },
            {
                href: "/manage-inventory",
                label: "Inventory",
                icon: Users,
                submenus: [],
            },
            {
                href: "/manage-penalties",
                label: "Penalties",
                icon: Users,
                submenus: [],
            },
            {
                href: "/manage-office-accounts",
                label: "Office Accounts",
                icon: Users,
                submenus: [],
            },
        ],

    }
]