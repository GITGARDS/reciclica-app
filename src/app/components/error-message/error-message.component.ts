import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {

  @Input() message!: string;
  @Input() mostrarErro!: boolean;
  @Input() error!: string;

  constructor() {}

  ngOnInit() {}
}
