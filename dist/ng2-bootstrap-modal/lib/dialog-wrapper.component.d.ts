import { ViewContainerRef, ComponentFactoryResolver, Type, EventEmitter } from '@angular/core';
import { DialogComponent } from './dialog.component';
export declare class DialogWrapperComponent {
    private resolver;
    dialogClose: EventEmitter<any>;
    /**
     * Target element to insert dialog content component
     */
    element: ViewContainerRef;
    /**
     * Link container DOM element
     */
    container: any;
    /**
     * Dialog content componet
     * @type {DialogComponent}
     */
    private content;
    /**
     * Constructor
     * @param {ComponentFactoryResolver} resolver
     * @param {DialogService} dialogService
     */
    constructor(resolver: ComponentFactoryResolver);
    /**
     * Adds content dialog component to wrapper
     * @param {Type<DialogComponent>} component
     * @return {DialogComponent}
     */
    addComponent<T, T1>(component: Type<DialogComponent<T, T1>>): DialogComponent<any, any>;
    /**
     * Registers event handler to close dialog by click on backdrop
     */
    closeByClickOutside(): void;
}
