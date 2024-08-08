import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

    const createModule = async (req, res) => { 
        const { cid } = req.params;
        const newModule = {...req.body, course: cid}
        const module = await dao.createModule(newModule);
        res.json(module);
    };

    const findModulesForCourse = async (req, res) => { 
        const { cid } = req.params; 
        console.log(cid);
        const modules = await dao.findModulesForCourse(cid); 
        res.json(modules) 
    };
    
    const updateModule = async (req, res) => {
        const { mid } = req.params;
        const status = await dao.updateModule(mid, req.body);
        res.json(status);
    };

    const deleteModule = async (req, res) => { 
        const status = await dao.deleteModule(req.params.mid);
        res.json(status); 
    };
    
    app.post("/api/courses/:cid/modules", createModule);
    app.get("/api/courses/:cid/modules", findModulesForCourse);
    app.put("/api/modules/:mid", updateModule);
    app.delete("/api/modules/:mid", deleteModule);

}