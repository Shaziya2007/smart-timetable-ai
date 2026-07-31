const progress=[

{
title:"Faculty Assigned",
value:85
},

{
title:"Course Completion",
value:92
},

{
title:"Timetable Ready",
value:70
}

];

export default function CourseProgress(){

return(

<div className="bg-white rounded-xl shadow-lg p-6">

<h2 className="font-bold text-xl mb-5">

Progress

</h2>

{

progress.map((item,index)=>(

<div key={index} className="mb-5">

<div className="flex justify-between">

<p>{item.title}</p>

<p>{item.value}%</p>

</div>

<div className="w-full bg-gray-200 rounded-full h-3 mt-2">

<div

style={{width:`${item.value}%`}}

className="bg-blue-600 h-3 rounded-full">

</div>

</div>

</div>

))

}

</div>

)

}