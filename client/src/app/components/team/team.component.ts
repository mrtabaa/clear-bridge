import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NavArrowsComponent } from '../navbars/nav-arrows/nav-arrows.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NavArrowsComponent
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  private _commonService = inject(CommonService);

  ngOnInit(): void {
    this._commonService.pageTitleSig.set('OUT TEAM');
  }
}
