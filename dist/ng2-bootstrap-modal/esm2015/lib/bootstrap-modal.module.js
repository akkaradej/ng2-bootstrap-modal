var BootstrapModalModule_1;
import { __decorate } from "tslib";
import { NgModule, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogHolderComponent } from './dialog-holder.component';
import { DialogWrapperComponent } from './dialog-wrapper.component';
import { DialogService, DialogServiceConfig } from './dialog.service';
/**
 * Dialog service factory. Creates dialog service with options
 * @param { ComponentFactoryResolver } resolver
 * @param { ApplicationRef } applicationRef
 * @param { Injector } injector
 * @param { DialogServiceConfig } options
 * @return { DialogService }
 */
export function dialogServiceFactory(resolver, applicationRef, injector, options) {
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
export { BootstrapModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW1vZGFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1ib290c3RyYXAtbW9kYWwvIiwic291cmNlcyI6WyJsaWIvYm9vdHN0cmFwLW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNoQyxRQUFrQyxFQUNsQyxjQUE4QixFQUM5QixRQUFrQixFQUNsQixPQUE0QjtJQUU1QixPQUFPLElBQUksYUFBYSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUFrQkQsSUFBYSxvQkFBb0IsNEJBQWpDLE1BQWEsb0JBQW9CO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBMkI7UUFDdEMsT0FBTztZQUNILFFBQVEsRUFBRSxzQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ2xEO29CQUNJLE9BQU8sRUFBRSxhQUFhO29CQUN0QixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixDQUFDO2lCQUNsRjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBO0FBZFksb0JBQW9CO0lBaEJoQyxRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixxQkFBcUI7WUFDckIsc0JBQXNCO1NBQ3pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsYUFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLFlBQVk7U0FDZjtRQUNELGVBQWUsRUFBRTtZQUNiLHFCQUFxQjtZQUNyQixzQkFBc0I7U0FDekI7S0FDSixDQUFDO0dBQ1csb0JBQW9CLENBY2hDO1NBZFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQXBwbGljYXRpb25SZWYsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGlhbG9nSG9sZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctaG9sZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctd3JhcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSwgRGlhbG9nU2VydmljZUNvbmZpZyB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xuLyoqXG4gKiBEaWFsb2cgc2VydmljZSBmYWN0b3J5LiBDcmVhdGVzIGRpYWxvZyBzZXJ2aWNlIHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gcmVzb2x2ZXJcbiAqIEBwYXJhbSB7IEFwcGxpY2F0aW9uUmVmIH0gYXBwbGljYXRpb25SZWZcbiAqIEBwYXJhbSB7IEluamVjdG9yIH0gaW5qZWN0b3JcbiAqIEBwYXJhbSB7IERpYWxvZ1NlcnZpY2VDb25maWcgfSBvcHRpb25zXG4gKiBAcmV0dXJuIHsgRGlhbG9nU2VydmljZSB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWFsb2dTZXJ2aWNlRmFjdG9yeShcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgb3B0aW9uczogRGlhbG9nU2VydmljZUNvbmZpZ1xuKSB7XG4gICAgcmV0dXJuIG5ldyBEaWFsb2dTZXJ2aWNlKHJlc29sdmVyLCBhcHBsaWNhdGlvblJlZiwgaW5qZWN0b3IsIG9wdGlvbnMpO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEaWFsb2dIb2xkZXJDb21wb25lbnQsXG4gICAgICAgIERpYWxvZ1dyYXBwZXJDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBEaWFsb2dTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIERpYWxvZ0hvbGRlckNvbXBvbmVudCxcbiAgICAgICAgRGlhbG9nV3JhcHBlckNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTW9kYWxNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZzogRGlhbG9nU2VydmljZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Qm9vdHN0cmFwTW9kYWxNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBCb290c3RyYXBNb2RhbE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogRGlhbG9nU2VydmljZUNvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogRGlhbG9nU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZGlhbG9nU2VydmljZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEFwcGxpY2F0aW9uUmVmLCBJbmplY3RvciwgRGlhbG9nU2VydmljZUNvbmZpZ11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbiJdfQ==