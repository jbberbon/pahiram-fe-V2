import {ContentLayout} from "@/components/panel/content-layout";
import PlaceholderContent from "@/components/common/placeholder-content";
import BorrowItem from "@/components/borrow/borrow-item";

export default function AdminPage() {
    return (
        <ContentLayout title="Borrow Items">
            <BorrowItem/>
        </ContentLayout>
    )
}