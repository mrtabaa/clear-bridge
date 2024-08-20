import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-arrows',
  standalone: true,
  imports: [
    MatButtonModule, MatIconModule
  ],
  templateUrl: './nav-arrows.component.html',
  styleUrl: './nav-arrows.component.scss'
})
export class NavArrowsComponent {

}
