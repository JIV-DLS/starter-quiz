import {Injectable, OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = [];
  url = 'https://api.myjson.com/bins/13ajhy';

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  index: number;

  constructor(private http: HttpClient) {
    this.setQuizzesFromUrl();
  }

  addQuiz(quiz: Quiz) {
    console.log(quiz);
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz) {
    console.log(quiz);
    this.index = this.quizzes.indexOf(quiz);
    this.quizzes.splice(this.index, 1);
    this.quizzes$.next(this.quizzes);
  }

  setQuizzesFromUrl() {
    this.http.get<Quiz[]>(this.url).subscribe(
      (quiz) => {
        console.log(QUIZ_LIST);
        this.quizzes = quiz['quizzes'];
        console.log( this.quizzes);

        this.quizzes$.next(this.quizzes);
      }
    );
  }

  getQuizAtIndex(id: number)
  {
  const thequiz = this.quizzes.find(
    (quizObject) => {
      return (+quizObject.id) === id;
    }

  )
  }

 /* getQuiz() {
    return this.quizzes;
  }*/
}
