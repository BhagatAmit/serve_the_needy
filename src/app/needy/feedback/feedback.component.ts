import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
  }

  delete(deleteForm: { value: any; }){
    this.donationService.deleteDonation(deleteForm.value).subscribe(
      (resp) =>{
      console.log(resp);
    },
    err => {
      console.log(err);
    }

    );
   }


}
