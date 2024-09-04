import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NavArrowsComponent } from '../navbars/nav-arrows/nav-arrows.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GoogleMapsComponent } from '../dialogs/google-maps/google-maps.component';
import { NavbarComponent } from '../navbars/navbar/navbar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    NavbarComponent, NavArrowsComponent,
    MatIconModule, MatDialogModule, MatProgressSpinnerModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  @ViewChild('iframe') iframe: HTMLElement | undefined;
  private _commonService = inject(CommonService);
  private readonly _dialog = inject(MatDialog);
  private router = inject(Router);
  isJotformLoaded = false;

  ngOnInit(): void {
    this._commonService.pageTitleSig.set('CONTACT US');
  }

  openDialog() {
    this._dialog.open(GoogleMapsComponent);
  }

  onFormLoad(): void {
    this.isJotformLoaded = true;
  }

  confirmMessage(): void {
      this.router.navigate(['/message-confirmation']);
  }
}
