import * as quizzesDao from "./dao.js";
import * as questionsDao from "../Questions/dao.js";
import * as resultsDao from "../Results/dao.js";
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

app.get("/api/quizzes/:qid/questions", async (req, res) => {
  const { qid } = req.params;
  const questions = await questionsDao.findQuestionsForQuiz(qid);
  res.json(questions);
});

app.post("/api/quizzes/:qid/questions", async (req, res) => {
  const { qid } = req.params;
  const question = { ...req.body, quiz: qid, _id: Date.now().toString() };
  const newQuestion = await questionsDao.createQuestion(question);
  res.send(newQuestion);
});



app.get("/api/quizzes/:qid/questions/:questionId", async (req, res) => {
  const { questionId } = req.params;
  const question = await questionsDao.findQuestionById(questionId);
  res.json(question);
});


// Results
app.post("/api/quizzes/:qid/results", async (req, res) => {
  const { resultId } = req.params;
  const result = { ...req.body, result: resultId, _id: Date.now().toString() };
  const newResult = await resultsDao.createResult(result);
  res.send(newResult);
});

app.get("/api/:userId/quizzes/:qid/results", async (req, res) => {
  const { userId, qid } = req.params;
  const result = await resultsDao.findResultsForUser(userId, qid);
  res.json(result);
});

// Results
app.get("/api/quizzes/:qid/results", async (req, res) => {
  const { qid } = req.params;
  const results = await resultsDao.findResultsForQuiz(qid);
  res.json(results);
});


app.get("/api/quizzes/:qid/results/:resultId", async (req, res) => {
  const { resultId } = req.params;
  const result = await resultsDao.findResultById(resultId);
  res.json(result);
});
}
