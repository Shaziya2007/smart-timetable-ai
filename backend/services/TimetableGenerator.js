const Subject = require("../models/Subject");
const Faculty = require("../models/Faculty");
const Classroom = require("../models/Classroom");
const TimeSlot = require("../models/TimeSlot");

const {
    validateTimetableEntry
} = require("./ConflictDetector");


// Load all required data from database
async function loadSchedulingData() {

    const subjects = await Subject.find()
        .populate("department");

    const faculty = await Faculty.find()
        .populate("subjectsHandled");

    const classrooms = await Classroom.find();

    const timeSlots = await TimeSlot.find();


    return {
        subjects,
        faculty,
        classrooms,
        timeSlots
    };
}



// Assign subjects to timetable
async function assignSubjects(subjects) {

    let subjectList = [];


    subjects.forEach(subject => {

        subjectList.push({
            subject: subject._id,
            subjectName: subject.name
        });

    });


    return subjectList;
}



// Find suitable faculty for subject
async function assignFaculty(subjectId, facultyList) {


    const faculty = facultyList.find(faculty =>
        faculty.subjectsHandled.some(
            sub => sub.toString() === subjectId.toString()
        )
    );


    if(!faculty){
        throw new Error(
            "No faculty available for this subject"
        );
    }


    return faculty;
}



// Assign classroom
async function assignClassroom(classrooms) {


    if(classrooms.length === 0){

        throw new Error(
            "No classroom available"
        );

    }


    return classrooms[0];

}



// Assign time slot
async function assignTimeSlot(timeSlots, usedSlots = []) {


    for(let slot of timeSlots){


        const exists = usedSlots.find(
            item =>
            item.day === slot.day &&
            item.startTime === slot.startTime &&
            item.endTime === slot.endTime
        );


        if(!exists){

            return slot;

        }

    }


    throw new Error(
        "No free time slot available"
    );

}



// Main timetable generation function
async function generateTimetable(){


    const data = await loadSchedulingData();


    const timetable = [];


    const subjects = await assignSubjects(
        data.subjects
    );


    for(let item of subjects){


        const faculty = await assignFaculty(
            item.subject,
            data.faculty
        );


        const classroom = await assignClassroom(
            data.classrooms
        );


        const timeSlot = await assignTimeSlot(
            data.timeSlots,
            timetable
        );



        const timetableEntry = {


            subject: item.subject,

            faculty: faculty._id,

            classroom: classroom._id,


            day: timeSlot.day,

            startTime: timeSlot.startTime,

            endTime: timeSlot.endTime


        };



        const isValid =
            await validateTimetableEntry(
                timetableEntry,
                timetable
            );



        if(isValid){


            timetable.push(
                timetableEntry
            );


        }


    }



    return {

        success:true,

        message:"Timetable generated successfully",

        timetable

    };

}



module.exports = {


    generateTimetable,

    loadSchedulingData,

    assignSubjects,

    assignFaculty,

    assignClassroom,

    assignTimeSlot


};