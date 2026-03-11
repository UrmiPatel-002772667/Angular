# Pipes
Powerful tool for transforming and formatiing data in Angular templates. Essentially, they are functions that take data as input, perform operations on it and return the transformed data.  
When to use:
- Format data for display
- Convert data types
- Perform calculations or aggregations
- Filter or sort data
- Used for data transformation
- pipes don't change actual object
  
- Built in Pipes:
	- **DatePipe** - formats date according to a specified format
	- **UpperCasePipe** -  - converts text to uppercase
	- **LowerCasePipe** - converts text to lowercase
  - **TitleCasePipe** -  - converts text to title case
  - **CurrencyPipe** - formats numbers as currency
  - **DecimalPipe** - formats numbers as decimal value with specified precision
  - **PercentPipe** - formats numbers as percentage
  - **JsonPipe** - converts data to json string
  - **SlicePipe** - extracts a subset of elements from an array
  - **AysncPipe** - unwraps asyncronous data (observations, promises)  <br><br> 
 
   ```ts
  <h3 class="text-primary m-3">Async Type Pipe</h3>
      <h4>AsyncPipe: 
          <ul>
              @for(i of items | async; track i){
                  <li>{{i}}</li>
              }
          </ul></h4>

    <h3 class="text-primary m-3">String Type Pipe</h3>
    <h4>UpperCasePipe: {{angularPipes | uppercase}}</h4>
    <h4>LowerCasePipe: {{angularPipes | lowercase}}</h4>
    <h4>TitleCasePipe: {{angularPipes | titlecase}}</h4>
    <h4>SlicePipe: {{angularPipes | slice : 4: 8}}</h4>
    <h4>SlicePipe: {{angularPipes | slice : 6: 10}}</h4>
    <h4>SlicePipe: {{angularPipes | slice : 6: -10}}</h4>
    <h4>JsonPipe: {{person | json}}</h4>
    <pre>JsonPipe: {{person | json}}</pre>

    <h3 class="text-primary m-3">Number Type Pipe</h3>
    <h4>DatePipe: {{currentDate | date: 'short'}}</h4>
    <h4>DatePipe: {{currentDate | date: 'shortDate'}}</h4>
    <h4>DatePipe: {{currentDate | date: 'shortTime'}}</h4>
    <h4>DatePipe: {{currentDate | date: 'medium'}}</h4>
    <h4>DatePipe: {{currentDate | date: 'mediumDate'}}</h4>
    <h4>DatePipe: {{currentDate | date: 'mediumTime'}}</h4>
    <h4>DatePipe: {{currentDate | date | uppercase}}</h4>

    <h4>DecimalPipe: {{3.141592653 | number: '1.3'}}</h4>
    <h4>DecimalPipe: {{3.141592653 | number: '2.3'}}</h4>

    <h4>PercentPipe: {{0.25 | percent}}</h4>

    <h4>CurrencyPipe: {{20.25 | currency}}</h4>
    <h4>CurrencyPipe: {{20.25 | currency : 'EUR'}}</h4>
    <h4>CurrencyPipe: {{20.25 | currency : 'INR'}}</h4>

   ```
 
   ## Custom Pipes

  **Creation** - Create a new pipe class  
  **implementation** - Implement the pipeTransform Interface  
  **logic** - add transformation logic  
  **declaration** - declare the pipe in your class file  
  **use** - use the custom pipe in your template  
```ts
@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  private DatePipe = new DatePipe('en-US');
  transform(value: any, ...args: any[]): any {
    // if(value == '' || value == null || value == undefined){
    //   return 'NA';
    // }
    // else{
    //   return value ? '+91' + value : value;
    // }
  return this.DatePipe.transform(value, 'dd-MMM-yyyy');
  }
}
```
  ## Types of Pipes
  ### 1. Pure Pypes
  Only executed when the input value changes
  ```ts
@Pipe({
  name: 'pure',
})
export class PurePipe implements PipeTransform {
  private DatePipe = new DatePipe('en-US');
  transform(value: any): any {
    return value * value;
  }
}
```
  ### 2. Impure Pypes
  executed on every change detection cycle, regardless of weather the input value has changed
```ts
@Pipe({
  name: 'impure',
})
export class ImpurePipe implements PipeTransform {
  private DatePipe = new DatePipe('en-US');
  transform(value: any, ...args: any[]): any {
    return new Date().toLocaleTimeString();
  }
}
```
  
