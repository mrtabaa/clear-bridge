import { Component, inject, OnInit, Signal } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { RouterModule } from '@angular/router';
import { NavArrowsComponent } from '../navbars/nav-arrows/nav-arrows.component';
import { MatDividerModule } from '@angular/material/divider';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    RouterModule, NgOptimizedImage,
    NavArrowsComponent,
    MatDividerModule
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  private _commonService = inject(CommonService);

  ngOnInit(): void {
    this._commonService.pageTitleSig.set('ABOUT US');
  }
}
