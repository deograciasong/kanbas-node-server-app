import * as questionsDao from "./dao.js";
export default function questionRoutes(app) {
 app.delete("/api/quizzes/:qid/:questionId", async (req, res) => {
   const { questionId } = req.params;
   const status = await quizzesDao.deletequiz(questionId);
   res.send(status);
 });

 app.put("/api/quizzes/:qid/:questionId", async (req, res) => {
  const { questionId } = req.params;
  const questionUpdates = req.body;
  const status = await quizzesDao.updateQuiz(questionId, questionUpdates);
  res.send(status);
});


}
