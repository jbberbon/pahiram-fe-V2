import {Users} from "lucide-react";

export const COSUPERVISOR_MENULIST = [
    {
        groupLabel: "",
        menus: [
            {
                href: "/office/purchasing-logistics-office/dashboard",
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
                href: "/office/purchasing-logistics-office/manage-apc-inventory",
                label: "APC Inventory",
                icon: Users,
                submenus: [],
            },
            {
                href: "/office/purchasing-logistics-office/manage-purchase-orders",
                label: "Purchase Orders",
                icon: Users,
                submenus: [],
            },
            {
                href: "/office/purchasing-logistics-office/manage-item-groups",
                label: "Item Groups",
                icon: Users,
                submenus: [],
            },
            {
                href: "/office/purchasing-logistics-office/manage-suppliers",
                label: "Suppliers",
                icon: Users,
                submenus: [],
            },
        ],
    },
]