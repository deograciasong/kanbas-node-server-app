import model from "./model.js";

export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
}

export function createquiz(quiz) {
    delete quiz._id;
    return model.create(quiz);
}

export function deletequiz(qid) {
    return model.findByIdAndDelete(qid);
}

export function updatequiz(qid, quizUpdates) {
    return model.findByIdAndUpdate(qid, quizUpdates, { new: true });
}

export function findUserById (courseId) {
    return model.findById(courseId);
}