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
export { BootstrapModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW1vZGFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1ib290c3RyYXAtbW9kYWwvIiwic291cmNlcyI6WyJsaWIvYm9vdHN0cmFwLW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsd0JBQXdCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RFOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQ2hDLFFBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLFFBQWtCLEVBQ2xCLE9BQTRCO0lBRTVCLE9BQU8sSUFBSSxhQUFhLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUUsQ0FBQztBQWtCRDtJQUFBO0lBY0EsQ0FBQzs2QkFkWSxvQkFBb0I7SUFDdEIsNEJBQU8sR0FBZCxVQUFlLE1BQTJCO1FBQ3RDLE9BQU87WUFDSCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNsRDtvQkFDSSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsVUFBVSxFQUFFLG9CQUFvQjtvQkFDaEMsSUFBSSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztpQkFDbEY7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDOztJQWJRLG9CQUFvQjtRQWhCaEMsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLHFCQUFxQjtnQkFDckIsc0JBQXNCO2FBQ3pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGFBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWTthQUNmO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLHFCQUFxQjtnQkFDckIsc0JBQXNCO2FBQ3pCO1NBQ0osQ0FBQztPQUNXLG9CQUFvQixDQWNoQztJQUFELDJCQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQXBwbGljYXRpb25SZWYsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGlhbG9nSG9sZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctaG9sZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctd3JhcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSwgRGlhbG9nU2VydmljZUNvbmZpZyB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xuLyoqXG4gKiBEaWFsb2cgc2VydmljZSBmYWN0b3J5LiBDcmVhdGVzIGRpYWxvZyBzZXJ2aWNlIHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gcmVzb2x2ZXJcbiAqIEBwYXJhbSB7IEFwcGxpY2F0aW9uUmVmIH0gYXBwbGljYXRpb25SZWZcbiAqIEBwYXJhbSB7IEluamVjdG9yIH0gaW5qZWN0b3JcbiAqIEBwYXJhbSB7IERpYWxvZ1NlcnZpY2VDb25maWcgfSBvcHRpb25zXG4gKiBAcmV0dXJuIHsgRGlhbG9nU2VydmljZSB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWFsb2dTZXJ2aWNlRmFjdG9yeShcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgb3B0aW9uczogRGlhbG9nU2VydmljZUNvbmZpZ1xuKSB7XG4gICAgcmV0dXJuIG5ldyBEaWFsb2dTZXJ2aWNlKHJlc29sdmVyLCBhcHBsaWNhdGlvblJlZiwgaW5qZWN0b3IsIG9wdGlvbnMpO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEaWFsb2dIb2xkZXJDb21wb25lbnQsXG4gICAgICAgIERpYWxvZ1dyYXBwZXJDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBEaWFsb2dTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIERpYWxvZ0hvbGRlckNvbXBvbmVudCxcbiAgICAgICAgRGlhbG9nV3JhcHBlckNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTW9kYWxNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZzogRGlhbG9nU2VydmljZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Qm9vdHN0cmFwTW9kYWxNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBCb290c3RyYXBNb2RhbE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogRGlhbG9nU2VydmljZUNvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogRGlhbG9nU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZGlhbG9nU2VydmljZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEFwcGxpY2F0aW9uUmVmLCBJbmplY3RvciwgRGlhbG9nU2VydmljZUNvbmZpZ11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbiJdfQ==