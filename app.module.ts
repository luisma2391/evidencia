import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CapicuaDetectorComponent } from './capicua-detector/capicua-detector.component';

@NgModule({
  declarations: [
    AppComponent,
    CapicuaDetectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
