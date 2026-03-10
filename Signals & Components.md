# Signals
- Signal is a wrapper around a value that notifies interested consumers when that value changes
- can contian any value from primitives to complex data structures
- use signals to create and maange state

## Writable Signals
- provides an API for updating values directly
- Example: `const count = signal(0);`
- use `.update()` or `.set()` to change the value of writable signal
- to convert writable signals to readonly
	- writableSignal provide a `asReadonly()` method that returns a readonly version of the signal
 	- ```ts
    	private readonly _count = signal(0);
    	readonly count = this._count.asReadonly();
      ```

## Computed Signals
- readonly signals that derive their value from other signals
- computed signal dependencies are dynamic
- ```ts
  const count: WritableSignal<number> = signal(0);
  const doubleCnt: Signal<number> = computed(() => count() * 2);
  ``` 

## Reactive contexts 
- runtime state where Angular monitors signal reads to establish a dependency
- the code reading the signal is the *consumer* and the signal being read is the *producer*
- Angular automatically enters a reactive context when:
	- Executing an `effect`, `afterRenderEffect` callback.
	- Evaluating a `computed` signal.
	- Evaluating a `linkedSignal`.
	- Evaluating a `resource`'s params or loader function.

 ### Reading without tracking dependencies

You may want to execute code which may read signals within a reactive function such as `computed` or `effect` without creating a dependency
 ```ts
effect(() => {
  console.log(`User set to ${currentUser()} and the counter is ${untracked(counter)}`);
});
```
### Reactive context and async operations
- The reactive context is only active for synchronous code.
- Any signal reads that occur after an asynchronous boundary will not be tracked as dependencies.


## linkedSignal 
LinkedSignal function lets you create a signal to hold some state that is intrinsically linked to some other state.
linkedSignal works similarly to signal with one key difference—
- Instead of passing a default value, you pass a computation function, just like computed.
- When the value of the computation changes, the value of the linkedSignal changes to the computation result. This helps ensure that the linkedSignal always has a valid value.
```ts
export class ShippingMethodPicker {
  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();
  // Initialize selectedOption to the first shipping option.
  selectedOption = linkedSignal(() => this.shippingOptions()[0]);
  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }
}
```
# templates 

# Directives 
- used to change the behavior and appearance of DOM element
- can implement all lifecycle hooks
- can not have template
- types:
	- Structural - change DOM layout by adding or removing DOM elements, which may give you performance issues
 	- Attribute - change the appearance or behavior of an element, component or another directive
  	- Components - used with template (common directive type)	
- Built-In attribute directives:
	- listen to and modift the behavior of other HTML elements, attributes, properties and componenets
  - add to component's `imports` list
  - `@if(){}`
  - `@for(){}`
  - `*@switch(){@case(){}@default{}}`
  - `NgClass`
    - Adds and removes a set of CSS classes
  - `NgStyle`
    - Adds and removes a set of HTML styles
  - `NgModel`
    - Adds two-way data binding to an HTML form element

# Pipes
- Used for data transformation
- pipes don't change actual object
- Built in Pipes:
	- DatePipe
	- UpperCasePipe
	- LowerCasePipe
	- CurrencyPipe
	- DecimalPipe
	- PercentPipe
	- JsonPipe
	- SlicePipe
	- AysncPipe 

# component communication 
scenario where two or more components needs to interact 
Ways for Component COmunication: 
- Using @Input and @Output
- using @ViewChild and @ContentChild
- using Services

# Lifecycle Hooks
- component instance has lifecycle hooks which can help you to hook into different events of components
- lifecycle ends when component is destroyed

	- ngOnChanges
	- ngOnInit
	- ngDoCheck
	- ngAfterContentInit
	- ngAfterContentChecked
	- ngAfterViewInit
	- ngAfterViewChecked
	- ngOnDestroy


# Component

- Building block of Angular
- Each component represents a part of a larger web page.
- Organizing an application into components helps provide structure to your project, clearly separating code into specific parts that are easy to maintain and grow over time  

- Example:
  
    ```ts
    @component
     ({
        selector: 'profile',
        template: ``<h1>Abc</h1>``
     })	
  
    export class profiles(){}
    ```

	- you can compose multiple components togeter by using `imports: [component_name]`


