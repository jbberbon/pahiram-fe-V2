import {Users} from "lucide-react";

export const SUPERVISOR_MENULIST = [
    {
        groupLabel: "Management",
        menus: [
            {
                href: "/office/purchasing-logistics-office/manage-inventory",
                label: "Inventory",
                icon: Users,
                submenus: [],
            },
            {
                href: "/office/purchasing-logistics-office/manage-office-accounts",
                label: "Office Accounts",
                icon: Users,
                submenus: [],
            },
        ],
    }
]