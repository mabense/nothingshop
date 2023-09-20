import { Route } from "@angular/router";

export interface NavLink {
    name: string;
    display: string;
    action?: string;
    onClick?: Function;
}