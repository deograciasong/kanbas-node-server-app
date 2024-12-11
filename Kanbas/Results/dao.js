import model from "./model.js";

// export async function findResultsForUser(userId) {
//   const results = await model.find({ user: userId }).populate("quiz");
//   return results.map((result) => result.quiz);
//  } 
//  export async function findUsersForCourse(courseId) {
//   const enrollments = await model.find({ course: courseId }).populate("user");
//   return enrollments.map((enrollment) => enrollment.user);
//  }

export function createResult(result) {
    delete result._id;
    return model.create(result);
}


export function deleteResult(resultId) {
    return model.findByIdAndDelete(resultId);
}


 export function updateResult(resultId, resultUpdates) {
    return model.findByIdAndUpdate(resultId, resultUpdates, { new: true });
}

export function findResultById(result) {
    return model.findById(result);
}

// export async function findResultsForUser(userId, quizId) {
//     return model.find({ user: userId, quiz: quizId });
// }

export async function findResultsForUser(userId) {
    const results = await model.find({ user: userId }).populate("quiz");
    return results.map((result) => result.quiz);
   } 

export async function findResultsForQuiz(quizId) {
    return model.find({ quiz: quizId });    

    // const results = await model.find({ quiz: quizId })
    // return results.map((result) => result.user);
   }