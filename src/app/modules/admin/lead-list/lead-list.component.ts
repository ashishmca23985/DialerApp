import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  constructor() {

    setTimeout(()=>{   
      $('#datatableexample').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5,10, 15, 20],
        
    } );
    }, 1);

    
    setTimeout(()=>{   
      $('#datatableexample1').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5,10, 15, 20]
    } );
    }, 1);
   }
  
  ngOnInit(): void {

  
    };
  
  }



