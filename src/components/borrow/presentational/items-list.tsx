import React from "react";
import ItemCard from "@/components/borrow/presentational/item-card";
import {IItem} from "@/lib/interfaces";

export default function ItemsList({
                                      items,
                                      setShowModal,
                                      setModalItem
                                  }: {
    items: IItem[],
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    setModalItem: React.Dispatch<React.SetStateAction<IItem | undefined>>
}) {
    return (
        items.map((item) => (
            <ItemCard key={item.id} props={{item, setShowModal, setModalItem}}/>
        ))
    )
}