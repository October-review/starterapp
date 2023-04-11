import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'onesource-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `icn_logo_linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icn_logo_linkedin.svg')
    )
    this.matIconRegistry.addSvgIcon(
      `icn_logo_YouTube`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icn_logo_YouTube.svg')
    )
    this.matIconRegistry.addSvgIcon(
      `icn_logo_twitter`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icn_logo_twitter.svg')
    )
    this.matIconRegistry.addSvgIcon(
      `icn_logo_FB`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icn_logo_FB.svg')
    )
  }

  @Input()
  links: any[] = ['security centre', 'Regulatory', 'legal', 'terms & conditions'];

  @Input()
  hideLinkedIn: boolean = false;

  @Input()
  hideYouTube: boolean = false;

  @Input()
  hideTwitter: boolean = false;

  @Input()
  hideFacebook: boolean = false;

  @Input()
  content: string = 'Standard Bank is a licensed financial services provider in terms of the Financial Advisory and Intermediary Services Act and a registered credit provider in terms of the National Credit Act, registration number NCRCP15';

}
