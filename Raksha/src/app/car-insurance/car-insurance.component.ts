import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-insurance',
  templateUrl: './car-insurance.component.html',
  styleUrls: ['./car-insurance.component.css']
})
export class CarInsuranceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  save(){
    this.router.navigate(['insurance']);
    
  }

}
