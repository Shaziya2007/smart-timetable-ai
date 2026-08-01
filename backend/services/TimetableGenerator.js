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



// Assign subjects to timetable — one entry per required weekly hour
async function assignSubjects(subjects) {

    let subjectList = [];

    subjects.forEach(subject => {

        const hoursNeeded = subject.credits;   // e.g. credits = 4 → 4 sessions/week

        for (let i = 0; i < hoursNeeded; i++) {
            subjectList.push({
                subject: subject._id,
                subjectName: subject.name
            });
        }

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

// Try every (room, timeslot) combination until one passes conflict validation
async function findAvailableSlot(entryBase, classrooms, timeSlots, timetable) {

    for (let room of classrooms) {

        for (let slot of timeSlots) {

            const candidate = {
                ...entryBase,
                classroom: room._id,
                day: slot.day,
                startTime: slot.startTime,
                endTime: slot.endTime
            };

            const isValid = await validateTimetableEntry(candidate, timetable);

            if (isValid) {
                return candidate;   // first free combo wins
            }
        }
    }

    return null;   // genuinely no free combination exists
}

// Main timetable generation function
async function generateTimetable(){

    const data = await loadSchedulingData();

    const timetable = [];
    const unscheduled = [];

    const subjects = await assignSubjects(data.subjects);

    for (let item of subjects) {

        try {

            const faculty = await assignFaculty(item.subject, data.faculty);

            const entryBase = {
                subject: item.subject,
                faculty: faculty._id
            };

            const entry = await findAvailableSlot(
                entryBase,
                data.classrooms,
                data.timeSlots,
                timetable
            );

            if (entry) {
                timetable.push(entry);
            } else {
                unscheduled.push({
                    subject: item.subject,
                    subjectName: item.subjectName,
                    reason: "No available room/timeslot combination found"
                });
            }

        } catch (err) {

            unscheduled.push({
                subject: item.subject,
                subjectName: item.subjectName,
                reason: err.message
            });

        }
    }

    return {
        success: true,
        message: "Timetable generated successfully",
        timetable,
        unscheduled
    };
}


module.exports = {
    generateTimetable,
    loadSchedulingData,
    assignSubjects,
    assignFaculty,
    assignClassroom,
    assignTimeSlot,
    findAvailableSlot
};