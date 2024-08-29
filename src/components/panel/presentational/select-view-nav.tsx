import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {SelectView} from "@/components/panel/presentational/select-view";

export default function SelectViewNav() {
    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <div>
                        <SelectView/>
                    </div>
                </TooltipTrigger>
                <TooltipContent sideOffset={10} side="bottom">Select a view</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}