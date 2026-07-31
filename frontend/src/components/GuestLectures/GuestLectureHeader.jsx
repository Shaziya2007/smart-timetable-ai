export default function GuestLectureHeader() {

    return (

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-4xl font-bold">
                        Guest Lecture Management
                    </h1>

                    <p className="mt-2">
                        Schedule and manage guest lectures efficiently.
                    </p>

                </div>

                <button className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">

                    + Schedule Lecture

                </button>

            </div>

        </div>

    );

}