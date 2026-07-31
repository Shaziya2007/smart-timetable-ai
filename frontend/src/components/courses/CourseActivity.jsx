const activities = [

"Course Added",

"Faculty Assigned",

"Course Updated",

"Semester Changed",

"Credits Updated"

];

export default function CourseActivity(){

return(

<div className="bg-white rounded-xl shadow-lg p-6">

<h2 className="text-xl font-bold mb-5">

Recent Activity

</h2>

{

activities.map((item,index)=>(

<div
key={index}
className="flex items-center gap-3 border-b py-3">

<div className="h-3 w-3 rounded-full bg-green-500"></div>

<p>{item}</p>

</div>

))

}

</div>

)

}