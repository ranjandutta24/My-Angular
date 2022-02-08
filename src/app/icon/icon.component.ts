import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
    active: boolean;
    state='off';
    

    onClick(){
        this.active = !this.active;
        if (this.state==='off'){
            this.state= 'on'
        }
        else
        this.state='off'
    }


  constructor() { }

  ngOnInit(): void {
  }

}
