import { MouseEventHandler } from "react";

export interface CostomButtonProps {
    title : string;
    castomStyle ?: string;
    handleClick ?: MouseEventHandler<HTMLButtonElement>
    btnType ?: "button" | "submit";
}
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer : (manufacturer: string) => void;
}