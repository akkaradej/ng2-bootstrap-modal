import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogWrapperComponent } from './dialog-wrapper.component';
import { DialogService } from './dialog.service';
/**
 * Abstract dialog
 * @template T - dialog data;
 * @template T1 - dialog result
 */
export declare class DialogComponent<T, T1> implements OnDestroy {
    protected dialogService: DialogService;
    /**
     * Observer to return result from dialog
     */
    private observer;
    /**
     * Dialog result
     * @type {T1}
     */
    protected result: T1;
    /**
     * Dialog wrapper (modal placeholder)
     */
    wrapper: DialogWrapperComponent;
    /**
     * Constructor
     * @param {DialogService} dialogService - instance of DialogService
     */
    constructor(dialogService: DialogService);
    /**
     *
     * @param {T} data
     * @return {Observable<T1>}
     */
    fillData(data: T): Observable<T1>;
    /**
     * Closes dialog
     */
    close(): void;
    /**
     * OnDestroy handler
     * Sends dialog result to observer
     */
    ngOnDestroy(): void;
}
