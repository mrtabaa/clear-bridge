import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-second-nav',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    MatIconModule
  ],
  templateUrl: './second-nav.component.html',
  styleUrl: './second-nav.component.scss'
})
export class SecondNavComponent {

}
