export interface IGetItemsPaginationApiResponse {
    "status": boolean,
    "data": {
        items: IItem[],
        "current_page": number,
        "last_page": number,
        "next_page_url": string,
        "path": string,
        "per_page": number,
        "prev_page_url": string,
        "to": string,
        "total": number
    },
    "method": string
}

export interface IItem {
    "id": string,
    "image": string,
    "apc_item_id": string,
    "model_name": string,
    // TODO: Add these attributes in the backend
    "category": string,
    "in_circulation": number,
    "availability": string,
    "description": string,
    "status": string,
    "purchase_order_id": string,
    "office": string,
    "designated_to": string,
    "unit_cost": string,
    "warranty_expiration": string
}

export interface IAuthCookie {
    "user": {
        "apc_id": string,
        "first_name": string,
        "last_name": string,
        "email": string,
        "role": string,
        "acc_status": string,
        "department": string
    },
    "pahiram_token": string,
    "apcis_token": string,
    "expires_at": string,
    "isAuthenticated": string
}

export interface ILoginInput {
    email: string;
    password: string;
    remember: boolean | undefined;
}

export interface ILoginApiResponse {
    "status": boolean,
    "data": {
        "user": {
            "apc_id": string,
            "first_name": string,
            "last_name": string,
            "email": string,
            "course": string,
            "department": string | null,
            "role": string,
            "acc_status": string,
            "is_admin": boolean
        },
        "pahiram_token": string,
        "apcis_token": string
    },
    "method": string
}

export interface ILoginOutput {
    success: boolean;
    data?: ILoginApiResponse["data"];
    message: string;
    errors?: { [key: string]: string };
}

export interface IUserFromCookie {
    apc_id: string;
    first_name: string;
    last_name: string;
    email: string;
    department_code: string | null;
    role: string;
    acc_status: string;
    is_admin: boolean;
}

