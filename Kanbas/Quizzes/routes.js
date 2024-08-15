import * as dao from "./dao.js";

export default function QuizRoutes(app) {

    const createQuiz = async (req, res) => { 
        const { cid } = req.params;
        console.log(req.body);
        const newQuiz = {...req.body, course: cid}
        const quiz = await dao.createQuiz(newQuiz);
        res.json(quiz);
    };

    const findQuizzesForCourse = async (req, res) => { 
        console.log("FINDING QUIZZES ", req.body);
        const { cid } = req.params; 
        console.log("COURSE ID: ", cid);
        const quizzes = await dao.findQuizzesForCourse(cid); 
        console.log("QUIZZES FOUND: ", quizzes);
        res.json(quizzes); 
    };
    
    const updateQuiz = async (req, res) => {
        const { qid } = req.params;
        console.log("QUIZ ID: ", qid);
        const status = await dao.updateQuiz(qid, req.body);
        res.json(status);
    };

    const deleteQuiz = async (req, res) => { 
        const { qid } = req.params;
        console.log("QUIZ ID: ", qid);
        const status = await dao.deleteQuiz(qid);
        res.json(status); 
    };
    
    app.post("/api/courses/:cid/quizzes", createQuiz);
    app.get("/api/courses/:cid/quizzes", findQuizzesForCourse);
    app.put("/api/quizzes/:qid", updateQuiz);
    app.delete("/api/quizzes/:qid", deleteQuiz);

}