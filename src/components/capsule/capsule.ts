import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'capsule',
  templateUrl: 'capsule.html'
})
export class CapsuleComponent {

  @Input() values: string[] = [];

  @Output() valueSelected = new EventEmitter<string[]>();

  allValuesSelected: string[] = [];

  constructor() {
  }

  getClass(periodo: string): string {
    return this.allValuesSelected.indexOf(periodo) > -1 ? 'capsule-ative' : 'capsule-inative';
  }

  onItemClicked(periodo: string) {
    if (this.allValuesSelected.indexOf(periodo) > -1){
      this.allValuesSelected.splice(this.allValuesSelected.indexOf(periodo), 1)
    } else {
      this.allValuesSelected.push(periodo);
    }
    this.valueSelected.emit(this.allValuesSelected);
  }
  
}
