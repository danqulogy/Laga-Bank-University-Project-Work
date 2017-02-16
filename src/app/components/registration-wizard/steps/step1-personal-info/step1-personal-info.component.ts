import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'lb-step1-personal-info',
  templateUrl: 'step1-personal-info.component.html',
  styleUrls: ['step1-personal-info.component.css']
})
export class Step1PersonalInfoComponent implements OnInit {
  private model: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  nextStep() {
    localStorage.setItem("step1", JSON.stringify(this.model));
    this.router.navigate(['/registration-wizard/step2']);
  }

}
