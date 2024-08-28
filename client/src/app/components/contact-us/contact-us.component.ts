import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NavArrowsComponent } from '../navbars/nav-arrows/nav-arrows.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GoogleMapsComponent } from '../dialogs/google-maps/google-maps.component';
import { NavbarComponent } from '../navbars/navbar/navbar.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    NavbarComponent, NavArrowsComponent,
    MatIconModule, MatDialogModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  private _commonService = inject(CommonService);
  private readonly _dialog = inject(MatDialog);

  ngOnInit(): void {
    this._commonService.pageTitleSig.set('CONTACT US');
  }

  openDialog() {
    this._dialog.open(GoogleMapsComponent);
  }
}
