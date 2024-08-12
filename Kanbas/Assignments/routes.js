import Database from "../Database/index.js";

export default function AssignmentRoutes(app) {

    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = Database.assignments.filter((a) => a.course === cid);
        res.json(assignments);
    });
    
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const newAssignment = { ...req.body, };
        Database.assignments.push(newAssignment);
        res.send(newAssignment);
    });

    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        console.log(aid);
        Database.assignments = Database.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });

    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const index = Database.assignments.findIndex((a) => a._id === aid);
        console.log(index);
        Database.assignments[index] = {
            ...Database.assignments[index], 
            ...req.body
        };
        res.sendStatus(204);
    });

}