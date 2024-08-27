import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface IProps {
    activePage: string,
    items?: string[]
}

export default function DynamicBreadcrumbsComponent({activePage, items}: IProps) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items?.map((item) => (
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                {item}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                    </>
                ))}
                <BreadcrumbItem>
                    <BreadcrumbPage>{activePage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

    )
}
