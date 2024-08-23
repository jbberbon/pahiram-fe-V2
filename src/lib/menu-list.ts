/**
 * @file Contains functions for transforming and retrieving menu items based on user role and office.
 */

"use client";

import {siteConfig} from "@/config/siteConfig";
import {LucideIcon} from "lucide-react";
import {UserState, useUserStore} from "@/hooks/useUser";
import useBaseUrlPath from "@/hooks/useBaseUrlPath";
import {findViewsListElement} from "@/CONSTANTS/VIEWS_LIST";

/**
 * Represents a submenu item.
 */
interface Submenu {
    href: string;
    label: string;
    active: boolean;
}

/**
 * Represents a menu item.
 */
interface Menu {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon;
    submenus: Submenu[];
}

/**
 * Represents a group of menu items.
 */
interface Group {
    groupLabel: string;
    menus: Menu[];
}

/**
 * Retrieves the navigation items based on the user's role.
 * @param role The user's role.
 * @returns An array of Group objects representing the navigation items.
 */
function getRoleBasedNavItems(role: string): Group[] {
    const navItems = siteConfig.navItems.find((item) => (item as any)[role]);
    return navItems ? (navItems as any)[role] : [];
}

/**
 * Retrieves the navigation items based on the user's role and office.
 * @param office The office key.
 * @param role The role key.
 * @returns An array of Group objects representing the navigation items.
 */
function getRoleBasedNavItemsOffice(office: string, role: any): Group[] {
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

/**
 * Transforms the navigation items based on the current pathname.
 * @param navItems The array of Group objects representing the navigation items.
 * @param pathname The current pathname.
 * @returns The transformed array of Group objects representing the navigation items.
 */
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

/**
 * Retrieves the menu items based on the current pathname and user role.
 * @param pathname The current pathname.
 * @returns The array of Group objects representing the menu items.
 */

export function useMenuList(pathname: string): Group[] {
    const {role, office, email} = useUserStore((state: unknown) => (state as UserState).userData);
    const officeNavItems = getRoleBasedNavItemsOffice(office?.toString(), role);

    const baseUrlPath = useBaseUrlPath();
    const viewObject = findViewsListElement(baseUrlPath);

    const [emailLocalPart, emailDomain] = email.split('@');

    if (viewObject?.label !== "Office") {
        const navItems = getRoleBasedNavItems(viewObject?.label.toUpperCase() || "");
        if (viewObject?.label === "Borrow" && emailDomain === "apc.edu.ph") {
            const endorserNavItems = getRoleBasedNavItems("ENDORSER");
            return transformNavItems(endorserNavItems, pathname);
        }
        console.log("Nav Items: ", navItems)
        return transformNavItems(navItems, pathname);
    }


    return transformNavItems(officeNavItems, pathname);
}

/**
 * Retrieves the first menu item's href based on the user's role and office.
 * If no first menu item is found, it returns the home page ("/").
 * @returns The href of the first menu item.
 */
export function useFirstMenuItem(): string {
    const {role, office} = useUserStore((state: unknown) => (state as UserState).userData);

    return getFirstMenuItemOffice(role.toString(), office?.toString());
}

/**
 * Retrieves the href of the first menu item for a given office and role.
 * @param role The user's role.
 * @param office The user's office.
 * @returns The href of the first menu item.
 */
export function getFirstMenuItemOffice(role: string, office: string): string {
    const navItems = getRoleBasedNavItemsOffice(office, role);
    if (navItems.length > 0 && navItems[0].menus.length > 0) {
        return navItems[0].menus[0].href;
    }
    return "/";
}