import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface ViewState {
    views: string[];
    selectedView: string;
    setSelectedView: (view: string) => void;
}

export const useViewStore = create<ViewState>()(
    persist(
        (set) => ({
            views: ["Borrow", "Admin", "Office"],
            selectedView: "Borrow",
            setSelectedView: (view: string) => {
                set({selectedView: view});
            },
        }),
        {
            name: 'view-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);