import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-in-win',
  templateUrl: './in-win.component.html',
  styleUrls: ['./in-win.component.css']
})
export class InWinComponent implements OnInit {

  public data!:[][]
  constructor() { }

public SID:any
public age:any
public min:any
public fine:any
  ngOnInit(): void {
  }
  onFileChange(evt: any) {
    const target : DataTransfer =  <DataTransfer>(evt.target);
    
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname : string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

      console.log(this.data);
      let x = this.data.slice(1);
    let y:any[]=[this.SID,this.age,this.min,this.fine]
      console.log(x);
  

    };

    reader.readAsBinaryString(target.files[0]);

  }
}
