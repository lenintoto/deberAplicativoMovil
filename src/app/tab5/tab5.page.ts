import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor() {}

  public isDisabled = true;

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();
  }

  handleRefresh(event:CustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      window.location.reload();
      event.detail.complete();
    }, 2000);
  }

  options = ['Java', 'Python', 'JavaScript', 'C++', 'Express', 'Flask', 'MySQL', 'HTML5', 'MongoDB', 'AWS (Conocimiento básico)'];
  selectedOptions: string[] = [];

  removeOption(option: string) {
    this.selectedOptions = this.selectedOptions.filter(o => o !== option);
  }



}
