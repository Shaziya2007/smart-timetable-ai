import {
    PlusCircle,
    FileSpreadsheet,
    Download,
    Users
} from "lucide-react";

const actions = [
    {
        title: "Add Course",
        icon: <PlusCircle size={30}/>,
        color:"bg-blue-600"
    },
    {
        title:"Assign Faculty",
        icon:<Users size={30}/>,
        color:"bg-green-600"
    },
    {
        title:"Import",
        icon:<FileSpreadsheet size={30}/>,
        color:"bg-orange-500"
    },
    {
        title:"Export",
        icon:<Download size={30}/>,
        color:"bg-purple-600"
    }
];

export default function CourseQuickActions(){

return(

<div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

{

actions.map((item,index)=>(

<div
key={index}
className={`${item.color} rounded-xl p-6 text-white cursor-pointer hover:scale-105 duration-300 shadow-lg`}>

<div className="mb-4">

{item.icon}

</div>

<h2 className="font-semibold">

{item.title}

</h2>

</div>

))

}

</div>

)

}