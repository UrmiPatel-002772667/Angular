# Component

- Building block of Angular
- Each component represents a part of a larger web page.
- Organizing an application into components helps provide structure to your project, clearly separating code into specific parts that are easy to maintain and grow over time
- Angular components are standalone, meaning that you can directly add them to the imports array of other components

Every Component must have: 
- A TypeScript class with behaviors such as handling user input and fetching data from a server
- An HTML template that controls what renders into the DOM
- A CSS selector that defines how the component is used in HTML

- Example:
  
    ```ts
    @component({
        selector: 'profile',
        template: ``<h1>Abc</h1>``,
        Styles: `ing{border-radius: 50%;}`
     })	
  
    export class profiles(){}
    ```

	- you can compose multiple components togeter by using `imports: [component_name]`
 <img width="613" height="404" alt="image" src="https://github.com/user-attachments/assets/57ba4ec8-703f-4462-9786-1a4a476f0c65" />

## Selectors

Use a component by creating a matching HTML element in the templates of other componenet
- Angular matches selectors statically at compile-time. Changing the DOM at run-time, either via Angular bindings or with DOM APIs, does not affect the components rendered.
- An element can match exactly one component selector.
- selectors are case sensitive
```ts
  <profile></profile>
  <p>Profile component Used</p>
```

| Selector | Description | Examples |
|---|---|---|
| Type selector | Matches elements based on their HTML tag name, or node name. | `profile-photo` |
| Attribute selector | Matches elements based on the presence of an HTML attribute and, optionally, an exact value for that attribute. | `[dropzone]` `[type="reset"]` |
| Class selector | Matches elements based on the presence of a CSS class. | `.menu-item` |

#### The :not pseudo-class
append this pseudo-class to any other selector to narrow which elements a component's selector matches  
`selector: '[dropzone]:not(textarea)'`

#### Combining Selectors
combine multiple selectors by concatenating them. For example, you can match <button> elements that specify   
`selector: 'button[type="reset"]'`
#### 
consider an attribute selector when you want to create a component on a standard native element.  
For example, if you want to create a custom button component, you can take advantage of the standard `<button>`

## Styling Components - Style Scoping
Every component has a view encapsulation setting that determines how the framework scopes a component's styles.  
There are four view encapsulation modes: `Emulated`, `ShadowDom`, `ExperimentalIsolatedShadowDom`, and `None`  
`encapsulation: ViewEncapsulation.None`  

### ViewEncapsulation.Emulated
 Angular uses emulated encapsulation by default so that a component's styles only apply to elements defined in that component's template.

 #### ::ng-deep
 The Angular team strongly discourages new use of `::ng-deep`. These APIs remain exclusively for backwards compatibility.  

When a selector contains ::ng-deep, Angular stops applying view-encapsulation boundaries after that point in the selector. Any part of the selector that follows ::ng-deep can match elements outside the component’s template.
**Examplee:**   
- A selector like ::ng-deep p a will match `<a>` elements anywhere in the application, descendants of a `<p>` element anywhere in the application.
- In p ::ng-deep a, Angular requires the `<p>` element to come from the component's own template, but the `<a>` element may be anywhere in the application.
- With :host ::ng-deep p a, both the `<a>` and `<p>` elements must be decendants of the component's host element.

### ViewEncapsulation.ShadowDom
Angular attaches a shadow root to the component's host element and renders the component's template and styles into the corresponding shadow tree.  
Styles inside the shadow tree cannot affect elements outside of that shadow tree.

### ViewEncapsulation.ExperimentalIsolatedShadowDom
this mode strictly guarantees that only that component's styles apply to elements in the component's template.  
Global styles cannot affect elements in a shadow tree and styles inside the shadow tree cannot affect elements outside of that shadow tree.

### ViewEncapsulation.None
This mode disables all style encapsulation for the component. Any styles associated with the component behave as global styles.

## Accepting data with input properties
### Reading Inputs
The `input` function returns an `InputSignal`
```ts
import {Component, input, computed} from '@angular/core';
@Component({
})
export class CustomSlider {
  value = input(0);
  label = computed(() => `The slider's value is ${this.value()}`);
}
```
### Required Inputs
declare by calling `input.required` instead of `input`  
- Angular enforces that required inputs must be set when the component is used in a template.

### Configuring Inputs
The input function accepts a config object as a second parameter that lets you change the way that input works.
```ts
@Component({})
export class CustomSlider {
  widthPx = input('', {transform: appendPx});
}
function appendPx(value: number): string {
  return `${value}px`;
}
```
**Input Transforms** - Specify a transform function to change the value of an input when it's set by Angular. 
- The most common use-case for input transforms is to accept a wider range of value types in templates, often including null and undefined

**Type Checking** -  When you specify an input transform, the type of the transform function's parameter determines the types of values that can be set to the input in a template.

**BUilt in Transformations**
- booleanAttribute - treats "false" as boolean false
- numberAttribute - attempts to parse the given value to a number

### Model Inputs 
Model inputs are a special type of input that enable a component to propagate new values back to its parent component  
model inputs allow the component author to write values into the property.  
Use model inputs when you want a component to support two-way binding. This is typically appropriate when a component exists to modify a value based on user interaction.

**Two-way binding with plain properties** - You can bind a plain JavaScript property to a model input.

**Implicit change event** - When you declare a model input in a component or directive, Angular automatically creates a corresponding output for that model. The output's name is the model input's name suffixed with "Change".

## Custom events with outputs

- output names are case sensitive
- When extending a component class, outputs are inherited by the child class

**Emitting event data** - When defining an event listener in a template, you can access the event data from the $event variable
```ts 
this.valueChanged.emit(7);
<custom-slider (valueChanged)="logValue($event)" />
```
**Customizing output names** - accepts parameter that lets you specify a different name for the event in template
```ts
export class CustomSlider {
  changed = output({alias: 'valueChanged'});
}
<custom-slider (valueChanged)="saveVolume()" />
```

**Subscribing to outputs programmatically** - When creating a component dynamically, you can programmatically subscribe to output events from the component instance

```ts
const someComponentRef: ComponentRef<SomeComponent> = viewContainerRef.createComponent(/*...*/);
someComponentRef.instance.someEventProperty.subscribe((eventData) => {
  console.log(eventData);
});
```

## Content Projection with ng-content
You often need to create components that act as containers for different types of content.  
The <ng-content> element is neither a component nor DOM element. Instead, it is a special placeholder that tells Angular where to render content.
```ts
@Component({
  selector: 'custom-card',
  template: '<div class="card-shadow"> <ng-content/> </div>',
})
export class CustomCard {}
```
**Multiple content placeholders** - Angular supports projecting multiple elements into different `<ng-content>` placeholders based on CSS selector. 

```ts
@Component({
  selector: 'card-title',
  template: `<ng-content>card-title</ng-content>`,
})
export class CardTitle {}
@Component({
  selector: 'card-body',
  template: `<ng-content>card-body</ng-content>`,
})
export class CardBody {}
```
**Fallback content** - Angular can show fallback content for a component's `<ng-content>` placeholder if that component doesn't have any matching child content. You can specify fallback content by adding child content to the `<ng-content>` element itself

**Aliasing content for projection** - Angular supports a special attribute, `ngProjectAs`, that allows you to specify a CSS selector on any element. Whenever an element with `ngProjectAs` is checked against an `<ng-content>` placeholder

## Host Elements
The DOM element that matches a component's selector is that component's host element
```ts
// Component source
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo" />`,
})
export class ProfilePhoto {}
```
Here `<profile-photo/>` is host element for ProfilePhoto component

### BInding to the host element
A component can bind properties, attributes, styles and events to its host element. This behaves identically to bindings on elements inside the component's template, but instead defined with the host property in the `@Component` decorator  
```ts
@Component({
  host: {
    'role': 'slider',
    '[attr.aria-valuenow]': 'value',
    '[class.active]': 'isActive()',
    '[style.background]' : `hasError() ? 'red' : 'green'`,
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
  },
})
```

