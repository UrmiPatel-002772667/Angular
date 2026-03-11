# Signals
- Signal is a wrapper around a value that notifies interested consumers when that value changes
- can contian any value from primitives to complex data structures
- use signals to create and maange state

**Why Do we need Signal -**
- Without signals angular relies on change detection cycle to find out if some data has changed, then update the UI based on change
- Behavior Subject:
  ```ts
  counter = new BehaviouSubject(0);
  double = counter.pipe(map(count => count * 2));
  ```
- Signal:
  ```ts
  counter = signal(0);
  double = computed(() => counter() * 2);
  ```
- They notify interested consumers when they change
- An **effect** is an operation that runs whenever one or more signal values 
  ```ts
  counter = signal(0);
  effect(() => console.log('counter is : ' + this.counter()));
  ```
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

**Implenetation Varients:**
- **Shorthand Syntax:** Provides simplified syntax for creating linked signals, making your code more concise and easier to maintain
- **Source and Computation:** - Allows to define a sorce signal and a computation function to determine the updated value of the linked signal
```ts
  //shorthand linked signal
   total = linkedSignal(() => {
     return this.quantity() * this.price;
   });
  //Source and computation
  total = linkedSignal({
    source: this.quantity,
    computation: () => this.quantity() * this.price,
  })
```
