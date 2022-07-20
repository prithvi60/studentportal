import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css']
})
export class OutComponent implements OnInit {
  title="export-to-excel"
  filename="Excelsheet.xlsx"
    constructor(public ser:MainserviceService) { }
  public show:any
    ngOnInit(): void {
      this.ser.getOut().subscribe((data)=>{
  this.show=data
      })
    }
    exportexcel():void{
      let element=document.getElementById("excel-table");
      const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element)
      const wb:XLSX.WorkBook=XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb,ws,"sheet1");
      XLSX.writeFile(wb,this.filename);
  
    }
  
}
