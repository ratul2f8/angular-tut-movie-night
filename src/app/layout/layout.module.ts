import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NavService } from './nav/nav.service';

@NgModule({
  declarations: [NavComponent, HomeComponent],
  imports: [CommonModule],
  exports: [HomeComponent, NavComponent],
})
export class LayoutModule {}
