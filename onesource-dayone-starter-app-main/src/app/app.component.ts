import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getRouteData } from './core/route-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isSignedIn = false;
  userName = '';
  onSignIn() {
    this.isSignedIn = true;
    this.userName = 'Jane Smith';
  }
  onSignOut() {
    this.isSignedIn = false;
  }

  showBackButton = false;
  navigateBackUrl?: string;

  unsubscribe?: Subject<boolean> = new Subject();

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.unsubscribe) return;

    this.router.events.pipe(takeUntil(this.unsubscribe)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateFromRoute();
      }
    });
    this.updateFromRoute();
  }

  ngOnDestroy(): void {
    this.unsubscribe?.next(true);
    this.unsubscribe?.complete();
    this.unsubscribe = undefined;
  }

  private updateFromRoute() {
    const routeData = getRouteData(this.router.routerState.root);

    this.showBackButton = routeData.mode === 'dialog';
    this.navigateBackUrl = routeData.navigateBackUrl;
  }

  onHeadeAction(action: any) {
    if (action?.name === 'notification') {
      alert(action.data?.message);
    }

    if (action?.name === 'settings') {
      alert('Settings clicked');
    }
  }

  pages = [
    {
      name: 'GENERAL',
      subpages: [
        {
          name: 'INFO PAGES',
          subpages: [
            {
              name: 'Error',
              url: '/error',
            },
            {
              name: 'Maintenance',
              url: '/maintenance',
            },
            {
              name: 'Page not found',
              url: '/pagenotfound',
            },
            {
              name: 'Un-authorized',
              url: '/unauthorized',
            },
          ],
        },
        {
          name: 'TASKS',
          subpages: [
            {
              name: 'New Task',
              url: '/task',
            },
          ],
        },
        {
          name: 'GENERIC EXAMPLE',
          url: '/generic',
        },
      ],
    },
    {
      name: 'LAYOUT GRID EXAMPLE',
      url: '/layout-grid',
    },
    {
      name: 'CONTACT US',
      url: 'https://www.standardbank.co.za/southafrica/personal/contact-us',
    },
  ];

  homepage = {
    name: 'MY DASHBOARD',
    url: '/',
  };

  profileLinks = [
    {
      name: 'Example Action',
      action: {
        name: 'notification',
        data: {
          message: 'Example Action clicked',
        },
      },
    },
    {
      name: 'Example Notification',
      action: {
        name: 'notification',
        data: {
          message: 'Example Notification clicked',
        },
      },
    },
  ];

  quickLinks = [
    {
      name: '3.0 DS reference site',
      url: 'https://main--63fc7f3b844506bc228d6b28.chromatic.com/',
    },
    {
      name: 'Support',
      url: 'mailto:onesource@standardbank.co.za',
    },
  ];

  links = [
    {
      name: 'Security centre',
      url: 'https://www.standardbank.co.za/southafrica/personal/products-and-services/security-centre/bank-safely',
    },
    {
      name: 'Regulatory',
      url: 'https://www.standardbank.co.za/southafrica/personal/about-us/regulatory',
    },
    {
      name: 'Legal',
      url: 'https://www.standardbank.co.za/southafrica/personal/about-us/legal',
    },
    {
      name: 'Terms and conditions',
      url: 'https://www.standardbank.co.za/southafrica/personal/about-us/terms-and-conditions',
    },
  ];

  socialMediaLinks = [
    {
      icon: 'icn_logo_linkedin',
      url: 'https://www.linkedin.com/company/standard-bank-south-africa/',
    },
    {
      icon: 'icn_logo_you_tube',
      url: 'https://www.youtube.com/channel/UC_oz5no5MIucu45I4PO9nCQ/',
    },
    {
      icon: 'icn_logo_twitter',
      url: 'https://www.facebook.com/StandardBankSA/',
    },
    {
      icon: 'icn_logo_fb',
      url: 'https://twitter.com/standardbankza/',
    },
  ];
}
