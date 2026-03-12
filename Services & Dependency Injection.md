# Service
It is a self-contained, reusable piece of code that performs a specific task, making it easily shareable across multiple components within your application.

### When to use :
#### share data between components
```ts
dummyData: any;
constructor(private shared_Data : SharedData){
  this.dummyData = this.shared_Data.userData;
}
<!-- 1. Sharing Data -->
<ul>
  <li>Id: {{dummyData.id}}</li>
  <li>Name: {{dummyData.name}}</li>
  <li>UserName: {{dummyData.username}}</li>
  <li>Email: {{dummyData.email}}</li>
</ul>
```
#### share business logic accross multiple components
```ts
isEligible: boolean;
constructor(private shared_Data : SharedData){
  this.isEligible = this.shared_Data.isELigibleForSubscription();
}
<!-- 2. Sharing Business Logic -->
@if(this.isEligible){
  <h4 class="text-success">{{dummyData.name}} is Eligible for Premium Subscription.</h4>
}
@else{
  <h4 class="text-danger">{{dummyData.name}} is Not Eligible for Premium Subscription.</h4>        
}
```
#### interact woth a database or external data source
```ts
apiData : any;
ngOnInit(): void {
  this.getData()
}
getData(){
  this.shared_Data.getUserData().subscribe(res => {
    this.apiData = res;
  })
}
<!-- 3. Interaction with API -->
@for(data of apiData; track data){
  <ul>
    <li>Id: {{data.id}}</li>
    <li>Name: {{data.name}}</li>
    <li>UserName: {{data.username}}</li>
    <li>Email: {{data.email}}</li>
  </ul>
}
```
### Purpose of using Services:
1. **Code Organization:** Keeps code clean and maintainable
2. **Reuse:** Enables code reuse across multiple components
3. **Depoendency Injection:** Simplifies dependency management and testing

   
# Dependency Injection
- its a service or object that needed by classes to perform some function
- its a design pattern
- angular has built in dependency injection support
- Providers: claa-based, value, factory

**How does it works:**
1. Register a service with angular using `@injectable` or `@ngModule` decorator

2. 
# component communication 
scenario where two or more components needs to interact 
Ways for Component COmunication: 
- Using @Input and @Output
- using @ViewChild and @ContentChild
- using Services
