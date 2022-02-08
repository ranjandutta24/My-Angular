import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
    @Input('isFavorite') isFavorite: boolean;
    @Output() change=new EventEmitter();
    state='Normal'
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
      this.isFavorite = !this.isFavorite;
      if (this.state==='Normal')
        this.state='Favorite'
      else
        this.state='Normal'  
      
    
      this.change.emit(this.isFavorite);
  }
}
