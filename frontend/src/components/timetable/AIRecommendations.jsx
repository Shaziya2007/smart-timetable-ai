export default function AIRecommendations() {

  const tips = [
    "Move AI Lab to Friday Afternoon",
    "Faculty workload is balanced",
    "No room conflicts detected",
    "Lunch breaks optimized",
    "Lab sessions grouped together",
  ];

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        AI Suggestions
      </h2>

      <div className="space-y-4">

        {tips.map((tip, index) => (

          <div
            key={index}
            className="bg-green-100 rounded-lg p-4"
          >
            ✅ {tip}
          </div>

        ))}

      </div>

    </div>

  );
}