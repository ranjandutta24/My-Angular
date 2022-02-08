import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx'

@Injectable({
  providedIn: 'root'
})
export class ConvertToExcelService {


  constructor() { }

  convertJsonToExcel(data:any){
        
    const workSheet=XLSX.utils.json_to_sheet(data);
    const workBook=XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook,workSheet,"My_Sheet")
    //    Buffer for huge data
    XLSX.write(workBook,{bookType:'xlsx',type:"buffer"})
    
    XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
    XLSX.writeFile(workBook,"posts.xlsx")
}

}
