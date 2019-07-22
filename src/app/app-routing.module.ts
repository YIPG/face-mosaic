import { NgModule } from "@angular/core"
import { LPComponent } from "../app/lp/lp.component"
import { UploadComponent } from "../app/upload/upload.component"
import { RouterModule, Routes } from "@angular/router"

const routes: Routes = [
  { path: "", component: LPComponent },
  { path: "upload", component: UploadComponent }
]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
