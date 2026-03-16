import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  imports: [],
  templateUrl: './ngfor.html',
  styleUrl: './ngfor.css',
})
export class Ngfor {
  employee: any[] = [
    {empName: 'John', empNum: 1, empEmail: 'john@gmail.com', empDept: 'IT'},
    {empName: 'Rick', empNum: 2, empEmail: 'rick@gmail.com', empDept: 'HR'},
    {empName: 'Bob', empNum: 3, empEmail: 'bob@gmail.com', empDept: 'Sales'},
  ];
  companyList: string[] = [ 'AtoS', 'Capegemini', 'Accenture', 'IBM' ];
}
