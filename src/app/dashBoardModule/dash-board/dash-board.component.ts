import { Component, OnInit } from '@angular/core';
import { item } from '../models/Item';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']

})

export class DashBoardComponent implements OnInit {

  constructor() { }
  private takeANotesFlag: boolean = true;
  private title: string = "";
  private note: string = "";
  private items: Array<item> = [];
  private listItems: Array<string> = [];
  private listCheckBoxes: Array<boolean> = [];
  private listView: boolean = false;
  private searchMode: boolean = false;
  private itemsToBeShown: Array<Number> = [];

  ngOnInit() {
  }

  takeANotes() {
    if (this.note != "" || this.title != "" || this.listItems.length>0) {
      //  let item = {
      //    note: this.note,
      //    title:this.title
      //  }
      let item1 = new item();
      item1.note = this.note;
      item1.title = this.title;
      this.items.push(item1)
      item1.list = this.listItems;
      item1.listCheckBoxes = this.listCheckBoxes;

      console.log("pushing")
      this.itemsToBeShown = [];
      for (let i = 0; i < this.items.length; i++) {
        this.itemsToBeShown.push(i);
      }

    }
    this.note = "";
    this.title = "";
    this.listItems = [];
    this.listCheckBoxes = [];
    this.takeANotesFlag = true;
    this.listView = false;
    console.log(this.items)
  }

  addImage(event) {

    if (event.length === 0)
      return;

    var mimeType = event[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }



    var reader = new FileReader();
    let itemObj = new item();
    // this.imagePath = files;
    reader.readAsDataURL(event[0]);
    reader.onload = (_event) => {
      console.log("pushing");
      itemObj.src = reader.result;
      // if (this.note != "")
      itemObj.note = this.note;
      // if (this.title != "")
      itemObj.title = this.title;

      itemObj.list = this.listItems;
      itemObj.listCheckBoxes = this.listCheckBoxes;
      this.items.push(itemObj);
      this.itemsToBeShown = [];
      for (let i = 0; i < this.items.length; i++) {
        this.itemsToBeShown.push(i);
      }
      this.note = "";
      this.title = "";
      this.listItems = [];
      this.listCheckBoxes = [];
      this.takeANotesFlag = true;
      this.listView = false;
    }
  }

  addToList() {
    if (this.listItems[this.listItems.length - 1] != "") {
      this.listCheckBoxes.push(false);
      this.listItems.push('')
    }
  }

  changeListItem(index, type, event) {
    if (type == "list") {
      this.listItems[index] = event.target.value;
    }
    if (type == "checkbox") {
      this.listCheckBoxes[index] = event.target.checked;
    }
  }


  deleteItem(index) {
    console.log("delete", index);
    this.items.splice(index, 1);
  }

  search(event) {
    if (event != "") {
      this.searchMode = true;
      this.itemsToBeShown=[];
      for (let i = 0; i < this.items.length; i++) {
        // console.log("enetered" , event)
        let item = this.items[i];
       
        if ((item.title.indexOf(event) >= 0) || (item.note.indexOf(event) >= 0)) {
          this.itemsToBeShown.push(i);
          break;
        }
        if (item.list.length > 0) {
          for (let listELem of item.list) {
            if (listELem.indexOf(event) >= 0) {
              this.itemsToBeShown.push(i);
              break;
            }
          }
        }
      }
    }
    else {
      this.searchMode = false;
      this.itemsToBeShown = [];
      for (let i = 0; i < this.items.length; i++) {
        this.itemsToBeShown.push(i);
      }

    }




  }
}
