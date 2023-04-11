import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import {
  HeaderModule,
  FooterModule,
  ButtonModule,
  AccordionModule,
  CardModule,
  AvatarModule,
} from "@onesource/angular/components";

import {
    ConfigureIcons,
    IconRegistryModule,
    IconRegistryService,
    AllBluePrintIcons,
    ConfigureLayout,
    BootstrapBreakpoints,
    ConfigureValidationMessageProviders,
    ValidationMessageProviderService,
    DefaultValidationMessageProviders,
  } from "@onesource/angular/configuration";

import { CommonModule } from "@angular/common";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { TaskpageComponent } from "./taskpage/taskpage.component";
import { GenericpageComponent } from "./genericpage/genericpage.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";

import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { UnauthorizedpageComponent } from "./unauthorizedpage/unauthorizedpage.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { AppRoutingModule } from "./app-routing.module";
import { DialogModule } from "@onesource/angular/components/dialogs";
import { SnackBarModule } from "@onesource/angular/components/snackbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    TaskpageComponent,
    GenericpageComponent,
    ErrorpageComponent,
    UnauthorizedpageComponent,
    MaintenanceComponent, 
    PagenotfoundComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AppRoutingModule,
    FooterModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    HeaderModule,
    AvatarModule,
    DialogModule,
    SnackBarModule,
    IconRegistryModule.forRoot(),
  ],
  providers: [
    ConfigureIcons((registry: IconRegistryService) => {
      return () => {
        // Import all the Icons, please consider only importing the icon / incon sets that is in use in the app
        registry.include(AllBluePrintIcons);

        /* Importing Icon Sets
        registry.include(NavigationArrowsIcons);
        registry.include(LogosIcons);

        See: https://develop--63fc7f3b844506bc228d6b28.chromatic.com/?path=/story/foundations-icons--page
        */

        /* Import specific Icons
        registry.addSvgIconSetWithoutNamespace(BuildingLocationLandmarkTravelIcnCompass);
        */
      };
    }),
    // Ensure the components responsiveness behaves on the same breakpoints as bootstrap
    ConfigureLayout((layoutService) => {
      return () => {
        layoutService.set(BootstrapBreakpoints);
    }}),
    // Configure the validation message provider service
    // Define global defaults for validation messages for input components 
    ConfigureValidationMessageProviders((validationMessageProviders: ValidationMessageProviderService) => {
      return () => {  
        validationMessageProviders.include(DefaultValidationMessageProviders);
        
        // Example: Customizing Provider
        validationMessageProviders.addProvider('required', (data: { label: string}) => `${data?.label} is required`);
      }
    }),
  ],
})
export class AppModule {}
