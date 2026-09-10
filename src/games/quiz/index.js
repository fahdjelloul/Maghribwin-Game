// Quiz Game Logic
class QuizGame {
  constructor() {
    this.questions = [];
    this.currentQuestion = 0;
    this.score = 0;
  }

  start() {
    this.loadQuestions();
    return this.questions;
  }

  loadQuestions() {
    this.questions = [
      {
        id: 1,
        question: 'ما عاصمة المغرب؟',
        options: ['فاس', 'الرباط', 'مراكش', 'طنجة'],
        correct: 1
      },
      {
        id: 2,
        question: 'كم عدد سكان المغرب؟',
        options: ['25 مليون', '30 مليون', '35 مليون', '40 مليون'],
        correct: 2
      },
      {
        id: 3,
        question: 'ما أطول جبل في المغرب؟',
        options: ['جبل طارق', 'جبل الأطلس', 'جبل الريف', 'جبل الأنتي'],
        correct: 1
      }
    ];
  }

  answer(questionId, answerIndex) {
    const question = this.questions.find(q => q.id === questionId);
    if (question && answerIndex === question.correct) {
      this.score += 10;
      return true;
    }
    return false;
  }

  getScore() {
    return this.score;
  }
}

module.exports = QuizGame;