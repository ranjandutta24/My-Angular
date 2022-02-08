import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts: any[]=[];
  constructor(private http: HttpClient) { 
    
   }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
        .subscribe(response => {
            console.log(response)
            
                this.posts= JSON.parse(JSON.stringify(response)) ;

            

        });


  }







  createPost(input:HTMLInputElement){
      let post:any={title: input.value};
      input.value='';
    this.http.post<any>('https://jsonplaceholder.typicode.com/posts', JSON.stringify(post))
    .subscribe(response=>{
        // console.log(response)
        post.id = response.id
        this.posts.splice(0, 0, post);
    });
  }


  deletePost(post:HTMLInputElement){
    this.http.delete('https://jsonplaceholder.typicode.com/posts'+'/'+post.id)
    .subscribe(response=>{
        let index = this.posts.indexOf(post)
        this.posts.splice(index,1);
    })
  }
}
