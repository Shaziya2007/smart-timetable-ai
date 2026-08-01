export default function NotificationModal({
  isOpen,
  onClose,
  title,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">{title}</h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}