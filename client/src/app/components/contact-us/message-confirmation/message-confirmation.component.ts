import { Component } from '@angular/core';
import { NavArrowsComponent } from '../../navbars/nav-arrows/nav-arrows.component';

@Component({
  selector: 'app-message-confirmation',
  standalone: true,
  imports: [
    NavArrowsComponent
  ],
  templateUrl: './message-confirmation.component.html',
  styleUrl: './message-confirmation.component.scss'
})
export class MessageConfirmationComponent {

}
