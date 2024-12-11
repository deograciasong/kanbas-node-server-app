import model from "./model.js";

export async function findQuestionsForQuiz(quizId) {
    return model.find({ quiz: quizId });
    
}
 

export function createQuestion(question) {
    delete question._id;
    return model.create(question);
}


export function deleteQuestion(questionId) {
    return model.findByIdAndDelete(questionId);
}

export function updateQuestion(questionId, questionUpdates) {
    return model.findByIdAndUpdate(questionId, questionUpdates, { new: true });
}


export function findQuestionById(questionId) {
    return model.findById(questionId);
}