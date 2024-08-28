import {Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {IItem} from "@/lib/interfaces";

interface ISpecificItemModalProps {
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    modalItem: IItem | undefined
}

export default function SpecificItemModal({props}: { props: ISpecificItemModalProps }) {
    const showModal = props.showModal;
    const setShowModal = props.setShowModal;
    const modalItem = props.modalItem;

    return (
        <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="sm:max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <img
                            src="/placeholder.svg"
                            alt={modalItem?.model_name}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover"
                            style={{aspectRatio: "400/300", objectFit: "cover"}}
                        />
                    </div>
                    <div>
                        <DialogTitle className="text-2xl font-bold mb-2">{modalItem?.model_name}</DialogTitle>
                        <p className="text-muted-foreground mb-4">{modalItem?.description}</p>
                        <div className="flex items-center justify-between mb-4">
                <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                        modalItem?.in_circulation !== undefined && modalItem.in_circulation > 0
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                    }`}
                >
                    {modalItem?.in_circulation !== undefined && modalItem.in_circulation > 0
                        ? `${modalItem.in_circulation} in circulation`
                        : "Unavailable"}
                </span>
                            <span className="text-sm text-muted-foreground">{modalItem?.office}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <Label htmlFor="borrowing-period-label" className="text-sm font-medium">
                                    Borrowing Period (days)
                                </Label>
                            </div>
                            <div>
                                <Label htmlFor="quantity" className="text-sm font-medium">
                                    Quantity
                                </Label>
                                <Input id="quantity" type="number" min={1} defaultValue={1} className="w-full"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <Label htmlFor="borrow-start-date" className="text-sm font-medium">
                                    Borrow Start Date
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            id="borrow-start-date"
                                            variant="outline"
                                            className="w-full justify-start text-left font-normal"
                                        >
                                            <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1"/>
                                            Select start date
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar initialFocus mode="single"/>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div>
                                <Label htmlFor="borrow-return-date" className="text-sm font-medium">
                                    Borrow Return Date
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            id="borrow-return-date"
                                            variant="outline"
                                            className="w-full justify-start text-left font-normal"
                                        >
                                            <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1"/>
                                            Select return date
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar initialFocus mode="single"/>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="mb-4">
                            <Label className="text-sm font-medium">Additional Information</Label>
                            <p className="text-muted-foreground">
                                Policies: Items must be returned in the same condition as borrowed. A late fee of $1
                                per day will be
                                charged for overdue returns. Rules: Maximum quantity per borrow is 3 items. Maximum
                                borrow period is 2
                                weeks. Condition: All items are thoroughly cleaned and sanitized before being made
                                available for
                                borrowing. Department: This item is managed by the IT department.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => setShowModal(false)}>
                                Cancel
                            </Button>
                            <Button
                                size="sm"
                                onClick={() => {
                                    setShowModal(false)
                                }}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )

}

// @ts-ignore
function CalendarDaysIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4"/>
            <path d="M16 2v4"/>
            <rect width="18" height="18" x="3" y="4" rx="2"/>
            <path d="M3 10h18"/>
            <path d="M8 14h.01"/>
            <path d="M12 14h.01"/>
            <path d="M16 14h.01"/>
            <path d="M8 18h.01"/>
            <path d="M12 18h.01"/>
            <path d="M16 18h.01"/>
        </svg>
    )
}