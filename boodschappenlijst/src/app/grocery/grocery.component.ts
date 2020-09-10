import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['/node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class GroceryComponent implements OnInit {
  task: string;
  tasks = [];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.tasks.push({name: this.task});
    this.task = '';
}

}
