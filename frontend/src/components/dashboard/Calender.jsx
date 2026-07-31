export default function Calendar(){

return(

<div className="bg-white rounded-2xl shadow-lg p-6">

<h2 className="font-bold text-xl">

Calendar

</h2>

<div className="mt-5 grid grid-cols-7 gap-2">

{

Array.from({length:31},(_,i)=>

<div
key={i}
className="bg-blue-50 p-3 rounded-lg text-center hover:bg-blue-600 hover:text-white cursor-pointer"
>

{i+1}

</div>

)

}

</div>

</div>

)

}