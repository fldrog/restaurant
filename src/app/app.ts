import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Tabs} from './tabs';
import {Tab} from './tab';
import {ToDoInput} from './todoInputs';
import {ToDoInput2} from './todoInputs2';
import {TodoService} from './todoService';
import {TodoList} from './todoList';
import {FieldForm} from './fieldForm';


class Hero {
  id: number;
  name: string;
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];




@Component({
    selector: 'my-app',
    template: `
 <h2>My Heroes</h2>
<ul class="heroes">
    <li *ng-for="#hero of heroes" (click)="onSelect(hero)" [ng-class]="getSelectedClass(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
<div *ng-if="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ng-model)]="selectedHero.name" placeholder="name"></input>
  </div>
</div>

<tabs>
  <tab tab-title="Title 1">
    Content of tab Foo
  </tab>
  <tab tab-title="Tab title 2">
    Content of tab Bar
  </tab>
</tabs>
<todo-input></todo-input>
<todo-input2></todo-input2>
<todo-list></todo-list>
<field-form></field-form>


  `,
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, Tab, Tabs, ToDoInput, ToDoInput2, TodoList,FieldForm],
  styles: [`
  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
  .heroes li:hover {color: #369; background-color: #EEF; left: .2em;}
  .heroes .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
  }
  .selected { background-color: #EEE; color: #369; }
  `],
})
class AppComponent {
  public heroes = HEROES;
  public selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getSelectedClass(hero: Hero) {
    return {
      'selected': hero === this.selectedHero
    };
  }
}

bootstrap(AppComponent,[TodoService]);
