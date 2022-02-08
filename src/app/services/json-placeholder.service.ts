import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
private url='https://jsonplaceholder.typicode.com/posts'


  constructor(private http: HttpClient) { }



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
