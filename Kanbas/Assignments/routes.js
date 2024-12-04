import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
 app.delete("/api/assignments/:aid", async (req, res) => {
   const { aid } = req.params;
   const status = await assignmentsDao.deleteAssignment(aid);
   res.send(status);
 });

 app.put("/api/assignments/:aid", async (req, res) => {
  const { aid } = req.params;
  const assignmentUpdates = req.body;
  const status = await assignmentsDao.updateAssignment(aid, assignmentUpdates);
  res.send(status);
});



}
