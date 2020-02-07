import { __decorate, __param } from 'tslib';
import { EventEmitter, ReflectiveInjector, ComponentFactoryResolver, Output, ViewChild, ViewContainerRef, Component, ApplicationRef, Injector, Optional, ɵɵdefineInjectable, ɵɵinject, INJECTOR, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

let DialogWrapperComponent = class DialogWrapperComponent {
    /**
     * Constructor
     * @param {ComponentFactoryResolver} resolver
     * @param {DialogService} dialogService
     */
    constructor(resolver) {
        this.resolver = resolver;
        this.dialogClose = new EventEmitter();
    }
    /**
     * Adds content dialog component to wrapper
     * @param {Type<DialogComponent>} component
     * @return {DialogComponent}
     */
    addComponent(component) {
        const factory = this.resolver.resolveComponentFactory(component);
        const injector = ReflectiveInjector.fromResolvedProviders([], this.element.injector);
        const componentRef = factory.create(injector);
        this.element.insert(componentRef.hostView);
        this.content = componentRef.instance;
        this.content.wrapper = this;
        return this.content;
    }
    /**
     * Registers event handler to close dialog by click on backdrop
     */
    closeByClickOutside() {
        const containerEl = this.container.nativeElement;
        containerEl.querySelector('.modal-content').addEventListener('click', (event) => {
            event.stopPropagation();
        });
        containerEl.addEventListener('click', () => {
            this.dialogClose.emit();
        }, false);
    }
};
DialogWrapperComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
__decorate([
    Output()
], DialogWrapperComponent.prototype, "dialogClose", void 0);
__decorate([
    ViewChild('element', { read: ViewContainerRef })
], DialogWrapperComponent.prototype, "element", void 0);
__decorate([
    ViewChild('container')
], DialogWrapperComponent.prototype, "container", void 0);
DialogWrapperComponent = __decorate([
    Component({
        selector: 'dialog-wrapper',
        template: `
    <div #container class="modal fade" style="display:block !important;" role="dialog">
        <ng-template #element></ng-template>
    </div>
`
    })
], DialogWrapperComponent);

let DialogHolderComponent = class DialogHolderComponent {
    /**
     * Constructor
     * @param {ComponentFactoryResolver} resolver
     */
    constructor(resolver) {
        this.resolver = resolver;
        /**
         * Array of dialogs
         * @type {Array<DialogComponent> }
         */
        this.dialogs = [];
    }
    /**
     * Adds dialog
     * @param {Type<DialogComponent>} component
     * @param {object?} data
     * @param {DialogOptions?} options
     * @return {Observable<*>}
     */
    addDialog(component, data, options) {
        options = options || {};
        const factory = this.resolver.resolveComponentFactory(DialogWrapperComponent);
        const componentRef = this.element.createComponent(factory, options.index);
        const dialogWrapper = componentRef.instance;
        let _component = dialogWrapper.addComponent(component);
        _component.wrapper.dialogClose.subscribe(() => {
            this.removeDialog(_component);
        });
        if (typeof (options.index) !== 'undefined') {
            this.dialogs.splice(options.index, 0, _component);
        }
        else {
            this.dialogs.push(_component);
        }
        setTimeout(() => {
            dialogWrapper.container.nativeElement.classList.add('show');
            dialogWrapper.container.nativeElement.classList.add('in');
        });
        if (options.autoCloseTimeout) {
            setTimeout(() => {
                this.removeDialog(_component);
            }, options.autoCloseTimeout);
        }
        if (options.closeByClickingOutside) {
            dialogWrapper.closeByClickOutside();
        }
        if (options.backdropColor) {
            dialogWrapper.container.nativeElement.style.backgroundColor = options.backdropColor;
        }
        return _component.fillData(data);
    }
    /**
     * Removes dialog
     * @param {DialogComponent} component
     */
    removeDialog(component) {
        const element = component.wrapper.container.nativeElement;
        element.classList.remove('show');
        element.classList.remove('in');
        setTimeout(() => {
            this._removeElement(component);
        }, 300);
    }
    _removeElement(component) {
        const index = this.dialogs.indexOf(component);
        if (index > -1) {
            this.element.remove(index);
            this.dialogs.splice(index, 1);
        }
    }
    clear() {
        this.element.clear();
        this.dialogs = [];
    }
};
DialogHolderComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
__decorate([
    ViewChild('element', { read: ViewContainerRef })
], DialogHolderComponent.prototype, "element", void 0);
DialogHolderComponent = __decorate([
    Component({
        selector: 'dialog-holder',
        template: '<ng-template #element></ng-template>'
    })
], DialogHolderComponent);

class DialogServiceConfig {
    constructor() {
        this.container = null;
    }
}
let DialogService = class DialogService {
    /**
     * @param {ComponentFactoryResolver} resolver
     * @param {ApplicationRef} applicationRef
     * @param {Injector} injector
     * @param {DialogServiceConfig} config
     */
    constructor(resolver, applicationRef, injector, config) {
        this.resolver = resolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.container = config && config.container;
    }
    /**
     * Adds dialog
     * @param {Type<DialogComponent<T, T1>>} component
     * @param {T?} data
     * @param {DialogOptions?} options
     * @return {Observable<T1>}
     */
    addDialog(component, data, options) {
        if (!this.dialogHolderComponent) {
            this.dialogHolderComponent = this.createDialogHolder();
        }
        return this.dialogHolderComponent.addDialog(component, data, options);
    }
    /**
     * Hides and removes dialog from DOM
     * @param {DialogComponent} component
     */
    removeDialog(component) {
        if (!this.dialogHolderComponent) {
            return;
        }
        this.dialogHolderComponent.removeDialog(component);
    }
    /**
     * Closes all dialogs
     */
    removeAll() {
        this.dialogHolderComponent.clear();
    }
    /**
     * Creates and add to DOM dialog holder component
     * @return {DialogHolderComponent}
     */
    createDialogHolder() {
        const componentFactory = this.resolver.resolveComponentFactory(DialogHolderComponent);
        const componentRef = componentFactory.create(this.injector);
        const componentRootNode = componentRef.hostView.rootNodes[0];
        if (!this.container) {
            const componentRootViewContainer = this.applicationRef.components[0];
            this.container = componentRootViewContainer.hostView.rootNodes[0];
        }
        this.applicationRef.attachView(componentRef.hostView);
        componentRef.onDestroy(() => {
            this.applicationRef.detachView(componentRef.hostView);
        });
        this.container.appendChild(componentRootNode);
        return componentRef.instance;
    }
};
DialogService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: DialogServiceConfig, decorators: [{ type: Optional }] }
];
DialogService.ɵprov = ɵɵdefineInjectable({ factory: function DialogService_Factory() { return new DialogService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(INJECTOR), ɵɵinject(DialogServiceConfig, 8)); }, token: DialogService, providedIn: "root" });
DialogService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(3, Optional())
], DialogService);

var BootstrapModalModule_1;
/**
 * Dialog service factory. Creates dialog service with options
 * @param { ComponentFactoryResolver } resolver
 * @param { ApplicationRef } applicationRef
 * @param { Injector } injector
 * @param { DialogServiceConfig } options
 * @return { DialogService }
 */
function dialogServiceFactory(resolver, applicationRef, injector, options) {
    return new DialogService(resolver, applicationRef, injector, options);
}
let BootstrapModalModule = BootstrapModalModule_1 = class BootstrapModalModule {
    static forRoot(config) {
        return {
            ngModule: BootstrapModalModule_1,
            providers: [
                { provide: DialogServiceConfig, useValue: config },
                {
                    provide: DialogService,
                    useFactory: dialogServiceFactory,
                    deps: [ComponentFactoryResolver, ApplicationRef, Injector, DialogServiceConfig]
                }
            ]
        };
    }
};
BootstrapModalModule = BootstrapModalModule_1 = __decorate([
    NgModule({
        declarations: [
            DialogHolderComponent,
            DialogWrapperComponent
        ],
        providers: [
            DialogService
        ],
        imports: [
            CommonModule
        ],
        entryComponents: [
            DialogHolderComponent,
            DialogWrapperComponent
        ]
    })
], BootstrapModalModule);

/**
 * Abstract dialog
 * @template T - dialog data;
 * @template T1 - dialog result
 */
class DialogComponent {
    /**
     * Constructor
     * @param {DialogService} dialogService - instance of DialogService
     */
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    /**
     *
     * @param {T} data
     * @return {Observable<T1>}
     */
    fillData(data) {
        data = data || {};
        const keys = Object.keys(data);
        for (let i = 0, length = keys.length; i < length; i++) {
            const key = keys[i];
            this[key] = data[key];
        }
        return Observable.create((observer) => {
            this.observer = observer;
            return () => {
                this.close();
            };
        });
    }
    /**
     * Closes dialog
     */
    close() {
        this.dialogService.removeDialog(this);
    }
    /**
     * OnDestroy handler
     * Sends dialog result to observer
     */
    ngOnDestroy() {
        if (this.observer) {
            this.observer.next(this.result);
        }
    }
}

/*
 * Public API Surface of ng2-bootstrap-modal
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BootstrapModalModule, DialogComponent, DialogService, DialogServiceConfig, dialogServiceFactory, DialogHolderComponent as ɵa, DialogWrapperComponent as ɵb };
//# sourceMappingURL=ng2-bootstrap-modal.js.map
