import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
// import { ReactiveFormsModule } from "@angular/forms"
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from "./app.component"
import { HeaderComponent } from "./header/header.component"
import { LPComponent } from "./lp/lp.component"
import { UploadComponent } from "./upload/upload.component"
import { AppRoutingModule } from "./app-routing.module"

@NgModule({
  declarations: [AppComponent, HeaderComponent, LPComponent, UploadComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
