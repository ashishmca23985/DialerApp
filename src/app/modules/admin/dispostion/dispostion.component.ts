import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-dispostion',
  templateUrl: './dispostion.component.html',
  styleUrls: ['./dispostion.component.css']
})
export class DispostionComponent implements OnInit {

  constructor() {
    
    setTimeout(()=>{   
      $('#dt-master-disposition').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5,10, 15, 20]
    } );
    }, 1);
    
    
   }

  ngOnInit(): void {
  }

}
