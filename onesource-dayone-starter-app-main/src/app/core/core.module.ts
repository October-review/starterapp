import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnDeactivationGuard } from './on-deactivation-guard';


@NgModule({
  providers: [
    OnDeactivationGuard,
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
