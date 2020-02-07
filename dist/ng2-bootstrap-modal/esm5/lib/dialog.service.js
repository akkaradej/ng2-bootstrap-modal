import { __decorate, __param } from "tslib";
import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, Type, Optional } from '@angular/core';
import { DialogHolderComponent } from './dialog-holder.component';
import * as i0 from "@angular/core";
var DialogServiceConfig = /** @class */ (function () {
    function DialogServiceConfig() {
        this.container = null;
    }
    return DialogServiceConfig;
}());
export { DialogServiceConfig };
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
    DialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DialogService_Factory() { return new DialogService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(DialogServiceConfig, 8)); }, token: DialogService, providedIn: "root" });
    DialogService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(3, Optional())
    ], DialogService);
    return DialogService;
}());
export { DialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItYm9vdHN0cmFwLW1vZGFsLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUFFLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQ2hHLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQVdsRTtJQUFBO1FBQ0UsY0FBUyxHQUFnQixJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBS0Q7SUFjRTs7Ozs7T0FLRztJQUNILHVCQUNVLFFBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLFFBQWtCLEVBQ2QsTUFBMkI7UUFIL0IsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsaUNBQVMsR0FBVCxVQUFpQixTQUF1QyxFQUFFLElBQVEsRUFBRSxPQUF1QjtRQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUN4RDtRQUNELE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBUSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRDs7O09BR0c7SUFDSCxvQ0FBWSxHQUFaLFVBQWEsU0FBb0M7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMvQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNILGlDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7T0FHRztJQUNLLDBDQUFrQixHQUExQjtRQUFBLGlCQWtCQztRQWhCQyxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUV0RixJQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQU0saUJBQWlCLEdBQUksWUFBWSxDQUFDLFFBQWlDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztRQUN0RyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFNLDBCQUEwQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxTQUFTLEdBQUksMEJBQTBCLENBQUMsUUFBaUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFnQixDQUFDO1NBQzVHO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRELFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDckIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUU5QyxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDL0IsQ0FBQzs7Z0JBOURtQix3QkFBd0I7Z0JBQ2xCLGNBQWM7Z0JBQ3BCLFFBQVE7Z0JBQ04sbUJBQW1CLHVCQUF0QyxRQUFROzs7SUF4QkEsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBeUJHLFdBQUEsUUFBUSxFQUFFLENBQUE7T0F4QkYsYUFBYSxDQW9GekI7d0JBekdEO0NBeUdDLEFBcEZELElBb0ZDO1NBcEZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEFwcGxpY2F0aW9uUmVmLCBJbmplY3RvciwgRW1iZWRkZWRWaWV3UmVmLCBUeXBlLCBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpYWxvZ0hvbGRlckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWhvbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dPcHRpb25zIHtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIGF1dG9DbG9zZVRpbWVvdXQ/OiBudW1iZXI7XG4gIGNsb3NlQnlDbGlja2luZ091dHNpZGU/OiBib29sZWFuO1xuICBiYWNrZHJvcENvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZUNvbmZpZyB7XG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBudWxsO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgb2YgbW9kYWwgZGlhbG9nc1xuICAgKiBAdHlwZSB7RGlhbG9nSG9sZGVyQ29tcG9uZW50fVxuICAgKi9cbiAgcHJpdmF0ZSBkaWFsb2dIb2xkZXJDb21wb25lbnQ6IERpYWxvZ0hvbGRlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogSFRNTCBjb250YWluZXIgZm9yIGRpYWxvZ3NcbiAgICogdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyfSByZXNvbHZlclxuICAgKiBAcGFyYW0ge0FwcGxpY2F0aW9uUmVmfSBhcHBsaWNhdGlvblJlZlxuICAgKiBAcGFyYW0ge0luamVjdG9yfSBpbmplY3RvclxuICAgKiBAcGFyYW0ge0RpYWxvZ1NlcnZpY2VDb25maWd9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBPcHRpb25hbCgpIGNvbmZpZzogRGlhbG9nU2VydmljZUNvbmZpZ1xuICApIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbmZpZyAmJiBjb25maWcuY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZGlhbG9nXG4gICAqIEBwYXJhbSB7VHlwZTxEaWFsb2dDb21wb25lbnQ8VCwgVDE+Pn0gY29tcG9uZW50XG4gICAqIEBwYXJhbSB7VD99IGRhdGFcbiAgICogQHBhcmFtIHtEaWFsb2dPcHRpb25zP30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQxPn1cbiAgICovXG4gIGFkZERpYWxvZzxULCBUMT4oY29tcG9uZW50OiBUeXBlPERpYWxvZ0NvbXBvbmVudDxULCBUMT4+LCBkYXRhPzogVCwgb3B0aW9ucz86IERpYWxvZ09wdGlvbnMpOiBPYnNlcnZhYmxlPFQxPiB7XG4gICAgaWYgKCF0aGlzLmRpYWxvZ0hvbGRlckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5kaWFsb2dIb2xkZXJDb21wb25lbnQgPSB0aGlzLmNyZWF0ZURpYWxvZ0hvbGRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kaWFsb2dIb2xkZXJDb21wb25lbnQuYWRkRGlhbG9nPFQsIFQxPihjb21wb25lbnQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGFuZCByZW1vdmVzIGRpYWxvZyBmcm9tIERPTVxuICAgKiBAcGFyYW0ge0RpYWxvZ0NvbXBvbmVudH0gY29tcG9uZW50XG4gICAqL1xuICByZW1vdmVEaWFsb2coY29tcG9uZW50OiBEaWFsb2dDb21wb25lbnQ8YW55LCBhbnk+KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpYWxvZ0hvbGRlckNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpYWxvZ0hvbGRlckNvbXBvbmVudC5yZW1vdmVEaWFsb2coY29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYWxsIGRpYWxvZ3NcbiAgICovXG4gIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ0hvbGRlckNvbXBvbmVudC5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIGFkZCB0byBET00gZGlhbG9nIGhvbGRlciBjb21wb25lbnRcbiAgICogQHJldHVybiB7RGlhbG9nSG9sZGVyQ29tcG9uZW50fVxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVEaWFsb2dIb2xkZXIoKTogRGlhbG9nSG9sZGVyQ29tcG9uZW50IHtcblxuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KERpYWxvZ0hvbGRlckNvbXBvbmVudCk7XG5cbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcbiAgICBjb25zdCBjb21wb25lbnRSb290Tm9kZSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyKSB7XG4gICAgICBjb25zdCBjb21wb25lbnRSb290Vmlld0NvbnRhaW5lciA9IHRoaXMuYXBwbGljYXRpb25SZWYuY29tcG9uZW50c1swXTtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gKGNvbXBvbmVudFJvb3RWaWV3Q29udGFpbmVyLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuICAgIHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG4gICAgY29tcG9uZW50UmVmLm9uRGVzdHJveSgoKSA9PiB7XG4gICAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wb25lbnRSb290Tm9kZSk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICB9XG59XG4iXX0=