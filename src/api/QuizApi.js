import Api from './Api';

class QuizApi extends Api {
  static listQuizes() {
    return this.getClient().get(`/Quiz/List`);
  }

  static getQuiz(id) {
    return this.getClient().get(`/Quiz/Quiz/${id}`);
  }

  static submitQuiz(id, answer) {
    return this.getClient().post(`/Quiz/Quiz/${id}`, answer);
  }
}

export default QuizApi;
