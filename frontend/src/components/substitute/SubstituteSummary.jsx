export default function SubstituteSummary() {

  return (

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-green-50 rounded-xl p-6">

        <h2 className="text-xl font-bold text-green-700">

          AI Recommendation

        </h2>

        <p className="mt-3">

          Dr. Ravi is available for today's DBMS class.

        </p>

      </div>

      <div className="bg-blue-50 rounded-xl p-6">

        <h2 className="text-xl font-bold text-blue-700">

          Faculty On Leave

        </h2>

        <p className="mt-3 text-4xl font-bold">

          5

        </p>

      </div>

      <div className="bg-red-50 rounded-xl p-6">

        <h2 className="text-xl font-bold text-red-700">

          Time Conflicts

        </h2>

        <p className="mt-3 text-4xl font-bold">

          0

        </p>

      </div>

    </div>

  );

}