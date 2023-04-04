import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css'],
})
export class CreateOnomatopiaComponent implements OnInit {
  newOnomatopia?: string;

  @Output()
  createOnomatopia: EventEmitter<string> = new EventEmitter();

  sendOnomatopiaToParent(): void {
    this.createOnomatopia.emit(this.newOnomatopia);
  }

  constructor() {}

  onSubmit(): void {
    console.log(this.newOnomatopia);
  }
  ngOnInit() {}
}
