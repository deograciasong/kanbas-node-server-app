import Database from "../Database/index.js";

export function enrollInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export const enrollUserInCourse = (userId, courseId) => {
  const { enrollments } = Database;
  const newEnrollment = { _id: Date.now(), user: userId, course: courseId };
  enrollments.push(newEnrollment);
  return newEnrollment;
};

export const unenrollUserFromCourse = (userId, courseId) => {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (e) => e.user !== userId || e.course !== courseId
  );
  return { user: userId, course: courseId };
};

export const findEnrollmentsByUser = (userId) => {
  return Database.enrollments.filter((e) => e.user === userId);
};