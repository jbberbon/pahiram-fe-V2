import {LucideIcon, Users} from "lucide-react";

type Submenu = {
    href: string;
    label: string;
    active: boolean;
};

type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon;
    submenus: Submenu[];
};

type Group = {
    groupLabel: string;
    menus: Menu[];
};

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
            },
            {
                href: "/borrow/manage-endorsements",
                label: "Endorsements",
                icon: Users,
                submenus: [],
            },
        ],
    }
]

export const FILTERED_BORROW_MENULIST_FOR_STUDENTS: Group[] = BORROW_MENULIST.map(group => ({
    groupLabel: group.groupLabel,
    menus: group.menus
        .filter(menu => menu.label !== "Endorsements")
        .map(menu => ({
            active: false,
            ...menu
        })) as Menu[]
}));