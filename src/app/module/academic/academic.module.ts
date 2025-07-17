import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicsComponent } from 'src/app/view/academics/academics.component';
import { AssignmentComponent } from 'src/app/view/academics/assignment/assignment.component';
import { BooksComponent } from 'src/app/view/academics/books/books.component';
import { ExamComponent } from 'src/app/view/academics/exam/exam.component';
import { InternalComponent } from 'src/app/view/academics/internal/internal.component';
import { SubjectOfferedComponent } from 'src/app/view/academics/subject-offered/subject-offered.component';
import { SyllabusComponent } from 'src/app/view/academics/syllabus/syllabus.component';
import { RouterModule } from '@angular/router';
import { AcademicRoutingModule } from './academic-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AcademicsComponent,
    SubjectOfferedComponent,
    SyllabusComponent,
    AssignmentComponent,
    InternalComponent,
    BooksComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AcademicRoutingModule,
    FormsModule
  ]
})
export class AcademicModule { }
