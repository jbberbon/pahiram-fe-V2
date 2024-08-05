import {Users} from "lucide-react";

export const ADMIN_MENULIST = [
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
                href: "/manage-accounts",
                label: "Manage Accounts",
                icon: Users,
                submenus: [],
            },
        ],
    }
]