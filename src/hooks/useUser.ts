// src/stores/userStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import GenerateAvatarName from "@/helper/generateAvatarName";
import { OfficeAcronym, RoleForOffice } from "@/CONSTANTS/OFFICES_CONSTANTS";

export type UserState = {
  userData: {
    avatarName: string;
    apc_id: string;
    first_name: string;
    last_name: string;
    full_name: string;
    email: string;
    office: OfficeAcronym;
    role: RoleForOffice<OfficeAcronym>;
    is_admin: boolean;
  };
  setUserData: (response: any) => void;
  handleSignout: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userData: {
        avatarName: "",
        apc_id: "",
        first_name: "",
        last_name: "",
        full_name: "",
        email: "",
        office: "N/A" as OfficeAcronym,
        role: "" as RoleForOffice<OfficeAcronym>,
        is_admin: false,
      },
      setUserData: (data: any) => {
        set({
          userData: {
            avatarName: GenerateAvatarName(data?.first_mame, data?.last_name),
            apc_id: data?.apc_id,
            first_name: data?.first_name,
            last_name: data?.last_name,
            full_name: [data?.first_name, data?.user?.last_name]
              .filter(Boolean)
              .join(" "),
            email: data?.email,
            office: data?.department_code as OfficeAcronym,
            role: data?.role as RoleForOffice<OfficeAcronym>,
            is_admin: data?.is_admin,
          },
        });
      },
      handleSignout: () => {
        set({
          userData: {
            avatarName: "",
            apc_id: "",
            first_name: "",
            last_name: "",
            full_name: "",
            email: "",
            office: "N/A" as OfficeAcronym,
            role: "" as RoleForOffice<OfficeAcronym>,
            is_admin: false,
          },
        });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
