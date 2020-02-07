import { Observable } from 'rxjs';
/**
 * Abstract dialog
 * @template T - dialog data;
 * @template T1 - dialog result
 */
var DialogComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param {DialogService} dialogService - instance of DialogService
     */
    function DialogComponent(dialogService) {
        this.dialogService = dialogService;
    }
    /**
     *
     * @param {T} data
     * @return {Observable<T1>}
     */
    DialogComponent.prototype.fillData = function (data) {
        var _this = this;
        data = data || {};
        var keys = Object.keys(data);
        for (var i = 0, length_1 = keys.length; i < length_1; i++) {
            var key = keys[i];
            this[key] = data[key];
        }
        return Observable.create(function (observer) {
            _this.observer = observer;
            return function () {
                _this.close();
            };
        });
    };
    /**
     * Closes dialog
     */
    DialogComponent.prototype.close = function () {
        this.dialogService.removeDialog(this);
    };
    /**
     * OnDestroy handler
     * Sends dialog result to observer
     */
    DialogComponent.prototype.ngOnDestroy = function () {
        if (this.observer) {
            this.observer.next(this.result);
        }
    };
    return DialogComponent;
}());
export { DialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1ib290c3RyYXAtbW9kYWwvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBSTVDOzs7O0dBSUc7QUFDSDtJQWtCRTs7O09BR0c7SUFDSCx5QkFBc0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRXZEOzs7O09BSUc7SUFDSCxrQ0FBUSxHQUFSLFVBQVMsSUFBTztRQUFoQixpQkFhQztRQVpDLElBQUksR0FBRyxJQUFJLElBQUksRUFBTyxDQUFDO1FBQ3ZCLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLFFBQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVE7WUFDaEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsT0FBTztnQkFDTCxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gscUNBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBNURELElBNERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERpYWxvZ1dyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy13cmFwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9kaWFsb2cuc2VydmljZSc7XG5cbi8qKlxuICogQWJzdHJhY3QgZGlhbG9nXG4gKiBAdGVtcGxhdGUgVCAtIGRpYWxvZyBkYXRhO1xuICogQHRlbXBsYXRlIFQxIC0gZGlhbG9nIHJlc3VsdFxuICovXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50PFQsIFQxPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIE9ic2VydmVyIHRvIHJldHVybiByZXN1bHQgZnJvbSBkaWFsb2dcbiAgICovXG4gIHByaXZhdGUgb2JzZXJ2ZXI6IE9ic2VydmVyPFQxPjtcblxuICAvKipcbiAgICogRGlhbG9nIHJlc3VsdFxuICAgKiBAdHlwZSB7VDF9XG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzdWx0OiBUMTtcblxuICAvKipcbiAgICogRGlhbG9nIHdyYXBwZXIgKG1vZGFsIHBsYWNlaG9sZGVyKVxuICAgKi9cbiAgd3JhcHBlcjogRGlhbG9nV3JhcHBlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtEaWFsb2dTZXJ2aWNlfSBkaWFsb2dTZXJ2aWNlIC0gaW5zdGFuY2Ugb2YgRGlhbG9nU2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1R9IGRhdGFcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxUMT59XG4gICAqL1xuICBmaWxsRGF0YShkYXRhOiBUKTogT2JzZXJ2YWJsZTxUMT4ge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9IGFzIFQ7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBkaWFsb2dcbiAgICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5yZW1vdmVEaWFsb2codGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogT25EZXN0cm95IGhhbmRsZXJcbiAgICogU2VuZHMgZGlhbG9nIHJlc3VsdCB0byBvYnNlcnZlclxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dCh0aGlzLnJlc3VsdCk7XG4gICAgfVxuICB9XG59XG4iXX0=