import {ContentLayout} from "@/components/panel/content-layout";
import Content from "@/components/common/content";
import ExploreItemsSection from "@/components/borrow/explore-items-section";
import DynamicBreadcrumbsComponent from '@/components/common/dynamic-breadcrumbs-component';

export default function Page() {
    return (
        <ContentLayout title="Borrow Items">
            <DynamicBreadcrumbsComponent
                activePage="Explore Items"
            />
            <Content>
                <ExploreItemsSection/>
            </Content>
        </ContentLayout>
    )
}