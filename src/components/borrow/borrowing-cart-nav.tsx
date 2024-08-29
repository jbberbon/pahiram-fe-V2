import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {SelectView} from "@/components/panel/presentational/select-view";
import {ShoppingCart} from "lucide-react";

export default function BorrowingCartNav() {
    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <div className="p-2">
                        <ShoppingCart/>
                    </div>
                </TooltipTrigger>
                <TooltipContent sideOffset={10} side="bottom">Borrowing Cart</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}