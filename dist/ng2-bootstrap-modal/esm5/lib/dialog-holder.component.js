import { __decorate } from "tslib";
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { DialogWrapperComponent } from './dialog-wrapper.component';
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
export { DialogHolderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhvbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItYm9vdHN0cmFwLW1vZGFsLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy1ob2xkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSx3QkFBd0IsRUFDaEUsSUFBSSxFQUNMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUXBFO0lBYUU7OztPQUdHO0lBQ0gsK0JBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBVnREOzs7V0FHRztRQUNILFlBQU8sR0FBcUMsRUFBRSxDQUFDO0lBTVcsQ0FBQztJQUUzRDs7Ozs7O09BTUc7SUFDSCx5Q0FBUyxHQUFULFVBQWlCLFNBQXVDLEVBQUUsSUFBUSxFQUFFLE9BQXVCO1FBQTNGLGlCQThCQztRQTdCQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQW1CLENBQUM7UUFDekMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzlFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUUsSUFBTSxhQUFhLEdBQTJCLFlBQVksQ0FBQyxRQUFrQyxDQUFDO1FBQzlGLElBQUksVUFBVSxHQUEyQixhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9FLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUN2QyxLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0I7UUFDRCxVQUFVLENBQUM7WUFDVCxhQUFhLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVELGFBQWEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUM1QixVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRTtZQUNsQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUNyQztRQUNELElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUN6QixhQUFhLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7U0FDckY7UUFDRCxPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFZLEdBQVosVUFBYSxTQUFvQztRQUFqRCxpQkFRQztRQVBDLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUUxRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTyw4Q0FBYyxHQUF0QixVQUF1QixTQUFTO1FBQzlCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVELHFDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQWxFNkIsd0JBQXdCOztJQVpKO1FBQWpELFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzswREFBa0M7SUFMeEUscUJBQXFCO1FBSmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxzQ0FBc0M7U0FDakQsQ0FBQztPQUNXLHFCQUFxQixDQW9GakM7SUFBRCw0QkFBQztDQUFBLEFBcEZELElBb0ZDO1NBcEZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLXdyYXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERpYWxvZ09wdGlvbnMgfSBmcm9tICcuL2RpYWxvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWhvbGRlcicsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNlbGVtZW50PjwvbmctdGVtcGxhdGU+Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nSG9sZGVyQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogVGFyZ2V0IGVsZW1lbnQgdG8gaW5zZXJ0IGRpYWxvZ3NcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2VsZW1lbnQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgcHVibGljIGVsZW1lbnQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIGRpYWxvZ3NcbiAgICogQHR5cGUge0FycmF5PERpYWxvZ0NvbXBvbmVudD4gfVxuICAgKi9cbiAgZGlhbG9nczogQXJyYXk8RGlhbG9nQ29tcG9uZW50PGFueSwgYW55Pj4gPSBbXTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IHJlc29sdmVyXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGRpYWxvZ1xuICAgKiBAcGFyYW0ge1R5cGU8RGlhbG9nQ29tcG9uZW50Pn0gY29tcG9uZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0P30gZGF0YVxuICAgKiBAcGFyYW0ge0RpYWxvZ09wdGlvbnM/fSBvcHRpb25zXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8Kj59XG4gICAqL1xuICBhZGREaWFsb2c8VCwgVDE+KGNvbXBvbmVudDogVHlwZTxEaWFsb2dDb21wb25lbnQ8VCwgVDE+PiwgZGF0YT86IFQsIG9wdGlvbnM/OiBEaWFsb2dPcHRpb25zKTogT2JzZXJ2YWJsZTxUMT4ge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9IGFzIERpYWxvZ09wdGlvbnM7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRGlhbG9nV3JhcHBlckNvbXBvbmVudCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5lbGVtZW50LmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5LCBvcHRpb25zLmluZGV4KTtcbiAgICBjb25zdCBkaWFsb2dXcmFwcGVyOiBEaWFsb2dXcmFwcGVyQ29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIERpYWxvZ1dyYXBwZXJDb21wb25lbnQ7XG4gICAgbGV0IF9jb21wb25lbnQ6IERpYWxvZ0NvbXBvbmVudDxULCBUMT4gPSBkaWFsb2dXcmFwcGVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xuICAgIF9jb21wb25lbnQud3JhcHBlci5kaWFsb2dDbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVEaWFsb2coX2NvbXBvbmVudCk7XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiAob3B0aW9ucy5pbmRleCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRpYWxvZ3Muc3BsaWNlKG9wdGlvbnMuaW5kZXgsIDAsIF9jb21wb25lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpYWxvZ3MucHVzaChfY29tcG9uZW50KTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaWFsb2dXcmFwcGVyLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIGRpYWxvZ1dyYXBwZXIuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICB9KTtcbiAgICBpZiAob3B0aW9ucy5hdXRvQ2xvc2VUaW1lb3V0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEaWFsb2coX2NvbXBvbmVudCk7XG4gICAgICB9LCBvcHRpb25zLmF1dG9DbG9zZVRpbWVvdXQpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jbG9zZUJ5Q2xpY2tpbmdPdXRzaWRlKSB7XG4gICAgICBkaWFsb2dXcmFwcGVyLmNsb3NlQnlDbGlja091dHNpZGUoKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYmFja2Ryb3BDb2xvcikge1xuICAgICAgZGlhbG9nV3JhcHBlci5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tkcm9wQ29sb3I7XG4gICAgfVxuICAgIHJldHVybiBfY29tcG9uZW50LmZpbGxEYXRhKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgZGlhbG9nXG4gICAqIEBwYXJhbSB7RGlhbG9nQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICovXG4gIHJlbW92ZURpYWxvZyhjb21wb25lbnQ6IERpYWxvZ0NvbXBvbmVudDxhbnksIGFueT4pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gY29tcG9uZW50LndyYXBwZXIuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2luJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW1vdmVFbGVtZW50KGNvbXBvbmVudCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZUVsZW1lbnQoY29tcG9uZW50KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRpYWxvZ3MuaW5kZXhPZihjb21wb25lbnQpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKGluZGV4KTtcbiAgICAgIHRoaXMuZGlhbG9ncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGVhcigpO1xuICAgIHRoaXMuZGlhbG9ncyA9IFtdO1xuICB9XG59XG4iXX0=