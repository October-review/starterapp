import { GenericpageComponent } from "./genericpage/genericpage.component";
import { TaskpageComponent } from "./taskpage/taskpage.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UnauthorizedpageComponent } from "./unauthorizedpage/unauthorizedpage.component";
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { GridpageComponent } from "./gridpage/gridpage.component";
import { OnDeactivationGuard } from "./core/on-deactivation-guard";

const routes: Routes = [
  { path: "", pathMatch: "full", component: LandingpageComponent },
  {
    path: "task",
    pathMatch: "full",
    component: TaskpageComponent,
    canDeactivate: [OnDeactivationGuard],
    data: {
      mode: "dialog",
      navigateBackUrl: "/",
    },
  },
  { path: "generic", pathMatch: "full", component: GenericpageComponent },
  { path: "layout-grid", pathMatch: "full", component: GridpageComponent },
  { path: "maintenance", pathMatch: "full", component: MaintenanceComponent },
  { path: "error", pathMatch: "full", component: ErrorpageComponent },
  { path: "notfound", pathMatch: "full", component: PagenotfoundComponent },
  {
    path: "unauthorized",
    pathMatch: "full",
    component: UnauthorizedpageComponent,
  },
  { path: "**", pathMatch: "full", component: PagenotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
