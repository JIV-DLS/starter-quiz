import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterModule, Routes} from '@angular/router';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';
import { QuestionsComponentComponent } from './questions-component/questions-component.component';
import { QuestionFormComponentComponent } from './question-form-component/question-form-component.component';
import { QuestionListComponentComponent } from './question-list-component/question-list-component.component';

const routes : Routes = [
  {path: '', component: QuizListComponent},
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'edit-quiz' , component: EditQuizComponent},
  {path: 'edit-quiz/:id' , component: EditQuizComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionsComponentComponent,
    QuestionFormComponentComponent,
    QuestionListComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
