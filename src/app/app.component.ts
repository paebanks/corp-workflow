import { Component, ViewChild, ElementRef, 
         ComponentFactoryResolver, ViewContainerRef, 
         Renderer2, HostListener} from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild("dragItem") dragItem: ElementRef;

  @ViewChild('dropTarget') dropTarget: ElementRef;

  drag_class = "drag-source";

  constructor(private resolver:ComponentFactoryResolver, 
    private _rend: Renderer2,

    private _svc: TaskService){

  }

  getClass(){
    return this.drag_class;
  }
  
  handleDrag(evt){
  	//console.log(evt);
    this.dragItem.nativeElement.className = "drag-source dragging";
  }

  handleEnd(evt){
    this.dragItem.nativeElement.className = "drag-source";
    //console.log('drag stops');

    
  }

  // changeTarget(evt){
  //   evt.target.className = "drop-target drop-change";
  //   let clone = this._rend.createElement('div')
  //   this._rend.addClass(clone, "drag-source");
  //   let content = this._rend.createText(this.dragItem.nativeElement.textContent);

  //   this._rend.appendChild(clone, content);
  //   this._rend.appendChild(this.dropTarget.nativeElement, clone);
   
  //   console.log(evt.target);
  // }

  // @HostListener('dragend') handle($event){
  //   /*console.log("source " + evt.fromElement);*/
  //   console.log(event.target);
  //   event.stopPropagation();
  //   let clone = this._rend.createElement('div')
  //   this._rend.addClass(clone, 'drag-source');
  //   let content = this._rend.createText(this.dragItem.nativeElement.textContent);
  //   //let content = this._rend.createText("droppedaaaaaaaaaaaaaaaaaa");

  //   this._rend.appendChild(clone, content);
  //   this._rend.appendChild(this.dropTarget.nativeElement, clone);
  
  // }

   @HostListener('dragenter') clone($event){

     event.stopPropagation();
     console.log(event);

    if(event.target.className === 'drop-target' && event.fromElement.className === 'drag-container')
    {
      console.log('yes!!');
      //console.log(event);

      let clone = this._rend.createElement('div')
      this._rend.addClass(clone, 'drag-source');
      let content = this._rend.createText(this.dragItem.nativeElement.textContent);
      //let content = this._rend.createText("droppedaaaaaaaaaaaaaaaaaa");

      this._rend.appendChild(clone, content);
      this._rend.appendChild(this.dropTarget.nativeElement, clone);
      
    }
   
  }

  /*showEvent(evt){
    console.log("event is: " + event);
  }

  @HostListener('dragenter') handle($event){
    console.log(event);

  }*/

  build(){

    const user = {user_id: "00600", surname: "Ward", firstname: "Sandra", department: "HRD", image_url: ""};

    console.log('in build function');
    this._svc.createUser(user)
     
  }

}

 




