import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ToolbarService {
    constructor() {}

    strokePx: WritableSignal<number> = signal(5);
}