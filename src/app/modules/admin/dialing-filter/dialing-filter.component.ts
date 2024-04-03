import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-dialing-filter',
  templateUrl: './dialing-filter.component.html',
  styleUrls: ['./dialing-filter.component.css']
})
export class DialingFilterComponent implements OnInit {

   constructor() {

    setTimeout(()=>{   
      $('#datatableexample').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5,10, 15, 20],
        
    } );
    }, 1);

   }
  
  ngOnInit(): void {

  
    };
  
  }




