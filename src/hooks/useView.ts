import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {VIEWS_LIST_LABELS} from "@/CONSTANTS/VIEWS_LIST";

interface ViewState {
    views: any;
    selectedView: string;
    setSelectedView: (view: string) => void;
}

export const useViewStore = create<ViewState>()(
    persist(
        (set) => ({
            views: [VIEWS_LIST_LABELS],
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