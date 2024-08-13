import * as dao from "./dao.js";

export default function CourseRoutes(app) {

  const createCourse = async (req, res) => { 
    let course = await dao.findCourseByName(req.body.name);
    if (!course[0]) {
      console.log("course NOT FOUND, CREATING COURSE");
      course = await dao.createCourse(req.body);
      res.json(course);
    } else {
      res.status(401).json({ message: "Unable to create course, duplicate name"});
    }
  };

  const findAllCourses = async (req, res) => { 
    const courses = await dao.findAllCourses(); 
    res.json(courses); 
  };

  const updateCourse = async (req, res) => {
    const { cid } = req.params;
    const status = await dao.updateCourse(cid, req.body);
    res.json(status);
  };

  const deleteCourse = async (req, res) => { 
    const status = await dao.deleteCourse(req.params.cid);
    res.json(status); 
  };

  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
  app.put("/api/courses/:cid", updateCourse);
  app.delete("/api/courses/:cid", deleteCourse);
}

