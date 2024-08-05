"use client";

import {siteConfig} from "@/config/siteConfig";
import {LucideIcon} from "lucide-react";
import {UserState, useUserStore} from "@/hooks/useUser";

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

function getRoleBasedNavItems(office: string, role: any): Group[] {

    const officeNavItems = siteConfig.navItems.find((item) => (item as any)[office]);
    const navItems = siteConfig.navItems.find((item) => (item as any)[role]);

    if (!officeNavItems) {
        const lendingOfficeNavItems = siteConfig.navItems.find((item) => (item as any)["LENDING_OFFICES"]);
        const lendingOfficePositionNavItems = (lendingOfficeNavItems as any)["LENDING_OFFICES"].find((item: any) => item[role]);
        return lendingOfficePositionNavItems ? (lendingOfficePositionNavItems as any)[role] : [];
    }
    if (officeNavItems) {
        const positionNavItems = (officeNavItems as any)[office].find((item: any) => item[role]);
        return positionNavItems ? (positionNavItems as any)[role] : [];
    }
    return navItems ? (navItems as any)[role] : [];
}

function transformNavItems(navItems: Group[], pathname: string): Group[] {
    return navItems.map((group) => ({
        groupLabel: group.groupLabel,
        menus: group.menus.map((menu) => ({
            ...menu,
            active: pathname.includes(menu.href),
            submenus: menu.submenus.map((submenu) => ({
                ...submenu,
                active: pathname === submenu.href,
            })),
        })),
    }));
}


export function useMenuList(pathname: string): Group[] {
    const {role, office} = useUserStore((state: unknown) => (state as UserState).userData);
    const roleBasedNavItems = getRoleBasedNavItems(office.toString(), role);
    return transformNavItems(roleBasedNavItems, pathname);
}

export function useFirstMenuItem() {
    const {role, office} = useUserStore((state: unknown) => (state as UserState).userData);

    return getFirstMenuItem(role.toString(), office.toString());
}

export function getFirstMenuItem(role: string, office: string): string {
    const navItems = getRoleBasedNavItems(office, role);
    if (navItems.length > 0 && navItems[0].menus.length > 0) {
        return navItems[0].menus[0].href;
    }
    return "/dashboard";
}