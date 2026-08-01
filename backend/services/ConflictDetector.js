const Faculty = require("../models/Faculty");
const Classroom = require("../models/Classroom");
const TimeSlot = require("../models/TimeSlot");
const Subject = require("../models/Subject");


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


async function checkWeeklyHours(subjectId, timetable = []) {

    const subject = await Subject.findById(subjectId);

    if (!subject) {
        throw new Error("Subject not found");
    }

    const scheduledCount = timetable.filter(
        (item) => item.subject.toString() === subjectId.toString()
    ).length;

    return scheduledCount < subject.credits;   // true = still room for more hours
}


async function validateTimetableEntry(data, timetable = []) {

    const facultyConflict = await checkFacultyConflict(
        data.faculty, data.day, data.startTime, data.endTime, timetable
    );

    const roomConflict = await checkRoomConflict(
        data.classroom, data.day, data.startTime, data.endTime, timetable
    );

    const facultyAvailable = await checkFacultyAvailability(data.faculty);

    const withinWeeklyHours = await checkWeeklyHours(data.subject, timetable);

    if (facultyConflict || roomConflict || !facultyAvailable || !withinWeeklyHours) {
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