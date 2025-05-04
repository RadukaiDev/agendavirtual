import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecordComponent } from './records/components/record.component';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RecordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agenda-app';
  enabled:boolean = false;

setEnabled():void{
  this.enabled = this.enabled?false:true;
}

}
