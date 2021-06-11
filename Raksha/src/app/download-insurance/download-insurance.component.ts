import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jspdf from 'jspdf';



@Component({
  selector: 'app-download-insurance',
  templateUrl: './download-insurance.component.html',
  styleUrls: ['./download-insurance.component.css']
})
export class DownloadInsuranceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @ViewChild('content') content: ElementRef;  
  public SavePDF(): void {  
    let content=this.content.nativeElement;  
    let pdf = new jspdf('p', 'mm', 'a4'); 
    let _elementHandlers =  
    {  
      '#editor':function(element,renderer){  
        return true;  
      }  
    };  
    pdf.fromHTML(content.innerHTML,15,15,{  
  
      'width':190,  
      'elementHandlers':_elementHandlers  
    });  
  
    pdf.save('test.pdf');  
  }  

}
