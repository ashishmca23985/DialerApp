import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  
  constructor() { }
  
  
  ngOnInit(): void 
  {
    new Chart("agent-login-summary", {
      type: 'pie',
      data: {
        labels: ['Idle Time', 'Talk Time', 'Hold Time','Wrap Time', 'Ringing Time','Dialing Time','Break Time',],
        datasets: [{
          label: '',
          data: [50, 70, 100,120, 150, 170,60],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(34, 153, 84)',
            'rgb(159, 226, 191)',
            'rgb(220, 118, 51)'
          ],
          
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart("hourly-call-chart", {
      type: 'bar',
      data: {
        labels: ['8-9', '9-10', '10-11','11-12', '12-13','13-14','14-15',],
        datasets: [{
          label: '',
          data: [50, 70, 100,120, 150, 170,60],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(34, 153, 84)',
            'rgb(159, 226, 191)',
            'rgb(220, 118, 51)'
          ],
          
          
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

   
    new Chart("agent-call-summary", {
      type: 'pie',
      data: {
        labels: ['Total', 'Answered', 'Not Answered','Callback',],
        datasets: [{
          label: 'Agent Call Summary',
          data: [150, 100, 40,10],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',

          ],
          
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


    

  }
}
