import { __decorate, __param } from "tslib";
import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, Type, Optional } from '@angular/core';
import { DialogHolderComponent } from './dialog-holder.component';
import * as i0 from "@angular/core";
export class DialogServiceConfig {
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
DialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DialogService_Factory() { return new DialogService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(DialogServiceConfig, 8)); }, token: DialogService, providedIn: "root" });
DialogService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(3, Optional())
], DialogService);
export { DialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItYm9vdHN0cmFwLW1vZGFsLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUFFLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQ2hHLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQVdsRSxNQUFNLE9BQU8sbUJBQW1CO0lBQWhDO1FBQ0UsY0FBUyxHQUFnQixJQUFJLENBQUM7SUFDaEMsQ0FBQztDQUFBO0FBS0QsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQWN4Qjs7Ozs7T0FLRztJQUNILFlBQ1UsUUFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsUUFBa0IsRUFDZCxNQUEyQjtRQUgvQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUcxQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxTQUFTLENBQVEsU0FBdUMsRUFBRSxJQUFRLEVBQUUsT0FBdUI7UUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMvQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDeEQ7UUFDRCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQVEsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLFNBQW9DO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDL0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7O09BR0c7SUFDSyxrQkFBa0I7UUFFeEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFdEYsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxNQUFNLGlCQUFpQixHQUFJLFlBQVksQ0FBQyxRQUFpQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFDdEcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsTUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFJLDBCQUEwQixDQUFDLFFBQWlDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztTQUM1RztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0RCxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDO0NBQ0YsQ0FBQTs7WUEvRHFCLHdCQUF3QjtZQUNsQixjQUFjO1lBQ3BCLFFBQVE7WUFDTixtQkFBbUIsdUJBQXRDLFFBQVE7OztBQXhCQSxhQUFhO0lBSHpCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUF5QkcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtHQXhCRixhQUFhLENBb0Z6QjtTQXBGWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBBcHBsaWNhdGlvblJlZiwgSW5qZWN0b3IsIEVtYmVkZGVkVmlld1JlZiwgVHlwZSwgT3B0aW9uYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dIb2xkZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy1ob2xkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nT3B0aW9ucyB7XG4gIGluZGV4PzogbnVtYmVyO1xuICBhdXRvQ2xvc2VUaW1lb3V0PzogbnVtYmVyO1xuICBjbG9zZUJ5Q2xpY2tpbmdPdXRzaWRlPzogYm9vbGVhbjtcbiAgYmFja2Ryb3BDb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2VDb25maWcge1xuICBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gbnVsbDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIFBsYWNlaG9sZGVyIG9mIG1vZGFsIGRpYWxvZ3NcbiAgICogQHR5cGUge0RpYWxvZ0hvbGRlckNvbXBvbmVudH1cbiAgICovXG4gIHByaXZhdGUgZGlhbG9nSG9sZGVyQ29tcG9uZW50OiBEaWFsb2dIb2xkZXJDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIEhUTUwgY29udGFpbmVyIGZvciBkaWFsb2dzXG4gICAqIHR5cGUge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcn0gcmVzb2x2ZXJcbiAgICogQHBhcmFtIHtBcHBsaWNhdGlvblJlZn0gYXBwbGljYXRpb25SZWZcbiAgICogQHBhcmFtIHtJbmplY3Rvcn0gaW5qZWN0b3JcbiAgICogQHBhcmFtIHtEaWFsb2dTZXJ2aWNlQ29uZmlnfSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBAT3B0aW9uYWwoKSBjb25maWc6IERpYWxvZ1NlcnZpY2VDb25maWdcbiAgKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb25maWcgJiYgY29uZmlnLmNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGRpYWxvZ1xuICAgKiBAcGFyYW0ge1R5cGU8RGlhbG9nQ29tcG9uZW50PFQsIFQxPj59IGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1Q/fSBkYXRhXG4gICAqIEBwYXJhbSB7RGlhbG9nT3B0aW9ucz99IG9wdGlvbnNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxUMT59XG4gICAqL1xuICBhZGREaWFsb2c8VCwgVDE+KGNvbXBvbmVudDogVHlwZTxEaWFsb2dDb21wb25lbnQ8VCwgVDE+PiwgZGF0YT86IFQsIG9wdGlvbnM/OiBEaWFsb2dPcHRpb25zKTogT2JzZXJ2YWJsZTxUMT4ge1xuICAgIGlmICghdGhpcy5kaWFsb2dIb2xkZXJDb21wb25lbnQpIHtcbiAgICAgIHRoaXMuZGlhbG9nSG9sZGVyQ29tcG9uZW50ID0gdGhpcy5jcmVhdGVEaWFsb2dIb2xkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nSG9sZGVyQ29tcG9uZW50LmFkZERpYWxvZzxULCBUMT4oY29tcG9uZW50LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBhbmQgcmVtb3ZlcyBkaWFsb2cgZnJvbSBET01cbiAgICogQHBhcmFtIHtEaWFsb2dDb21wb25lbnR9IGNvbXBvbmVudFxuICAgKi9cbiAgcmVtb3ZlRGlhbG9nKGNvbXBvbmVudDogRGlhbG9nQ29tcG9uZW50PGFueSwgYW55Pik6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaWFsb2dIb2xkZXJDb21wb25lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kaWFsb2dIb2xkZXJDb21wb25lbnQucmVtb3ZlRGlhbG9nKGNvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFsbCBkaWFsb2dzXG4gICAqL1xuICByZW1vdmVBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dIb2xkZXJDb21wb25lbnQuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBhZGQgdG8gRE9NIGRpYWxvZyBob2xkZXIgY29tcG9uZW50XG4gICAqIEByZXR1cm4ge0RpYWxvZ0hvbGRlckNvbXBvbmVudH1cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlRGlhbG9nSG9sZGVyKCk6IERpYWxvZ0hvbGRlckNvbXBvbmVudCB7XG5cbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShEaWFsb2dIb2xkZXJDb21wb25lbnQpO1xuXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgY29uc3QgY29tcG9uZW50Um9vdE5vZGUgPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgY29uc3QgY29tcG9uZW50Um9vdFZpZXdDb250YWluZXIgPSB0aGlzLmFwcGxpY2F0aW9uUmVmLmNvbXBvbmVudHNbMF07XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IChjb21wb25lbnRSb290Vmlld0NvbnRhaW5lci5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cbiAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgIGNvbXBvbmVudFJlZi5vbkRlc3Ryb3koKCkgPT4ge1xuICAgICAgdGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgfSk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50Um9vdE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgfVxufVxuIl19