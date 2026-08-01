const Timetable = require("../models/Timetable");
const timetableGenerator = require("../services/TimetableGenerator");


// @desc Create timetable entry manually
// @route POST /api/timetable
const createTimetableEntry = async (req, res) => {
  try {

    const {
      department,
      semester,
      section,
      subject,
      faculty,
      classroom,
      timeSlot,
      academicYear
    } = req.body;


    if (
      !department ||
      !semester ||
      !section ||
      !subject ||
      !faculty ||
      !classroom ||
      !timeSlot ||
      !academicYear
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }


    const entry = await Timetable.create({
      department,
      semester,
      section,
      subject,
      faculty,
      classroom,
      timeSlot,
      academicYear
    });


    res.status(201).json(entry);


  } catch (error) {

    res.status(500).json({
      message: "Server error",
      error: error.message
    });

  }
};




// @desc Get timetable with filters
// @route GET /api/timetable
const getTimetables = async (req, res) => {

  try {


    const filter = {};


    if(req.query.department)
      filter.department = req.query.department;


    if(req.query.semester)
      filter.semester = req.query.semester;


    if(req.query.section)
      filter.section = req.query.section;


    if(req.query.faculty)
      filter.faculty = req.query.faculty;


    if(req.query.academicYear)
      filter.academicYear = req.query.academicYear;



    const timetables = await Timetable.find(filter)

      .populate("department", "name code")

      .populate("subject", "name code")

      .populate("faculty", "name email")

      .populate("classroom", "roomNumber type")

      .populate("timeSlot", "day startTime endTime");



    res.status(200).json(timetables);



  } catch(error){


    res.status(500).json({
      message:"Server error",
      error:error.message
    });


  }

};






// @desc Update timetable
// @route PUT /api/timetable/:id
const updateTimetableEntry = async (req,res)=>{

  try{


    const entry =
      await Timetable.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
      );



    if(!entry){

      return res.status(404).json({
        message:"Timetable entry not found"
      });

    }



    res.status(200).json(entry);



  }catch(error){


    res.status(500).json({
      message:"Server error",
      error:error.message
    });


  }

};






// @desc Delete timetable
// @route DELETE /api/timetable/:id
const deleteTimetableEntry = async(req,res)=>{

  try{


    const entry =
      await Timetable.findByIdAndDelete(
        req.params.id
      );



    if(!entry){

      return res.status(404).json({
        message:"Timetable entry not found"
      });

    }



    res.status(200).json({
      message:"Timetable entry deleted"
    });



  }catch(error){


    res.status(500).json({
      message:"Server error",
      error:error.message
    });


  }

};







// @desc Generate timetable automatically
// @route POST /api/timetable/generate
const generateTimetable = async(req,res)=>{

  try{


    const result =
      await timetableGenerator.generateTimetable();



    res.status(200).json(result);



  }catch(error){


    res.status(500).json({

      message:"Timetable generation failed",

      error:error.message

    });


  }

};






module.exports = {

  createTimetableEntry,

  getTimetables,

  updateTimetableEntry,

  deleteTimetableEntry,

  generateTimetable

};