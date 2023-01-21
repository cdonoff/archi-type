import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ModalComponent {
  title = 'archi-type';

  setImg(e: string) {
    this.bgColor = e
  }
}
