import { Component, inject, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { SecondNavComponent } from '../navbars/second-nav/second-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavArrowsComponent } from '../navbars/nav-arrows/nav-arrows.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    SecondNavComponent, NavArrowsComponent,
    MatIconModule, MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private _commonService = inject(CommonService);

  ngOnInit(): void {
    this._commonService.pageTitleSig.set('Clear Brdige Group');
  }
}
