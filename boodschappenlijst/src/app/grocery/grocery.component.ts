import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['/node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class GroceryComponent implements OnInit {
  counter: number;
  task = {
    name: '',
    id: 0,
    amount: 1
  };

  tasks=[];
  
  constructor() { 
    
  }

  ngOnInit(): void {
    this.task = {
      name: '',
      id: 0,
      amount: 1
    };
    this.counter = 0;
  }

  onAdd(){
    
    console.log(this.task.name)
    this.counter ++;
    if(this.task.id == 0){
      this.tasks.push({id: this.counter, name: this.task.name, amount: this.task.amount, strike: false});
  }
  else
  {
    this.tasks.push({id: this.counter, name: this.task.name, amount: this.task.amount, strike: true});
  }
  
  this.task = {
    name: '',
    id: 0,
    amount: 1
  };
}
  onEdit(item){
    this.task = item;
  }

  onRemove(item){
    for(var i = 0;i < this.tasks.length; i++){
      if(item.id == this.tasks[i].id){
          this.tasks.splice(i,1);
          break;
      }
  }
  }

  onCheck(item){
    for(var i = 0;i < this.tasks.length; i++){
      if(item.id == this.tasks[i].id){
        if(this.tasks[i].strike){
          this.tasks[i].strike = false;
        }
        else{
          this.tasks[i].strike = true;
          this.task = this.tasks[i]
          this.onRemove(this.task)
          this.onAdd()
        }
        break;
      }
    }
  }
}
