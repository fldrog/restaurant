
import {Component} from 'angular2/angular2'

@Component({
	selector: 'tab',
	inputs: [
		'title:tabTitle',
		'active'
	],
	styles: [`
    .pane{
      padding: 1em;
    }
  `],
	template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {
	title: string;
	active = this.active || false;
}