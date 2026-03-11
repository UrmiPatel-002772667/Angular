# Lifecycle Hooks
- series of methods that Angular calls at different stages of a component's lifecycle
- these hooks allows developers to execute specific code at specific points, such as when component is initialized, updated or destroyed
- component instance has lifecycle hooks which can help you to hook into different events of components
- lifecycle ends when component is destroyed

**1. ngOnChanges** - called when an input property of the component changes
```ts
ngOnChanges(changes: SimpleChanges): void {
    //used for component input property
    console.log("1. ngOnChanges called")
  }
```  
**2. ngOnInit** - called once after the component is initialized
```ts
  ngOnInit(): void {
    //usefor API call
    console.log("2. ngOnInit called")
  }
```  
**3. ngDoCheck** - called every time change detection runs
```ts
  ngDoCheck(): void {
    //Use for every change detection
    console.log("3. ngDoCheck Called")
  }
```  
**4. ngAfterContentInit** - called after the component's content has been initialized
```ts
ngAfterContentInit(): void {
    //use for ng-content
    console.log("4. ngAfterContentInit Called")    
  }
```   
**5. ngAfterContentChecked** - called after the component's content has been checked
```ts
  ngAfterContentChecked() : void {
    //after ng-content has been checked 
    console.log("5. ngAfterContentChecked Called")    
  }
```   
**6. ngAfterViewInit** - called after the component's view has been initialized
```ts
  ngAfterViewInit(): void {
    //use for viewChild
    console.log("6. ngAfterViewInit Called")   
  }
```  
**7. ngAfterViewChecked** - called after the component's view has been checked
```ts
  ngAfterViewChecked(): void {
    //after view is checked
    console.log("7. ngAfterViewChecked Called")    
  }
```  
**8. ngOnDestroy** - called just before the component is destroyed
```ts
ngOnDestroy() : void {
    // before componwnt is destroyed
    console.log("8. ngOnDestroy Called")    
  }
```
```
