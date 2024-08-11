// src/stores/userStore.ts
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import GenerateAvatarName from '@/helper/generateAvatarName';
import {OfficeAcronym, RoleForOffice} from '@/CONSTANTS/OFFICES_CONSTANTS';

export type UserState = {
    userData: {
        avatarName: string,
        apcId: string,
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
                apcId: '',
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
                            response?.user?.firstName,
                            response?.user?.lastName
                        ),
                        apcId: response?.user?.apcId,
                        firstName: response?.user?.firstName,
                        lastName: response?.user?.lastName,
                        fullName: [response?.user?.firstName, response?.user?.lastName]
                            .filter(Boolean)
                            .join(' '),
                        email: response?.user?.email,
                        office: response?.user?.departmentCode as OfficeAcronym,
                        role: response?.user?.role as RoleForOffice<OfficeAcronym>,
                        isAdmin: response?.user?.isAdmin,
                    },
                    authData: {
                        isAuthenticated: true,
                        apcisToken: response?.apcisToken,
                        pahiramToken: response?.pahiramToken,
                    },
                });

            },
            handleSignout: () => {
                set({
                    userData: {
                        avatarName: '',
                        apcId: '',
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