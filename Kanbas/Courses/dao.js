import model from "./model.js";

export const createCourse = (course) => {
    delete course._id
    return model.create(course);
}

export const findAllCourses = () => model.find();

export const findCourseByNumber = (courseNumber) => model.find({ number: courseNumber});

export const findCourseByName = (courseName) => model.find({name: courseName});

export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course } );

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });