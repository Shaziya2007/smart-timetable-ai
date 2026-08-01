export default function SubjectSummary() {

  return (

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-blue-50 rounded-xl p-6">

        <h2 className="text-xl font-bold text-blue-700">

          Most Popular Subject

        </h2>

        <p className="mt-3">

          Artificial Intelligence

        </p>

      </div>

      <div className="bg-green-50 rounded-xl p-6">

        <h2 className="text-xl font-bold text-green-700">

          Highest Credits

        </h2>

        <p className="mt-3">

          Machine Learning (4 Credits)

        </p>

      </div>

      <div className="bg-purple-50 rounded-xl p-6">

        <h2 className="text-xl font-bold text-purple-700">

          AI Recommendation

        </h2>

        <p className="mt-3">

          Add one more lab session for AI practical subjects.

        </p>

      </div>

    </div>

  );

}