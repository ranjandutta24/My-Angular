import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

    post = {
       title :"Title",
       isFavorite : true
    }
    onFavoriteChange(isFavorite:boolean){
        console.log(isFavorite)
    }


    tweet = {
        body:'...',
        likesCount: 10,
        isLiked:false
    }
    
}
