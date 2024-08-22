import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NavArrowsComponent } from '../navbars/nav-arrows/nav-arrows.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [
    NavArrowsComponent,
    MatDividerModule
  ],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent implements OnInit {
  private _commonService = inject(CommonService);

  ngOnInit(): void {
    this._commonService.pageTitleSig.set('OUR PROCESS');
  }
}
