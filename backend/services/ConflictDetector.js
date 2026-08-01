const Faculty = require("../models/Faculty");
const Classroom = require("../models/Classroom");
const TimeSlot = require("../models/TimeSlot");


async function checkFacultyConflict(facultyId, day, startTime, endTime, timetable = []) {

    return timetable.some(
        (item) =>
            item.faculty.toString() === facultyId.toString() &&
            item.day === day &&
            item.startTime === startTime &&
            item.endTime === endTime
    );
}


async function checkRoomConflict(roomId, day, startTime, endTime, timetable = []) {

    return timetable.some(
        (item) =>
            item.classroom.toString() === roomId.toString() &&
            item.day === day &&
            item.startTime === startTime &&
            item.endTime === endTime
    );
}


async function checkSectionConflict(sectionId, day, startTime, endTime, timetable = []) {

    return timetable.some(
        (item) =>
            item.section.toString() === sectionId.toString() &&
            item.day === day &&
            item.startTime === startTime &&
            item.endTime === endTime
    );
}


async function checkFacultyAvailability(facultyId) {

    const faculty = await Faculty.findById(facultyId);

    if (!faculty) {
        throw new Error("Faculty not found");
    }

    return faculty.isAvailable;
}


async function checkRoomAvailability() {

    return true;

}


async function checkRoomCapacity() {

    return true;

}


async function checkLabRequirement() {

    return true;

}


async function checkWeeklyHours() {

    return true;

}


async function validateTimetableEntry(data, timetable = []) {

    const facultyConflict = await checkFacultyConflict(
        data.faculty,
        data.day,
        data.startTime,
        data.endTime,
        timetable
    );


    const roomConflict = await checkRoomConflict(
        data.classroom,
        data.day,
        data.startTime,
        data.endTime,
        timetable
    );


    if(facultyConflict || roomConflict){
        return false;
    }


    return true;
}


module.exports = {

    checkFacultyConflict,
    checkRoomConflict,
    checkSectionConflict,
    checkFacultyAvailability,
    checkRoomAvailability,
    checkRoomCapacity,
    checkLabRequirement,
    checkWeeklyHours,
    validateTimetableEntry

};