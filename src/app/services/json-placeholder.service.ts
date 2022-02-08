import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx'

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
private url='https://jsonplaceholder.typicode.com/posts'


  constructor(private http: HttpClient) { }

  convertJsonToExcel(data:any){
       
    const workSheet=XLSX.utils.json_to_sheet(data);
    const workBook=XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook,workSheet,"My_Sheet")
    //    Buffer for huge data
    XLSX.write(workBook,{bookType:'xlsx',type:"buffer"})
    //  BS
    XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
    XLSX.writeFile(workBook,"posts.xlsx")
}


    getPosts(){
       return this.http.get(this.url)
    }

    createPost(post:HTMLInputElement){
       return this.http.post<any>(this.url, JSON.stringify(post))
    }



  getData():Observable<any>{
      return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')

  }
}
