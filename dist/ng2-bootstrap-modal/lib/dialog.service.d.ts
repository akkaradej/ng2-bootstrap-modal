import { ComponentFactoryResolver, ApplicationRef, Injector, Type } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { Observable } from 'rxjs';
export interface DialogOptions {
    index?: number;
    autoCloseTimeout?: number;
    closeByClickingOutside?: boolean;
    backdropColor?: string;
}
export declare class DialogServiceConfig {
    container: HTMLElement;
}
export declare class DialogService {
    private resolver;
    private applicationRef;
    private injector;
    /**
     * Placeholder of modal dialogs
     * @type {DialogHolderComponent}
     */
    private dialogHolderComponent;
    /**
     * HTML container for dialogs
     * type {HTMLElement}
     */
    private container;
    /**
     * @param {ComponentFactoryResolver} resolver
     * @param {ApplicationRef} applicationRef
     * @param {Injector} injector
     * @param {DialogServiceConfig} config
     */
    constructor(resolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, config: DialogServiceConfig);
    /**
     * Adds dialog
     * @param {Type<DialogComponent<T, T1>>} component
     * @param {T?} data
     * @param {DialogOptions?} options
     * @return {Observable<T1>}
     */
    addDialog<T, T1>(component: Type<DialogComponent<T, T1>>, data?: T, options?: DialogOptions): Observable<T1>;
    /**
     * Hides and removes dialog from DOM
     * @param {DialogComponent} component
     */
    removeDialog(component: DialogComponent<any, any>): void;
    /**
     * Closes all dialogs
     */
    removeAll(): void;
    /**
     * Creates and add to DOM dialog holder component
     * @return {DialogHolderComponent}
     */
    private createDialogHolder;
}
