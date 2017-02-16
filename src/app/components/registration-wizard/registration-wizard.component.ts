import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'lb-registration-wizard',
  templateUrl: 'registration-wizard.component.html',
  styleUrls: ['registration-wizard.component.css']
})
export class RegistrationWizardComponent implements OnInit {

  constructor(public router:Router) {

  }

  ngOnInit() {
  }

  isLinkActive(url:string){
    return this.router.isActive(url, true);
  }

}
