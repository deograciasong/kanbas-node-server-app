import * as dao from "./dao.js";

export default function ResultsRoutes(app) {
  app.delete("/api/results/:userId/:qid", (req, res) => {
    const { userId, qid } = req.params;
    const removeResult = dao.unenrollUserFromCourse(userId, qid);
    res.json(removeResult);
  });

  app.get("/api/results/:userId", (req, res) => {
    const { userId } = req.params;
    const userResults = dao.findResultsForUser(userId);
    res.json(userResults);
  });

  app.put("/api/quizzes/:qid/results/:resultId", async (req, res) => {
    const { resultId } = req.params;
    const resultUpdates = req.body;
    const status = await dao.updateResult(resultId, resultUpdates);
    res.send(status);
  });
}