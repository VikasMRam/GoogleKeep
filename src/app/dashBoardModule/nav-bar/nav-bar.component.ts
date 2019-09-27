import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  @Output() searchElement = new EventEmitter();

  private searchKey :string = "";
  close:boolean=false;

  ngOnInit() {
  }

  searchEvent()
  {
    
      this.searchElement.emit(this.searchKey);

      (this.searchKey=="")?this.close=false:this.close=true;
  }
  closeBtn()
  {
    this.searchKey="";
    this.searchEvent();
  }

}
