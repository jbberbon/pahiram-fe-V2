// src/stores/userStore.ts
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import GenerateAvatarName from '@/helper/generateAvatarName';
import {OfficeAcronym, RoleForOffice} from '@/CONSTANTS/OFFICES_CONSTANTS';

export type UserState = {
    userData: {
        avatarName: string,
        firstName: string,
        lastName: string,
        fullName: string,
        email: string,
        office: OfficeAcronym,
        role: RoleForOffice<OfficeAcronym>,
        isAdmin: boolean,
    },
    authData: {
        isAuthenticated: boolean,
        apcisToken: string,
        pahiramToken: string,
    },
    setAuthDataAndUserData: (response: any) => void,
    handleSignout: () => void,
};

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            userData: {
                avatarName: '',
                firstName: '',
                lastName: '',
                fullName: '',
                email: '',
                office: 'N/A' as OfficeAcronym,
                role: '' as RoleForOffice<OfficeAcronym>,
                isAdmin: false,
            },
            authData: {
                isAuthenticated: false,
                apcisToken: '',
                pahiramToken: '',
            },
            setAuthDataAndUserData: (response: any) => {

                set({
                    userData: {
                        avatarName: GenerateAvatarName(
                            response?.user?.first_name,
                            response?.user?.last_name
                        ),
                        firstName: response?.user?.first_name,
                        lastName: response?.user?.last_name,
                        fullName: [response?.user?.first_name, response?.user?.last_name]
                            .filter(Boolean)
                            .join(' '),
                        email: response?.user?.email,
                        office: response?.user?.department_code as OfficeAcronym,
                        role: response?.user?.role as RoleForOffice<OfficeAcronym>,
                        isAdmin: response?.user?.is_admin,
                    },
                    authData: {
                        isAuthenticated: true,
                        apcisToken: response?.apcis_token,
                        pahiramToken: response?.pahiram_token,
                    },
                });

            },
            handleSignout: () => {
                set({
                    userData: {
                        avatarName: '',
                        firstName: '',
                        lastName: '',
                        fullName: '',
                        email: '',
                        office: 'N/A' as OfficeAcronym,
                        role: '' as RoleForOffice<OfficeAcronym>,
                        isAdmin: false,
                    },
                    authData: {
                        isAuthenticated: false,
                        apcisToken: '',
                        pahiramToken: '',
                    },
                });
            },
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);