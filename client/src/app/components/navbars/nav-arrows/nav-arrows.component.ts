import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
  isBackBtnDisabled = false;
  isNextBtnDisabled = false;

  routes = ['/', '/about-us', '/advantage', '/process', '/team', '/contact-us'];

  ngOnInit(): void {
    if (this._url === '/')
      this.isBackBtnDisabled = true;

    if (this._url === 'contact-us')
      this.isNextBtnDisabled = true;
  }

  goBack(): void {
    if (this._url === '/')
      this.isBackBtnDisabled = true;
    else {
      this.isBackBtnDisabled = false;
      const index = this.routes.indexOf(this._url);

      this._router.navigate([this.routes[index - 1]]);
    }
  }

  goNext(): void {
    if (this._url === 'contact-us')
      this.isNextBtnDisabled = true;
    else {
      this.isNextBtnDisabled = false;
      const index = this.routes.indexOf(this._url);

      this._router.navigate([this.routes[index + 1]]);
    }
  }
}
