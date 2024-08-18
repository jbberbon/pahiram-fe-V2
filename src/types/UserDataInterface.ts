export interface UserDataInterface {
  userData?: {
    apc_id: string;
    first_name: string;
    last_name: string;
    email: string;
    department_code: string | null;
    role: string;
    acc_status: string;
    is_admin: boolean;
  };
}
