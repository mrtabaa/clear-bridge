import { NgOptimizedImage } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonService } from '../../../services/common.service';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage, RouterModule,
    MatToolbarModule, MatButtonModule, MatDividerModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  pageTitleSig: Signal<string> = inject(CommonService).pageTitleSig;
  router = inject(Router);
}
