import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-calls',
  templateUrl: './pickup-calls.page.html',
  styleUrls: ['./pickup-calls.page.scss'],
})
export class PickupCallsPage implements OnInit {
  calls = [
    {
      hasHeader: false,
      hasFooter: false,
      status: 'hold',
      updateAt: '25/04/2021 16:29',
      createdAt: '24/04/2024',
      notes:
        'we have two bags that are full, one with plastic and the other with glasses',
      value: '',
    },
    {
      hasHeader: false,
      hasFooter: false,
      status: 'processing',
      updateAt: '24/04/2021 10:00',
      createdAt: '23/04/2021',
      notes: 'we have two bags that are full',
      value: '',
    },
    {
      hasHeader: false,
      hasFooter: false,
      status: 'finished',
      updateAt: '23/04/2021 18:00',
      createdAt: '22/04/2021',
      notes: '',
      value: '$ 15,00',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
