import { Component, OnInit } from '@angular/core';

interface Expiration {
  date: string;
  year: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exp: Expiration[] = [
    {date: '01 - January', year: '2020'},
    {date: '02 - February', year: '2021'},
    {date: '03 - March', year: '2022'},
    {date: '04 - April', year: '2023'},
    {date: '05 - May', year: '2024'},
    {date: '06 - June', year: '2025'},
    {date: '07 - July', year: '2026'},
    {date: '08 - August', year: '2027'},
    {date: '09 - September', year: '2028'},
    {date: '09 - September', year: '2029'},
    {date: '11 - November', year: '2030'},
    {date: '12 - December', year: '2031'},
  ];

}
