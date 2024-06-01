import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { AppComponent } from './app.component';
import { CapicuaDetectorComponent } from './capicua-detector/capicua-detector.component'; // Importa tu componente

@NgModule({
  declarations: [
    AppComponent,
    CapicuaDetectorComponent // Declara tu componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule // Importa FormsModule para usar ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
