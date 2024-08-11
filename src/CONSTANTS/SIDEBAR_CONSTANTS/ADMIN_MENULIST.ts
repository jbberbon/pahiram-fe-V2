import {Users} from "lucide-react";

export const ADMIN_MENULIST = [
    {
        groupLabel: "",
        menus: [
            {
                href: "/admin/dashboard",
                label: "Dashboard",
                icon: Users,
                submenus: [],
            },
            {
                href: "/admin/manage-accounts",
                label: "Manage Accounts",
                icon: Users,
                submenus: [],
            },
        ],
    }
]