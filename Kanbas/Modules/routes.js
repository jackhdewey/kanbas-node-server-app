import Database from "../Database/index.js";

export default function ModuleRoutes(app) {

    app.get("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const modules = Database.modules.filter((m) => m.course === cid);
        res.json(modules);
    });
    
    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const newModule = { ...req.body, course: cid, 
                            _id: new Date().getTime().toString(),
        };
        Database.modules.push(newModule);
        res.send(newModule);
    });

    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        Database.modules = Database.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });

    app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        const index = Database.modules.findIndex((m) => m._id === mid);
        Database.modules[index] = {
            ...Database.modules[index], 
            ...req.body
        };
        res.sendStatus(204);
    });

}