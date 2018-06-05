import { Component, OnInit} from '@angular/core';
import { Row } from '../data-table/data-table.component';
import { Student } from '../data/student';
import { Router } from '@angular/router';

@Component({
  selector: 'student-list-page',
  templateUrl: './student-list-page.component.html',
  styleUrls: ['./student-list-page.component.css']
})
export class StudentListPageComponent implements OnInit {
  headers: string[];
  students: Student[];
  rows: Row[];
  constructor(public router: Router) { }

  ngOnInit(){
    this.students = JSON.parse(sessionStorage.getItem("students")) || [];
    this.headers = ["Name", "Gender", "Date of birth", "Phone number", "Class"];
    this.rows = this.convertStudentsToRows(this.students);
    console.log(this.rows);
  }

  AddNewStudent(){
    this.router.navigate(['students/5']);
  }

  convertStudentsToRows(students: Student[]): Row[]{
    return students.map<Row>(st => {
      return new Row([st.name, st.gender, st.dateOfBirth, st.phone, st.class.name]);
    });
  }
}
