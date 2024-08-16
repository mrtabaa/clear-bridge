import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-advantage',
  standalone: true,
  imports: [],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.scss'
})
export class AdvantageComponent implements OnInit {
  private _commonService = inject(CommonService);

  ngOnInit(): void {
    this._commonService.pageTitleSig.set('Our Advantage');
  }
}
