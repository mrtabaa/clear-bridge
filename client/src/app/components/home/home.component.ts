import { Component, inject, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
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
