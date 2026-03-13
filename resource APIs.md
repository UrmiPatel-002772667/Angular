# crud operations
# resource() & rxResource()
# reusable componenets
self contained piece of code that represents a UI eleemnt or a group of UI eleements
purpose is to be used multiple times throughout an application, making it reusable
### Benifits
- Modularity
- Reusability
- Saving Development TIme
- Maitainability
- Consistency

# Decorators

class Decorators: applied to classes to modify their behavior
ex: @component(), @pipe(), @injectable()  
  
Property Decorators: applied to class properties annd commenly used to modify peroperties within classes
ex: @Input(), @Output(), @ViewChild(), etc  

Method Decorators: applied to class methods and modify their behavior
ex: @HostListener()  

Parameter Decorators: used for parameters inside class constructors and provide additional information about constructor parameters
ex: @Inject()

# Component COmmunication
scenario where two or more components needs to interact 

why is Component Communication Required:
1. **Isolated Components :** components have their own scope, no direct access to others
2. **Data Sharing :** need to share data to achieve specific functionalities
3. **Complex Applications:** componenets must communicate to coordinate actions in complex apps
4. **Reusability :** Component communication enables reuse in different contexts
5. **Decoupling :** Components are independent, easy to modify or replace without affecting the app

Ways for Component Comunication:
1. Parent-to-child: @Input
2. Child-to-Parent: @Output
3. Sibling Components: visa @Input & @Output
4. Parent-to-Child (accessing child): visa @ViewChild & @ContentChild
5. Unrelated Components: via a service

# Session Storage

it is a way to store data temporarily for the duration od a browser session.
It allows you to store key-value pairs that can be accessed and manipulated throughout the application

**When to use session storage**
- temporary data storage
- form data
- navigation history

setItem() stores a value
getItem() gets stored a value
removeItem() removes a stored value
clear() clears all values

# Local Storage
it is a way to store data locally on the client-side even after the browser is closed or user navigates away from the application
It allows you to store key-value pairs that can be accessed and manipulated throughout the application

**When to use local storage**
- persistant data storage
- user preferences
- caching

setItem() stores a value
getItem() gets stored a value
removeItem() removes a stored value
clear() clears all values

# Cookies 
small pieces of data that are stored on the client-side (in the user's browser) and sent to the server with every HTTP request

**When to use cookies**
- authentication
- user preferences
- tracking

  set() - set a cookie
  get() - retrive a value of cookie
  delete() - deletes a cookie

  
|**Parameters**|**Session Storage**|**Local Storage**| **Cookies** |
|----|----|----|----|
|**Duration**|Temporary Storage|Persistant Storage|Persistant or Session based Storage|
|**Security**|deleted when browser tab/window is closed|Not deleted automatically|sent to server with each HTTP request|
|**Storage Limit**|5MB Storage limit|5MB Storage limit|4KB Storage limit|
|**Accessibility**|Client-side access only|Client-side access only|Assessible from both client-side and server-side|
