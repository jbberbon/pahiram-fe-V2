import {Users} from "lucide-react";

export const BORROW_MENULIST = [
    {
        groupLabel: "",
        menus: [
            {
                href: "/borrow/borrow-items",
                label: "Borrow Items",
                icon: Users,
                submenus: [],
            },
            {
                href: "/borrow/view-penalties",
                label: "Penalties",
                icon: Users,
                submenus: [],
            },
        ],
    },
    {
        groupLabel: "Management",
        menus: [
            {
                href: "/borrow/manage-requests",
                label: "Requests",
                icon: Users,
                submenus: [],
            }, {
                href: "/borrow/manage-endorsements",
                label: "Endorsements",
                icon: Users,
                submenus: [],
            },
        ],
    }
]

export const FILTERED_FOR_ENDORSER = BORROW_MENULIST.map(
    (group: any) => {
        return {
            ...group,
            menus: group.menus.filter(
                (menu: any): boolean => menu.label !== "Endorsements"
            ),
        };
    }
);