"use client";

import {siteConfig} from "@/siteConfig";
import {LucideIcon} from "lucide-react";
import {UserState, useUserStore} from "@/hooks/useUser";
import {UrlUtils} from "@/utils/urlUtils";
import {findViewsListElement} from "@/CONSTANTS/VIEWS_LIST";
import {FILTERED_BORROW_MENULIST_FOR_STUDENTS} from "@/CONSTANTS/SIDEBAR_CONSTANTS/BORROW_MENULIST";

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

function getRoleBasedNavItems(key: string): Group[] {
    const navItems = siteConfig.navItems.find((item) => (item as any)[key]);
    return navItems ? (navItems as any)[key] : [];
}

function getRoleBasedNavItemsOffice(key: string, subKey: any): Group[] {
    const officeNavItems = siteConfig.navItems.find((item) => (item as any)[key]);
    const navItems = siteConfig.navItems.find((item) => (item as any)[subKey]);

    if (!officeNavItems) {
        const lendingOfficeNavItems = siteConfig.navItems.find((item) => (item as any)["LENDING_OFFICES"]);
        const lendingOfficePositionNavItems = (lendingOfficeNavItems as any)["LENDING_OFFICES"].find((item: any) => item[subKey]);
        return lendingOfficePositionNavItems ? (lendingOfficePositionNavItems as any)[subKey] : [];
    }
    if (officeNavItems) {
        const positionNavItems = (officeNavItems as any)[key].find((item: any) => item[subKey]);
        return positionNavItems ? (positionNavItems as any)[subKey] : [];
    }
    return navItems ? (navItems as any)[subKey] : [];
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
    const {role, office, email} = useUserStore((state: unknown) => (state as UserState).userData);
    const officeNavItems = getRoleBasedNavItemsOffice(office?.toString(), role);

    const baseUrlPath = UrlUtils.getBaseUrlPath();
    const viewObject = findViewsListElement(baseUrlPath);

    const [emailLocalPart, emailDomain] = email.split('@');

    console.log("Email local part: ", emailLocalPart);
    console.log("Email domain: ", emailDomain);
    console.log(" View Object: ", viewObject)

    if (viewObject?.label !== "Office") {
        const navItems = getRoleBasedNavItems(viewObject?.label.toUpperCase() || "");
        if (viewObject?.label === "Borrow" && emailDomain === "student.apc.edu.ph") {
            const studentNavItems: Group[] = FILTERED_BORROW_MENULIST_FOR_STUDENTS;
            console.log("Student menu list: ", studentNavItems);
            return transformNavItems(studentNavItems, pathname);
        }
        console.log("Nav Items: ", navItems)
        return transformNavItems(navItems, pathname);
    }


    return transformNavItems(officeNavItems, pathname);
}

export function useFirstMenuItem() {
    const {role, office} = useUserStore((state: unknown) => (state as UserState).userData);

    return getFirstMenuItemOffice(role.toString(), office?.toString());
}

export function getFirstMenuItemOffice(role: string, office: string): string {
    const navItems = getRoleBasedNavItemsOffice(office, role);
    if (navItems.length > 0 && navItems[0].menus.length > 0) {
        return navItems[0].menus[0].href;
    }
    return "/";
}