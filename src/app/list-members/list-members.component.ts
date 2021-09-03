import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ngo } from '../ngo';
import { NgoService } from '../ngo.service';



@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {

  formValue !: FormGroup;
  modal: Ngo = new Ngo();
  private service!: NgoService;
  memberData !: any;
  showAdd!: boolean;
  showUpdate !: boolean;

  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      memberName: [''],
      aadhar: [''],
      memberAddress: [''],
      memberAge: [''],
      memberPhone: ['']
    })
    this.getMembers();
  }

  clickAddMember() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


  postMemberDetials() {
    this.modal.memberName = this.formValue.value.memberName;
    this.modal.aadhar = this.formValue.value.aadhar;
    this.modal.memberAddress = this.formValue.value.memberAddress;
    this.modal.memberAge = this.formValue.value.memberAge;
    this.modal.memberPhone = this.formValue.value.memberPhone;

    console.log(this.modal)
    this.service.createNgoMember(this.modal)
      .subscribe(res => {
        console.log(res);
        alert("Member Added Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getMembers();
      },
        err => {
          alert("Something Went Wrong");
        })
  }

  getMembers() {
    this.service.getMembers()
      .subscribe(res => {
        this.memberData = res;
      })
  }

  deleteMembers(ngo: any) {
    this.service.deleteMember(ngo.memberId)
      .subscribe(res => {
        alert("Member has been Deleted Successfully")
        this.getMembers();
      })
  }

  OnEdit(ngo: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.modal.memberId = ngo.memberId;
    this.formValue.controls['memberName'].setValue(ngo.memberName)
    this.formValue.controls['aadhar'].setValue(ngo.aadhar)
    this.formValue.controls['memberAddress'].setValue(ngo.memberAddress)
    this.formValue.controls['memberAge'].setValue(ngo.memberAge)
    this.formValue.controls['memberPhone'].setValue(ngo.memberPhone)
  }

  updateMemberDetials() {

    this.modal.memberName = this.formValue.value.memberName;
    this.modal.aadhar = this.formValue.value.aadhar;
    this.modal.memberAddress = this.formValue.value.memberAddress;
    this.modal.memberAge = this.formValue.value.memberAge;
    this.modal.memberPhone = this.formValue.value.memberPhone;

    this.service.updateMember(this.modal, this.modal.memberId)
      .subscribe(res => {
        alert("Updated Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getMembers();
      })
  }
}
