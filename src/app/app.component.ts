import { Component } from '@angular/core';
import { Row } from './data-table/data-table.component';
import { Student } from './data/student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headers: string[];
  students: Student[];
  rows: Row[]; 
  ngOnInit(){
    this.students = JSON.parse(sessionStorage.getItem("students")) || [];
    this.headers = ["Name", "Gender", "Date of birth", "Phone number", "Class"];
    this.rows = this.convertStudentsToRows(this.students);
      //console.log(this.students);
  }

  Reload(isReload: boolean){
    console.log(isReload);
    if (isReload){
      this.students = JSON.parse(sessionStorage.getItem("students")) || [];
      this.rows = this.convertStudentsToRows(this.students);
      console.log(this.students);
    }
  }

  convertStudentsToRows(students: Student[]): any[]{
    return students.map<Row>(st => {
      return new Row([st.name, st.gender, st.dateOfBirth, st.phone, st.class.name]);
    });
  }
}
