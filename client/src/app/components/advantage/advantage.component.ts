import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NavArrowsComponent } from '../navbars/nav-arrows/nav-arrows.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-advantage',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NavArrowsComponent
  ],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.scss'
})
export class AdvantageComponent implements OnInit {
  private _commonService = inject(CommonService);

  ngOnInit(): void {
    this._commonService.pageTitleSig.set('OUT ADVANTAGE');
  }
}
