import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const newEnrollment = dao.enrollUserInCourse(userId, courseId);
    res.json(newEnrollment);
  });

  app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const unenrollment = dao.unenrollUserFromCourse(userId, courseId);
    res.json(unenrollment);
  });

  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;
    const userEnrollments = dao.findEnrollmentsByUser(userId);
    res.json(userEnrollments);
  });
}