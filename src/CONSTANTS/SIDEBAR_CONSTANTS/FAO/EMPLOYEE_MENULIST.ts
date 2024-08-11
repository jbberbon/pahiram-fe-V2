import {Users} from "lucide-react";

export const EMPLOYEE_MENULIST = [
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

    },{
        groupLabel: "Management",
        menus: [

            {
                href: "/office/finance-accounting-office/manage-penalties",
                label: "Penalties",
                icon: Users,
                submenus: [],
            },

        ],

    },
]