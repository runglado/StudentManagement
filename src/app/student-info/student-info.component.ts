import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Lop } from '../data/class';
import { Student } from '../data/student';
import { Router } from '@angular/router';

@Component({
  selector: 'student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  classes = [new Lop(1, "KHTM1"), new Lop(2, "KHTM2"), new Lop(3, "KHTM3")];
  student: Student;
  students: Student[];
  dateValid: boolean;
 // @Output() reload = new EventEmitter<boolean>();
  constructor(public router: Router) {
    this.student = new Student();
    this.student.class = new Lop(0, "");
    this.dateValid = true;
  }

  ngOnInit() {
    
    this.students = JSON.parse(sessionStorage.getItem("students")) || [];
  }

  onSubmit() {
    this.student.class.name = this.getClassNameById(this.student.class.id);
    this.students.push(this.student);
    sessionStorage.setItem("students", JSON.stringify(this.students));
    this.router.navigate(['students']);
    // console.log(this.student);
    //this.reload.emit(true);
  }

  validate(){
    var d = Date.parse(this.student.dateOfBirth);
    if (d)
      this.dateValid = true;
    else this.dateValid = false;
  }

  getClassNameById(id: number){
    return this.classes.find(cl => cl.id == id).name;
  }
}
