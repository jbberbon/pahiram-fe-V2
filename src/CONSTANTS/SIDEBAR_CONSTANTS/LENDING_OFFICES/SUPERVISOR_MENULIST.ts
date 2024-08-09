import {Users} from "lucide-react";

export const SUPERVISOR_MENULIST = [
    {
        groupLabel: "",
        menus: [
            {
                href: "/office/lending-offices/dashboard",
                label: "Dashboard",
                icon: Users,
                submenus: [],
            },
            {
                href: "/office/lending-offices/borrowing-history",
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
                href: "/office/lending-offices/manage-transactions",
                label: "Transactions",
                icon: Users,
                submenus: [],
            },
            {
                href: "/office/lending-offices/manage-inventory",
                label: "Inventory",
                icon: Users,
                submenus: [],
            },
            {
                href: "/office/lending-offices/manage-penalties",
                label: "Penalties",
                icon: Users,
                submenus: [],
            },
            {
                href: "/office/lending-offices/manage-office-accounts",
                label: "Office Accounts",
                icon: Users,
                submenus: [],
            },
        ],

    }
]