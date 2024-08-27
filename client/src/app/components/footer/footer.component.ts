import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GoogleMapsComponent } from '../dialogs/google-maps/google-maps.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbarModule, MatDividerModule, MatIconModule, MatDialogModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private readonly _dialog = inject(MatDialog);

  currentYear = new Date().getFullYear();

  openDialog() {
    this._dialog.open(GoogleMapsComponent);
  }
}
