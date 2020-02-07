import { Observable } from 'rxjs';
/**
 * Abstract dialog
 * @template T - dialog data;
 * @template T1 - dialog result
 */
export class DialogComponent {
    /**
     * Constructor
     * @param {DialogService} dialogService - instance of DialogService
     */
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    /**
     *
     * @param {T} data
     * @return {Observable<T1>}
     */
    fillData(data) {
        data = data || {};
        const keys = Object.keys(data);
        for (let i = 0, length = keys.length; i < length; i++) {
            const key = keys[i];
            this[key] = data[key];
        }
        return Observable.create((observer) => {
            this.observer = observer;
            return () => {
                this.close();
            };
        });
    }
    /**
     * Closes dialog
     */
    close() {
        this.dialogService.removeDialog(this);
    }
    /**
     * OnDestroy handler
     * Sends dialog result to observer
     */
    ngOnDestroy() {
        if (this.observer) {
            this.observer.next(this.result);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1ib290c3RyYXAtbW9kYWwvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBSTVDOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sZUFBZTtJQWtCMUI7OztPQUdHO0lBQ0gsWUFBc0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRXZEOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsSUFBTztRQUNkLElBQUksR0FBRyxJQUFJLElBQUksRUFBTyxDQUFDO1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLE9BQU8sR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEaWFsb2dXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctd3JhcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xuXG4vKipcbiAqIEFic3RyYWN0IGRpYWxvZ1xuICogQHRlbXBsYXRlIFQgLSBkaWFsb2cgZGF0YTtcbiAqIEB0ZW1wbGF0ZSBUMSAtIGRpYWxvZyByZXN1bHRcbiAqL1xuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudDxULCBUMT4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBPYnNlcnZlciB0byByZXR1cm4gcmVzdWx0IGZyb20gZGlhbG9nXG4gICAqL1xuICBwcml2YXRlIG9ic2VydmVyOiBPYnNlcnZlcjxUMT47XG5cbiAgLyoqXG4gICAqIERpYWxvZyByZXN1bHRcbiAgICogQHR5cGUge1QxfVxuICAgKi9cbiAgcHJvdGVjdGVkIHJlc3VsdDogVDE7XG5cbiAgLyoqXG4gICAqIERpYWxvZyB3cmFwcGVyIChtb2RhbCBwbGFjZWhvbGRlcilcbiAgICovXG4gIHdyYXBwZXI6IERpYWxvZ1dyYXBwZXJDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RGlhbG9nU2VydmljZX0gZGlhbG9nU2VydmljZSAtIGluc3RhbmNlIG9mIERpYWxvZ1NlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtUfSBkYXRhXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8VDE+fVxuICAgKi9cbiAgZmlsbERhdGEoZGF0YTogVCk6IE9ic2VydmFibGU8VDE+IHtcbiAgICBkYXRhID0gZGF0YSB8fCB7fSBhcyBUO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgZGlhbG9nXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2UucmVtb3ZlRGlhbG9nKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uRGVzdHJveSBoYW5kbGVyXG4gICAqIFNlbmRzIGRpYWxvZyByZXN1bHQgdG8gb2JzZXJ2ZXJcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICB0aGlzLm9ic2VydmVyLm5leHQodGhpcy5yZXN1bHQpO1xuICAgIH1cbiAgfVxufVxuIl19