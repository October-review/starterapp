import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialogService } from '@onesource/angular/components/dialogs';
import { SnackBarService } from '@onesource/angular/components/snackbar';
import { OnDeactivation } from '../core/on-deactivation-guard';

@Component({
  selector: 'app-taskpage',
  templateUrl: './taskpage.component.html',
  styleUrls: ['./taskpage.component.scss']
})
export class TaskpageComponent implements OnInit, OnDeactivation {
   hasProgress = true; // Sample: Should be detected by values changed in the form

  constructor(
    private confirmService: ConfirmDialogService,
    private snackBar: SnackBarService,
    private router: Router
  ) { }
  

  ngOnInit(): void {
  }

  async onDeactivate(): Promise<boolean> {
    if (!this.hasProgress) return true;

    const result = await this.confirmService.open({
      title: 'Save',
      content: 'Would you like to save your progress and come back later?',
      buttons: 'yesNo',
      labels: {
        yes: 'Save',
        no: 'No Thanks'
      }
    })

    if (result === 'yes') {
      this.snackBar.show({
        state: 'positive',
        message: 'Task progress saved',
      });
      return true;
    }

    if (result === 'no') {
      return true;
    }

    return false;
  }

  goBack() {
    this.router.navigate(['/']);
  }

  submitTask() {
    this.hasProgress = false; // Sample: Reset Progress so sumbitting won't ask to save again
    this.snackBar.show({
      state: 'positive',
      message: 'Task submitted',
    });
    this.router.navigate(['/']);
  }

}
