import {Users} from "lucide-react";

export const SUPERVISOR_MENULIST = [
    {
        groupLabel: "",
        menus: [
            {
                href: "/penalty-clearance",
                label: "Penalty Clearance",
                icon: Users,
                submenus: [],
            },
        ],

    },
    {
        groupLabel: "Management",
        menus: [
            {
                href: "/office-accounts",
                label: "Office Accounts",
                icon: Users,
                submenus: [],
            },
        ],

    }
]