import { ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { Observable } from 'rxjs';
import { DialogOptions } from './dialog.service';
export declare class DialogHolderComponent {
    private resolver;
    /**
     * Target element to insert dialogs
     */
    element: ViewContainerRef;
    /**
     * Array of dialogs
     * @type {Array<DialogComponent> }
     */
    dialogs: Array<DialogComponent<any, any>>;
    /**
     * Constructor
     * @param {ComponentFactoryResolver} resolver
     */
    constructor(resolver: ComponentFactoryResolver);
    /**
     * Adds dialog
     * @param {Type<DialogComponent>} component
     * @param {object?} data
     * @param {DialogOptions?} options
     * @return {Observable<*>}
     */
    addDialog<T, T1>(component: Type<DialogComponent<T, T1>>, data?: T, options?: DialogOptions): Observable<T1>;
    /**
     * Removes dialog
     * @param {DialogComponent} component
     */
    removeDialog(component: DialogComponent<any, any>): void;
    private _removeElement;
    clear(): void;
}
