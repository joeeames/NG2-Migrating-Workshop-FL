import { NgModule, forwardRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpgradeAdapter } from '@angular/upgrade';

export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
  ],
  providers: [
  ]
})
export class AppModule { }