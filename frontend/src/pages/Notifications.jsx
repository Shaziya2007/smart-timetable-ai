import { useState } from "react";
import NotificationFilters from "../components/notifications/NotificationFilters";
import NotificationTable from "../components/notifications/NotificationTable";
import NotificationPagination from "../components/notifications/NotificationPagination";
import NotificationModal from "../components/notifications/NotificationModal";
import NotificationForm from "../components/notifications/NotificationForm";

const initialNotifications = [
  {
    id: 1,
    title: "Timetable Generated",
    message: "Your timetable has been generated successfully.",
    recipient: "All Students",
    type: "Success",
    date: "2026-08-01",
  },
  {
    id: 2,
    title: "Room Changed",
    message: "Room changed to Lab 3.",
    recipient: "III IT",
    type: "Update",
    date: "2026-08-02",
  },
  {
    id: 3,
    title: "Holiday Notice",
    message: "College will remain closed on Monday.",
    recipient: "All",
    type: "Announcement",
    date: "2026-08-03",
  },
];

export default function Notifications() {
  const [notifications] = useState(initialNotifications);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      <NotificationFilters
        onAdd={() => setIsModalOpen(true)}
      />

      <NotificationTable notifications={notifications} />

      <NotificationPagination />

      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Notification"
      >
        <NotificationForm
          onClose={() => setIsModalOpen(false)}
        />
      </NotificationModal>
    </div>
  );
}