import { __decorate } from "tslib";
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, ReflectiveInjector, Type, Output, EventEmitter } from '@angular/core';
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
export { DialogWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJvb3RzdHJhcC1tb2RhbC8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2ctd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUNqSCxNQUFNLGVBQWUsQ0FBQztBQVd2QixJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQW9CakM7Ozs7T0FJRztJQUNILFlBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBdkI1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUF1QmUsQ0FBQztJQUUzRDs7OztPQUlHO0lBQ0gsWUFBWSxDQUFRLFNBQXVDO1FBQ3pELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsTUFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckYsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsUUFBa0MsQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNILG1CQUFtQjtRQUNqQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNqRCxXQUFXLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDOUUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDWixDQUFDO0NBQ0YsQ0FBQTs7WUE3QitCLHdCQUF3Qjs7QUF2QjVDO0lBQVQsTUFBTSxFQUFFOzJEQUFrQztBQUtPO0lBQWpELFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzt1REFBa0M7QUFLM0Q7SUFBdkIsU0FBUyxDQUFDLFdBQVcsQ0FBQzt5REFBa0I7QUFaOUIsc0JBQXNCO0lBUmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFOzs7O0NBSVg7S0FDQSxDQUFDO0dBQ1csc0JBQXNCLENBc0RsQztTQXREWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBSZWZsZWN0aXZlSW5qZWN0b3IsIFR5cGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLXdyYXBwZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI2NvbnRhaW5lciBjbGFzcz1cIm1vZGFsIGZhZGVcIiBzdHlsZT1cImRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDtcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZWxlbWVudD48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dXcmFwcGVyQ29tcG9uZW50IHtcblxuICBAT3V0cHV0KCkgZGlhbG9nQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRhcmdldCBlbGVtZW50IHRvIGluc2VydCBkaWFsb2cgY29udGVudCBjb21wb25lbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2VsZW1lbnQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgcHVibGljIGVsZW1lbnQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLyoqXG4gICAqIExpbmsgY29udGFpbmVyIERPTSBlbGVtZW50XG4gICAqL1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBwdWJsaWMgY29udGFpbmVyO1xuXG4gIC8qKlxuICAgKiBEaWFsb2cgY29udGVudCBjb21wb25ldFxuICAgKiBAdHlwZSB7RGlhbG9nQ29tcG9uZW50fVxuICAgKi9cbiAgcHJpdmF0ZSBjb250ZW50OiBEaWFsb2dDb21wb25lbnQ8YW55LCBhbnk+O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcn0gcmVzb2x2ZXJcbiAgICogQHBhcmFtIHtEaWFsb2dTZXJ2aWNlfSBkaWFsb2dTZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGNvbnRlbnQgZGlhbG9nIGNvbXBvbmVudCB0byB3cmFwcGVyXG4gICAqIEBwYXJhbSB7VHlwZTxEaWFsb2dDb21wb25lbnQ+fSBjb21wb25lbnRcbiAgICogQHJldHVybiB7RGlhbG9nQ29tcG9uZW50fVxuICAgKi9cbiAgYWRkQ29tcG9uZW50PFQsIFQxPihjb21wb25lbnQ6IFR5cGU8RGlhbG9nQ29tcG9uZW50PFQsIFQxPj4pIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuICAgIGNvbnN0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhbXSwgdGhpcy5lbGVtZW50LmluamVjdG9yKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gICAgdGhpcy5lbGVtZW50Lmluc2VydChjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIHRoaXMuY29udGVudCA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBEaWFsb2dDb21wb25lbnQ8VCwgVDE+O1xuICAgIHRoaXMuY29udGVudC53cmFwcGVyID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBldmVudCBoYW5kbGVyIHRvIGNsb3NlIGRpYWxvZyBieSBjbGljayBvbiBiYWNrZHJvcFxuICAgKi9cbiAgY2xvc2VCeUNsaWNrT3V0c2lkZSgpIHtcbiAgICBjb25zdCBjb250YWluZXJFbCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29udGFpbmVyRWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmRpYWxvZ0Nsb3NlLmVtaXQoKTtcbiAgICB9LCBmYWxzZSk7XG4gIH1cbn1cblxuXG4iXX0=