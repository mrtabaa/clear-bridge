import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NavArrowsComponent } from '../navbars/nav-arrows/nav-arrows.component';
import { NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from '../navbars/navbar/navbar.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NavbarComponent, NgOptimizedImage,
    NavArrowsComponent
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  private _commonService = inject(CommonService);
  photoWH = 100;

  ngOnInit(): void {
    this._commonService.pageTitleSig.set('OUR TEAM');
  }
}
