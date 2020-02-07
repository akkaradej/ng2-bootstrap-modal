import { __decorate } from "tslib";
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { DialogWrapperComponent } from './dialog-wrapper.component';
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
export { DialogHolderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhvbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItYm9vdHN0cmFwLW1vZGFsLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy1ob2xkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSx3QkFBd0IsRUFDaEUsSUFBSSxFQUNMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUXBFLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBYWhDOzs7T0FHRztJQUNILFlBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBVnREOzs7V0FHRztRQUNILFlBQU8sR0FBcUMsRUFBRSxDQUFDO0lBTVcsQ0FBQztJQUUzRDs7Ozs7O09BTUc7SUFDSCxTQUFTLENBQVEsU0FBdUMsRUFBRSxJQUFRLEVBQUUsT0FBdUI7UUFDekYsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFtQixDQUFDO1FBQ3pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM5RSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFFLE1BQU0sYUFBYSxHQUEyQixZQUFZLENBQUMsUUFBa0MsQ0FBQztRQUM5RixJQUFJLFVBQVUsR0FBMkIsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRSxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvQjtRQUNELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxhQUFhLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVELGFBQWEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxPQUFPLENBQUMsc0JBQXNCLEVBQUU7WUFDbEMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDckM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDekIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ3JGO1FBQ0QsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsU0FBb0M7UUFDL0MsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBRTFELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTyxjQUFjLENBQUMsU0FBUztRQUM5QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBQ0YsQ0FBQTs7WUFuRStCLHdCQUF3Qjs7QUFaSjtJQUFqRCxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLENBQUM7c0RBQWtDO0FBTHhFLHFCQUFxQjtJQUpqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsc0NBQXNDO0tBQ2pELENBQUM7R0FDVyxxQkFBcUIsQ0FvRmpDO1NBcEZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLXdyYXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERpYWxvZ09wdGlvbnMgfSBmcm9tICcuL2RpYWxvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWhvbGRlcicsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNlbGVtZW50PjwvbmctdGVtcGxhdGU+Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nSG9sZGVyQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogVGFyZ2V0IGVsZW1lbnQgdG8gaW5zZXJ0IGRpYWxvZ3NcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2VsZW1lbnQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgcHVibGljIGVsZW1lbnQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIGRpYWxvZ3NcbiAgICogQHR5cGUge0FycmF5PERpYWxvZ0NvbXBvbmVudD4gfVxuICAgKi9cbiAgZGlhbG9nczogQXJyYXk8RGlhbG9nQ29tcG9uZW50PGFueSwgYW55Pj4gPSBbXTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IHJlc29sdmVyXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGRpYWxvZ1xuICAgKiBAcGFyYW0ge1R5cGU8RGlhbG9nQ29tcG9uZW50Pn0gY29tcG9uZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0P30gZGF0YVxuICAgKiBAcGFyYW0ge0RpYWxvZ09wdGlvbnM/fSBvcHRpb25zXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8Kj59XG4gICAqL1xuICBhZGREaWFsb2c8VCwgVDE+KGNvbXBvbmVudDogVHlwZTxEaWFsb2dDb21wb25lbnQ8VCwgVDE+PiwgZGF0YT86IFQsIG9wdGlvbnM/OiBEaWFsb2dPcHRpb25zKTogT2JzZXJ2YWJsZTxUMT4ge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9IGFzIERpYWxvZ09wdGlvbnM7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRGlhbG9nV3JhcHBlckNvbXBvbmVudCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5lbGVtZW50LmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5LCBvcHRpb25zLmluZGV4KTtcbiAgICBjb25zdCBkaWFsb2dXcmFwcGVyOiBEaWFsb2dXcmFwcGVyQ29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIERpYWxvZ1dyYXBwZXJDb21wb25lbnQ7XG4gICAgbGV0IF9jb21wb25lbnQ6IERpYWxvZ0NvbXBvbmVudDxULCBUMT4gPSBkaWFsb2dXcmFwcGVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xuICAgIF9jb21wb25lbnQud3JhcHBlci5kaWFsb2dDbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVEaWFsb2coX2NvbXBvbmVudCk7XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiAob3B0aW9ucy5pbmRleCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRpYWxvZ3Muc3BsaWNlKG9wdGlvbnMuaW5kZXgsIDAsIF9jb21wb25lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpYWxvZ3MucHVzaChfY29tcG9uZW50KTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaWFsb2dXcmFwcGVyLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIGRpYWxvZ1dyYXBwZXIuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICB9KTtcbiAgICBpZiAob3B0aW9ucy5hdXRvQ2xvc2VUaW1lb3V0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEaWFsb2coX2NvbXBvbmVudCk7XG4gICAgICB9LCBvcHRpb25zLmF1dG9DbG9zZVRpbWVvdXQpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jbG9zZUJ5Q2xpY2tpbmdPdXRzaWRlKSB7XG4gICAgICBkaWFsb2dXcmFwcGVyLmNsb3NlQnlDbGlja091dHNpZGUoKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYmFja2Ryb3BDb2xvcikge1xuICAgICAgZGlhbG9nV3JhcHBlci5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tkcm9wQ29sb3I7XG4gICAgfVxuICAgIHJldHVybiBfY29tcG9uZW50LmZpbGxEYXRhKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgZGlhbG9nXG4gICAqIEBwYXJhbSB7RGlhbG9nQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICovXG4gIHJlbW92ZURpYWxvZyhjb21wb25lbnQ6IERpYWxvZ0NvbXBvbmVudDxhbnksIGFueT4pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gY29tcG9uZW50LndyYXBwZXIuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2luJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW1vdmVFbGVtZW50KGNvbXBvbmVudCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZUVsZW1lbnQoY29tcG9uZW50KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRpYWxvZ3MuaW5kZXhPZihjb21wb25lbnQpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKGluZGV4KTtcbiAgICAgIHRoaXMuZGlhbG9ncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGVhcigpO1xuICAgIHRoaXMuZGlhbG9ncyA9IFtdO1xuICB9XG59XG4iXX0=