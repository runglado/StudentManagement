import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentListPageComponent } from './student-list-page/student-list-page.component';
import { DataTableComponent } from './data-table/data-table.component';

const appRoutes: Routes = [
  { path: 'students', component: StudentListPageComponent },
  { path: 'students/:id', component: StudentInfoComponent },
  { path: '', component: StudentListPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    StudentListPageComponent,
    DataTableComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

