# Angular Forms
Module in the Angular framework that provides a way to handle user input and validate form data.  
They offer a robust ans scalable way to maange forms in Angular Applications.

**When to Use:**
- Complex form validations
- large scale applicaitons
- Dynamic Form Gdeneration
- Tow-way Data Binding

 
## 1. Template-Driven Forms 
- created using HTML templates and are suitable for simple forms
-> FormsModule - import FomModule
-> HTML Form - Build HTML template
-> ngForm - Converts to Template-driven form
-> FormControl - Vasic building block of angular forms
-> Submit the Form - use ngSubmit to submit form data

### Built-In Validators 
- **required** - ensures form control has a value
- **minLength** - ensures the form control value meets the minimum length
- **maxLength** -  ensures the form control value does not exceed the max length
- **pattern** - ensures the form control value matches a specified pattern
- **emial** ensures the form control value is a valid email address  

**Novalidate** used for:
- custom validation: disable browser validation for custom JavaScript validation
- Server-Side Validation: bypass client-side validation for server-side checks
- Progressive Enhancement: fallback for older browsers without HTML5 validation

**Advantages:**
- Easy to use - minimal setup required
- rapid prototyping - quick creation and testing
- simple validation - easy error handeling
- less code required - reduced development time
- easy data binding - automatic connection to data models
- development - streamlined development process

**Disadvantages:**
- limited control - customization is restricted
- difficult debugging - hard to identify issues
- limited reusability - component aren't reusable
- tight coupling - logic iss hard to change
- not suitable for complex forms
- limited unit testing capability

## 2. Reactive Forms
- created programmatically using the FormControl and FormGroup classes and are suitable to complex forms

**Steps to create a reactive form**
- import the ReactiveFormsModule
- Create a form instance using the FormGroup
- Create a form template and map form instance to FormGroup
- add form controls to your template form field
- handle form submission

### **Building BLocks:**
- **FormControl** - single form control (input field, checkbox)
- **FormGroup** - group of form control
- **FormArray** - array of form controls or groups

```ts
constructor(private fb : FormBuilder){
    // this.reactiveForm = new FormGroup({
    //   firstName: new FormControl(""),
    //   lastName: new FormControl(""),
    //   email: new FormControl(""),
    //   password: new FormControl(),
    //   isCheck: new FormControl(),
    //   address: new FormGroup({
    //     city: new FormControl(""),
    //     street: new FormControl(""),
    //     pincode: new FormControl()
    //   })

    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.maxLength(15), Validators.email]],
      password: ['',[Validators.required]],
      isCheck: [],
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: []
      }),
      skills: this.fb.array([])
    })
    this.reactiveForm.controls['isCheck'].disable();
  }
```
