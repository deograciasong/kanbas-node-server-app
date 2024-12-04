import * as quizzesDao from "./dao.js";
export default function quizRoutes(app) {
 app.delete("/api/quizzes/:aid", async (req, res) => {
   const { qid } = req.params;
   const status = await quizzesDao.deletequiz(aid);
   res.send(status);
 });

 app.put("/api/quizzes/:aid", async (req, res) => {
  const { aid } = req.params;
  const quizUpdates = req.body;
  const status = await quizzesDao.updateQuiz(aid, quizUpdates);
  res.send(status);
});


}
