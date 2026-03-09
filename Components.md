# Component
- Building block of Angular
- Each component represents a part of a larger web page.
- Organizing an application into components helps provide structure to your project, clearly separating code into specific parts that are easy to maintain and grow over time  

- Example:
  
    `@component
     ({
        selector: 'profile',
        template: ``<h1>Abc</h1>``
     })	`
  
    `export class profiles(){}`

	- you can compose multiple components togeter by using `imports: [component_name]`

	# Signals
- use signals to create and maange state
