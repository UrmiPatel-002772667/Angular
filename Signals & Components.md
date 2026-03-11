
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

# Dependency Injection
- its a service or object that needed by classes to perform some function
- its a design pattern
- angular has built in dependency injection support
- Providers: claa-based, value, factory
