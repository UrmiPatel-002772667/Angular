# Directives 
- used to change the behavior and appearance of DOM element
- can implement all lifecycle hooks
- can not have template
- types:
	- Structural - change DOM layout by adding or removing DOM elements, which may give you performance issues
 	- Attribute - change the appearance or behavior of an element, component or another directive
  	- Components - used with template (common directive type)
  	  
## Structural Directives: 
  - `*NgIf` `@if(){}` - Conditionally shows or hides element based on a boolean condition
  - `*NgFor` `@for(){}` - Repeat a node for each item in a list
  - `*NgSwitch` `*@switch(){@case(){}@default{}}` - Adds or removes DM+OM elements based on the value of a switch expression

## Built-In attribute directives:
- listen to and modift the behavior of other HTML elements, attributes, properties and componenets
- add to component's `imports` list
### NgClass
- Adds and removes a set of CSS classes
- On the element you'd like to style, add [ngClass] and set it equal to an expression.
- To use NgClass with a method, add the method to the component class.
- 
```ts
import {NgClass} from '@angular/common';
@Component({
  template: '<div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>',
  imports: [NgClass],
})
export class AppComponent {}
```

### NgStyle
- Adds and removes a set of HTML styles
- To use NgStyle, add a method to the component class.
- 
```ts
import {NgStyle} from '@angular/common';
@Component({
  /* ... */
  imports: [NgStyle],
})
export class AppComponent {}
```
```ts
currentStyles: Record<string, string> = {};
  /* . . . */
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }
```
```html
<div [ngStyle]="currentStyles">
  This div is initially italic, normal weight, and extra large (24px).
</div>
```
### NgModel
- Adds two-way data binding to an HTML form element

#### Hosting a directive without DOM element
The Angular `<ng-container>` is a grouping element that doesn't interfere with styles or layout because Angular doesn't put it in the DOM.

## Attribute Directive
- To create a directive - bg generate directive highlight
- ElementRef grants direct access to the host DOM element through its nativeElement property
- 
```ts
import {Directive, ElementRef, inject} from '@angular/core';
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private el = inject(ElementRef);
  constructor() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
<p appHighlight>Highlight me!</p>
```

### Handeling User Events
```ts
import {Directive, ElementRef, inject} from '@angular/core';
@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HighlightDirective {
  private el = inject(ElementRef);
  onMouseEnter() {
    this.highlight('yellow');
  }
  onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```
