import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface OnDeactivation {
    onDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class OnDeactivationGuard implements CanDeactivate<OnDeactivation> {
    
    canDeactivate(component: OnDeactivation): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.onDeactivate();
    }
}