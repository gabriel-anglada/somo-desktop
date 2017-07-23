import {NgModule} from "@angular/core";
import {MdSidenavModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    MdSidenavModule,
    BrowserAnimationsModule
  ],
  exports: [
    MdSidenavModule,
    BrowserAnimationsModule
  ]
})
export class AppMaterialModule {
}
