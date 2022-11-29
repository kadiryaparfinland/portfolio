import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] =[
    {
      id: '1',
      name: 'kadir yapar',
      email: 'kadir@gmail.com',
      phone: 123456,
      salary: 2000,
      department: 'Tech'
    },
    {
      id: '2',
      name: 'kenan ozturk',
      email: 'kenan@gmail.com',
      phone: 654321,
      salary: 3000,
      department: 'Accountant'
    },{
      id: '3',
      name: 'Ayse yapar',
      email: 'ayse@gmail.com',
      phone: 5678912,
      salary: 2500,
      department: 'Human Resources'
    },{
      id: '4',
      name: 'kemal yapar',
      email: 'kemal@gmail.com',
      phone: 2313456,
      salary: 2200,
      department: 'Education'
    },

  ];
  constructor() { }

  ngOnInit(): void {

    

  }

}
