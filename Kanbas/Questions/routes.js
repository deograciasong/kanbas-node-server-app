import * as questionsDao from "./dao.js";
export default function questionRoutes(app) {
 app.delete("/api/quizzes/:qid/questions/:questionId", async (req, res) => {
   const { questionId } = req.params;
   const status = await questionsDao.deleteQuestion(questionId);
   res.send(status);
 });

 app.put("/api/quizzes/:qid/questions/:questionId", async (req, res) => {
  const { questionId } = req.params;
  const questionUpdates = req.body;
  const status = await questionsDao.updateQuestion(questionId, questionUpdates);
  res.send(status);
});


}
