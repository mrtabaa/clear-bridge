import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  pageTitleSig = signal<string>('CLEAR BRIDGE GROUP');
}
