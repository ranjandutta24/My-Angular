import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx'
import { ConvertToExcelService } from '../services/convert-to-excel.service';
import { JsonPlaceholderService } from '../services/json-placeholder.service';


@Component({
  selector: 'app-jsonpost',
  templateUrl: './jsonpost.component.html',
  styleUrls: ['./jsonpost.component.css']
})
export class JsonpostComponent implements OnInit {
    posts:any[]=[];
    maindata:any;
   
    fake:any=[
        {name:"ranjan",mail:"connecttoranjan@gmail.com",age:27},
        {name:"regs",mail:"cosgan@gmail.com",age:47}
    ];
    

    


    convertJsonToExcel(){
        
        const workSheet=XLSX.utils.json_to_sheet(this.maindata);
        const workBook=XLSX.utils.book_new();
    
        XLSX.utils.book_append_sheet(workBook,workSheet,"My_Sheet")
        //    Buffer for huge data
        XLSX.write(workBook,{bookType:'xlsx',type:"buffer"})
        //  BS
        XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
        XLSX.writeFile(workBook,"posts.xlsx")
    }
    

  constructor(private service:JsonPlaceholderService ) { 
    //   this.posts = new Array<any>()
  }

//   getDataFromAPI(){
//       this.service.getData().subscribe((data)=>{
//         console.log(data)
//         this.posts=data
//       })
//   }

  ngOnInit(): void {
    this.service.getPosts()
        .subscribe((data)=>{
        console.log(typeof this.fake)
        this.posts = JSON.parse(JSON.stringify(data)) 
        this.maindata=data
      })

      
  }

  createPost(input:HTMLInputElement){
    let post:any={title: input.value};
    input.value='';
  this.service.createPost(post)
  .subscribe(response=>{
    // console.log(response)
    post.id = response.id
    this.posts.splice(0, 0, post);
    });
  }

//   deletePost(post:HTMLInputElement){
//     this.http.delete('https://jsonplaceholder.typicode.com/posts'+'/'+post.id)
//     .subscribe(response=>{
//         let index = this.posts.indexOf(post)
//         this.posts.splice(index,1);
//     })
//   }



}

