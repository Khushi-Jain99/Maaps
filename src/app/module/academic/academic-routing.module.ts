import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AcademicsComponent } from "src/app/view/academics/academics.component";
import { AssignmentComponent } from "src/app/view/academics/assignment/assignment.component";
import { BooksComponent } from "src/app/view/academics/books/books.component";
import { ExamComponent } from "src/app/view/academics/exam/exam.component";
import { InternalComponent } from "src/app/view/academics/internal/internal.component";
import { SubjectOfferedComponent } from "src/app/view/academics/subject-offered/subject-offered.component";
import { SyllabusComponent } from "src/app/view/academics/syllabus/syllabus.component";
const route:Route[]=[
    {path:'',component:AcademicsComponent,children:[
        {path:'subject',component:SubjectOfferedComponent},
        {path:'syllabus',component:SyllabusComponent},
        {path:'assignment',component:AssignmentComponent},
        {path:'internal',component:InternalComponent},
        {path:'books',component:BooksComponent},
        {path:'exam',component:ExamComponent}
    ]}
]
@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[
        RouterModule
    ]
})
export class AcademicRoutingModule{}