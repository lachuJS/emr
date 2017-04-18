import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-bp',
  templateUrl: './bp.component.html',
  styleUrls: ['./bp.component.css']
})
export class BpComponent implements OnInit {
  datePipe: DatePipe = new DatePipe('en-US');
  data: Array<any[]>;
  /*
    line chart config
  */
  public lineChartData: Array<any> = [
    {data: [], label: 'low'},
    {data: [], label: 'high'}
  ];
  public lineChartLabels: Array<string> = [];
  public lineChartOptions:any = {
    responsive : true,
    legend : {
      position : 'bottom'
    }
  }
  //styles
  public lineChartColors:Array<any> = [
    { // low value colors
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // high value colors
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType:string = 'line';


  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.patientService.getBpTrack()
    .then((data: Array<any[]>) => {
      this.data = data;
      data.map((row: Array<any>) => {//each row [date,low,high]
        this.lineChartLabels.push(this.datePipe.transform(row[0],'shortDate'));
        this.lineChartData[0].data.push(row[1]); //low
        this.lineChartData[1].data.push(row[2]) //high
      });
      console.log(this.lineChartData);
    })
    .catch((err) => { console.log(err) });
  }

}
