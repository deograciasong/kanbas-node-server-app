import Database from "../Database/index.js";
export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
}

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function deleteAssignment(aid) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== aid);
}
export function updateAssignemnt(aid, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === aid);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
  }
  


