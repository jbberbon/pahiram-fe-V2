import {Users} from "lucide-react";

export const SUPERVISOR_MENULIST = [
    {
        groupLabel: "Management",
        menus: [
            {
                href: "/manage-inventory",
                label: "Inventory",
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