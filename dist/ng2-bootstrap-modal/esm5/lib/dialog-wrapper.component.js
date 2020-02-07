import { __decorate } from "tslib";
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, ReflectiveInjector, Type, Output, EventEmitter } from '@angular/core';
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
export { DialogWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJvb3RzdHJhcC1tb2RhbC8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2ctd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUNqSCxNQUFNLGVBQWUsQ0FBQztBQVd2QjtJQW9CRTs7OztPQUlHO0lBQ0gsZ0NBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBdkI1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUF1QmUsQ0FBQztJQUUzRDs7OztPQUlHO0lBQ0gsNkNBQVksR0FBWixVQUFvQixTQUF1QztRQUN6RCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLElBQU0sUUFBUSxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JGLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLFFBQWtDLENBQUM7UUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxvREFBbUIsR0FBbkI7UUFBQSxpQkFRQztRQVBDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ2pELFdBQVcsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLO1lBQzFFLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDWixDQUFDOztnQkE1QjZCLHdCQUF3Qjs7SUF2QjVDO1FBQVQsTUFBTSxFQUFFOytEQUFrQztJQUtPO1FBQWpELFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzsyREFBa0M7SUFLM0Q7UUFBdkIsU0FBUyxDQUFDLFdBQVcsQ0FBQzs2REFBa0I7SUFaOUIsc0JBQXNCO1FBUmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLDZKQUlYO1NBQ0EsQ0FBQztPQUNXLHNCQUFzQixDQXNEbEM7SUFBRCw2QkFBQztDQUFBLEFBdERELElBc0RDO1NBdERZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFJlZmxlY3RpdmVJbmplY3RvciwgVHlwZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctd3JhcHBlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjY29udGFpbmVyIGNsYXNzPVwibW9kYWwgZmFkZVwiIHN0eWxlPVwiZGlzcGxheTpibG9jayAhaW1wb3J0YW50O1wiIHJvbGU9XCJkaWFsb2dcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNlbGVtZW50PjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ1dyYXBwZXJDb21wb25lbnQge1xuXG4gIEBPdXRwdXQoKSBkaWFsb2dDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVGFyZ2V0IGVsZW1lbnQgdG8gaW5zZXJ0IGRpYWxvZyBjb250ZW50IGNvbXBvbmVudFxuICAgKi9cbiAgQFZpZXdDaGlsZCgnZWxlbWVudCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBwdWJsaWMgZWxlbWVudDogVmlld0NvbnRhaW5lclJlZjtcblxuICAvKipcbiAgICogTGluayBjb250YWluZXIgRE9NIGVsZW1lbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIHB1YmxpYyBjb250YWluZXI7XG5cbiAgLyoqXG4gICAqIERpYWxvZyBjb250ZW50IGNvbXBvbmV0XG4gICAqIEB0eXBlIHtEaWFsb2dDb21wb25lbnR9XG4gICAqL1xuICBwcml2YXRlIGNvbnRlbnQ6IERpYWxvZ0NvbXBvbmVudDxhbnksIGFueT47XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyfSByZXNvbHZlclxuICAgKiBAcGFyYW0ge0RpYWxvZ1NlcnZpY2V9IGRpYWxvZ1NlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgeyB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY29udGVudCBkaWFsb2cgY29tcG9uZW50IHRvIHdyYXBwZXJcbiAgICogQHBhcmFtIHtUeXBlPERpYWxvZ0NvbXBvbmVudD59IGNvbXBvbmVudFxuICAgKiBAcmV0dXJuIHtEaWFsb2dDb21wb25lbnR9XG4gICAqL1xuICBhZGRDb21wb25lbnQ8VCwgVDE+KGNvbXBvbmVudDogVHlwZTxEaWFsb2dDb21wb25lbnQ8VCwgVDE+Pikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG4gICAgY29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKFtdLCB0aGlzLmVsZW1lbnQuaW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgdGhpcy5jb250ZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIERpYWxvZ0NvbXBvbmVudDxULCBUMT47XG4gICAgdGhpcy5jb250ZW50LndyYXBwZXIgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGV2ZW50IGhhbmRsZXIgdG8gY2xvc2UgZGlhbG9nIGJ5IGNsaWNrIG9uIGJhY2tkcm9wXG4gICAqL1xuICBjbG9zZUJ5Q2xpY2tPdXRzaWRlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lckVsID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICBjb250YWluZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuZGlhbG9nQ2xvc2UuZW1pdCgpO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxufVxuXG5cbiJdfQ==