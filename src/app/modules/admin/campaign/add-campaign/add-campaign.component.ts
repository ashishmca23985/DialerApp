import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css']
})
export class AddCampaignComponent implements OnInit {

  constructor() {
    setTimeout(()=>{   
      $('#dt-remove-disposition').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5,10, 15, 20]
    } );
    }, 1);

    
    setTimeout(()=>{   
      $('#dt-master-disposition').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5,10, 15, 20]
    } );
    }, 1);
    
    setTimeout(()=>{   
      $('#dt-data-history').DataTable( {
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
