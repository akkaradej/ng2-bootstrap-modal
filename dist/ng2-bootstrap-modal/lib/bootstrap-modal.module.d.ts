import { ModuleWithProviders, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { DialogService, DialogServiceConfig } from './dialog.service';
/**
 * Dialog service factory. Creates dialog service with options
 * @param { ComponentFactoryResolver } resolver
 * @param { ApplicationRef } applicationRef
 * @param { Injector } injector
 * @param { DialogServiceConfig } options
 * @return { DialogService }
 */
export declare function dialogServiceFactory(resolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, options: DialogServiceConfig): DialogService;
export declare class BootstrapModalModule {
    static forRoot(config: DialogServiceConfig): ModuleWithProviders<BootstrapModalModule>;
}
