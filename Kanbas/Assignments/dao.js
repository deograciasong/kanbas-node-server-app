// import Database from "../Database/index.js";
// export function findAssignmentsForCourse(courseId) {
//     const { assignments } = Database;
//     return assignments.filter((assignment) => assignment.course === courseId);
// }

// export function createAssignment(assignment) {
//     const newAssignment = { ...assignment, _id: Date.now().toString() };
//     Database.assignments = [...Database.assignments, newAssignment];
//     return newAssignment;
// }

// export function deleteAssignment(aid) {
//     const { assignments } = Database;
//     Database.assignments = assignments.filter((assignment) => assignment._id !== aid);
// }
// export function updateAssignemnt(aid, assignmentUpdates) {
//     const { assignments } = Database;
//     const assignment = assignments.find((assignment) => assignment._id === aid);
//     Object.assign(assignment, assignmentUpdates);
//     return assignment;
//   }
  
  import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
}

export function createAssignment(assignment) {
    delete assignment._id;
    return model.create(assignment);
}

export function deleteAssignment(aid) {
    return model.findByIdAndDelete(aid);
}

export function updateAssignment(aid, assignmentUpdates) {
    return model.findByIdAndUpdate(aid, assignmentUpdates, { new: true });
}

export function findUserById (courseId) {
    return model.findById(courseId);
}

export function findAssignmentById(assignment) {
    return model.findById(assignment);
}



