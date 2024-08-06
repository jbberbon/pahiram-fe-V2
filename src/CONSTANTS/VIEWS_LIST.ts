const VIEWS_LIST = {
    Borrow: {
        href: '/borrow',
        label: 'Borrow',
    },
    Admin: {
        href: '/admin',
        label: 'Admin',
    },
    Office: {
        href: '/office',
        label: 'Office',
    }
};

const VIEWS_LIST_LABELS = Object.values(VIEWS_LIST).map((view) => view.label);

const findViewsListElement = (viewHref: string) => Object.values(VIEWS_LIST).find((viewElement) => viewElement.href === viewHref);

const filterViewsList = (userData: object) => {
    let filteredViews = Object.values(VIEWS_LIST);

    if (userData) {
        if (!userData.is_admin) {
            filteredViews = filteredViews.filter(view => view.label !== "Admin");
        }
        if (!userData.department_code) {
            filteredViews = filteredViews.filter(view => view.label === "Borrow");
        }
    }

    return filteredViews;
}

export {VIEWS_LIST, VIEWS_LIST_LABELS, findViewsListElement, filterViewsList};