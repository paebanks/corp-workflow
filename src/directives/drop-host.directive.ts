import {Directive, OnInit, Renderer2, ElementRef, HostListener} from '@angular/core';

@Directive({
	selector: '[dropHost]'
})
export class DropHostDirective implements OnInit{

	constructor(private el: ElementRef, _rend: Renderer2){

	}

	ngOnInit(){

	}

	@HostListener('dragover') handleDrop(event: Event){
		
	}


	
}