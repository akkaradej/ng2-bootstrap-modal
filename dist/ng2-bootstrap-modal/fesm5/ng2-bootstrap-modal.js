import { __decorate, __param } from 'tslib';
import { EventEmitter, ReflectiveInjector, ComponentFactoryResolver, Output, ViewChild, ViewContainerRef, Component, ApplicationRef, Injector, Optional, ɵɵdefineInjectable, ɵɵinject, INJECTOR, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

var DialogWrapperComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param {ComponentFactoryResolver} resolver
     * @param {DialogService} dialogService
     */
    function DialogWrapperComponent(resolver) {
        this.resolver = resolver;
        this.dialogClose = new EventEmitter();
    }
    /**
     * Adds content dialog component to wrapper
     * @param {Type<DialogComponent>} component
     * @return {DialogComponent}
     */
    DialogWrapperComponent.prototype.addComponent = function (component) {
        var factory = this.resolver.resolveComponentFactory(component);
        var injector = ReflectiveInjector.fromResolvedProviders([], this.element.injector);
        var componentRef = factory.create(injector);
        this.element.insert(componentRef.hostView);
        this.content = componentRef.instance;
        this.content.wrapper = this;
        return this.content;
    };
    /**
     * Registers event handler to close dialog by click on backdrop
     */
    DialogWrapperComponent.prototype.closeByClickOutside = function () {
        var _this = this;
        var containerEl = this.container.nativeElement;
        containerEl.querySelector('.modal-content').addEventListener('click', function (event) {
            event.stopPropagation();
        });
        containerEl.addEventListener('click', function () {
            _this.dialogClose.emit();
        }, false);
    };
    DialogWrapperComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
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
            template: "\n    <div #container class=\"modal fade\" style=\"display:block !important;\" role=\"dialog\">\n        <ng-template #element></ng-template>\n    </div>\n"
        })
    ], DialogWrapperComponent);
    return DialogWrapperComponent;
}());

var DialogHolderComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param {ComponentFactoryResolver} resolver
     */
    function DialogHolderComponent(resolver) {
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
    DialogHolderComponent.prototype.addDialog = function (component, data, options) {
        var _this = this;
        options = options || {};
        var factory = this.resolver.resolveComponentFactory(DialogWrapperComponent);
        var componentRef = this.element.createComponent(factory, options.index);
        var dialogWrapper = componentRef.instance;
        var _component = dialogWrapper.addComponent(component);
        _component.wrapper.dialogClose.subscribe(function () {
            _this.removeDialog(_component);
        });
        if (typeof (options.index) !== 'undefined') {
            this.dialogs.splice(options.index, 0, _component);
        }
        else {
            this.dialogs.push(_component);
        }
        setTimeout(function () {
            dialogWrapper.container.nativeElement.classList.add('show');
            dialogWrapper.container.nativeElement.classList.add('in');
        });
        if (options.autoCloseTimeout) {
            setTimeout(function () {
                _this.removeDialog(_component);
            }, options.autoCloseTimeout);
        }
        if (options.closeByClickingOutside) {
            dialogWrapper.closeByClickOutside();
        }
        if (options.backdropColor) {
            dialogWrapper.container.nativeElement.style.backgroundColor = options.backdropColor;
        }
        return _component.fillData(data);
    };
    /**
     * Removes dialog
     * @param {DialogComponent} component
     */
    DialogHolderComponent.prototype.removeDialog = function (component) {
        var _this = this;
        var element = component.wrapper.container.nativeElement;
        element.classList.remove('show');
        element.classList.remove('in');
        setTimeout(function () {
            _this._removeElement(component);
        }, 300);
    };
    DialogHolderComponent.prototype._removeElement = function (component) {
        var index = this.dialogs.indexOf(component);
        if (index > -1) {
            this.element.remove(index);
            this.dialogs.splice(index, 1);
        }
    };
    DialogHolderComponent.prototype.clear = function () {
        this.element.clear();
        this.dialogs = [];
    };
    DialogHolderComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    __decorate([
        ViewChild('element', { read: ViewContainerRef })
    ], DialogHolderComponent.prototype, "element", void 0);
    DialogHolderComponent = __decorate([
        Component({
            selector: 'dialog-holder',
            template: '<ng-template #element></ng-template>'
        })
    ], DialogHolderComponent);
    return DialogHolderComponent;
}());

var DialogServiceConfig = /** @class */ (function () {
    function DialogServiceConfig() {
        this.container = null;
    }
    return DialogServiceConfig;
}());
var DialogService = /** @class */ (function () {
    /**
     * @param {ComponentFactoryResolver} resolver
     * @param {ApplicationRef} applicationRef
     * @param {Injector} injector
     * @param {DialogServiceConfig} config
     */
    function DialogService(resolver, applicationRef, injector, config) {
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
    DialogService.prototype.addDialog = function (component, data, options) {
        if (!this.dialogHolderComponent) {
            this.dialogHolderComponent = this.createDialogHolder();
        }
        return this.dialogHolderComponent.addDialog(component, data, options);
    };
    /**
     * Hides and removes dialog from DOM
     * @param {DialogComponent} component
     */
    DialogService.prototype.removeDialog = function (component) {
        if (!this.dialogHolderComponent) {
            return;
        }
        this.dialogHolderComponent.removeDialog(component);
    };
    /**
     * Closes all dialogs
     */
    DialogService.prototype.removeAll = function () {
        this.dialogHolderComponent.clear();
    };
    /**
     * Creates and add to DOM dialog holder component
     * @return {DialogHolderComponent}
     */
    DialogService.prototype.createDialogHolder = function () {
        var _this = this;
        var componentFactory = this.resolver.resolveComponentFactory(DialogHolderComponent);
        var componentRef = componentFactory.create(this.injector);
        var componentRootNode = componentRef.hostView.rootNodes[0];
        if (!this.container) {
            var componentRootViewContainer = this.applicationRef.components[0];
            this.container = componentRootViewContainer.hostView.rootNodes[0];
        }
        this.applicationRef.attachView(componentRef.hostView);
        componentRef.onDestroy(function () {
            _this.applicationRef.detachView(componentRef.hostView);
        });
        this.container.appendChild(componentRootNode);
        return componentRef.instance;
    };
    DialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: DialogServiceConfig, decorators: [{ type: Optional }] }
    ]; };
    DialogService.ɵprov = ɵɵdefineInjectable({ factory: function DialogService_Factory() { return new DialogService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(INJECTOR), ɵɵinject(DialogServiceConfig, 8)); }, token: DialogService, providedIn: "root" });
    DialogService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(3, Optional())
    ], DialogService);
    return DialogService;
}());

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
var BootstrapModalModule = /** @class */ (function () {
    function BootstrapModalModule() {
    }
    BootstrapModalModule_1 = BootstrapModalModule;
    BootstrapModalModule.forRoot = function (config) {
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
    };
    var BootstrapModalModule_1;
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
    return BootstrapModalModule;
}());

/**
 * Abstract dialog
 * @template T - dialog data;
 * @template T1 - dialog result
 */
var DialogComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param {DialogService} dialogService - instance of DialogService
     */
    function DialogComponent(dialogService) {
        this.dialogService = dialogService;
    }
    /**
     *
     * @param {T} data
     * @return {Observable<T1>}
     */
    DialogComponent.prototype.fillData = function (data) {
        var _this = this;
        data = data || {};
        var keys = Object.keys(data);
        for (var i = 0, length_1 = keys.length; i < length_1; i++) {
            var key = keys[i];
            this[key] = data[key];
        }
        return Observable.create(function (observer) {
            _this.observer = observer;
            return function () {
                _this.close();
            };
        });
    };
    /**
     * Closes dialog
     */
    DialogComponent.prototype.close = function () {
        this.dialogService.removeDialog(this);
    };
    /**
     * OnDestroy handler
     * Sends dialog result to observer
     */
    DialogComponent.prototype.ngOnDestroy = function () {
        if (this.observer) {
            this.observer.next(this.result);
        }
    };
    return DialogComponent;
}());

/*
 * Public API Surface of ng2-bootstrap-modal
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BootstrapModalModule, DialogComponent, DialogService, DialogServiceConfig, dialogServiceFactory, DialogHolderComponent as ɵa, DialogWrapperComponent as ɵb };
//# sourceMappingURL=ng2-bootstrap-modal.js.map
