import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-arrows',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    MatButtonModule, MatIconModule
  ],
  templateUrl: './nav-arrows.component.html',
  styleUrl: './nav-arrows.component.scss'
})
export class NavArrowsComponent implements OnInit {
  private _router = inject(Router);
  private _url = this._router.url;
  isContactUsPage = false;
  isHomePage = false;

  routes = ['/', '/about-us', '/advantage', '/process', '/team', '/contact-us'];

  ngOnInit(): void {
    if (this._url === '/') {
      this.isHomePage = true;
    }

    if (this._url === '/contact-us')
      this.isContactUsPage = true;
  }

  goBack(): void {
    if (this._url === '/') {
      this.isHomePage = true;
    }
    else {
      this.isHomePage = false;
      const index = this.routes.indexOf(this._url);

      this._router.navigate([this.routes[index - 1]]);
    }
  }

  goHome(): void {
    this._router.navigate(['/']);
  }

  goNext(): void {
    if (this._url === '/contact-us')
      this.isContactUsPage = true;
    else {
      this.isHomePage = false;
      this.isContactUsPage = false;
      const index = this.routes.indexOf(this._url);

      this._router.navigate([this.routes[index + 1]]);
    }
  }
}
