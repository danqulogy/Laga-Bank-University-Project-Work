import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'lb-step2-contact-info',
  templateUrl: 'step2-contact-info.component.html',
  styleUrls: ['step2-contact-info.component.css']
})
export class Step2ContactInfoComponent implements OnInit {
  private model: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  previousStep() {
    localStorage.setItem("step2", JSON.stringify(this.model));
    this.router.navigate(['/registration-wizard/step1']);
  }

  nextStep() {
    localStorage.setItem("step2", JSON.stringify(this.model));
    this.router.navigate(['/registration-wizard/step4']);
  }


}
