import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { FooterComponent } from "./footer.component";


@NgModule({
  declarations: [FooterComponent],
  imports: [MatIconModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FooterComponent]
})

export class FooterModule { }
