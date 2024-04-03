import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-agent-script',
  templateUrl: './agent-script.component.html',
  styleUrls: ['./agent-script.component.css']
})
export class AgentScriptComponent implements OnInit {

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


