import * as quizzesDao from "./dao.js";
export default function quizRoutes(app) {
 app.delete("/api/quizzes/:qid", async (req, res) => {
   const { qid } = req.params;
   const status = await quizzesDao.deletequiz(qid);
   res.send(status);
 });

 app.put("/api/quizzes/:qid", async (req, res) => {
  const { qid } = req.params;
  const quizUpdates = req.body;
  const status = await quizzesDao.updateQuiz(qid, quizUpdates);
  res.send(status);
});


}
