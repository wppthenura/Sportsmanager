// ── Payment status calculation logic ─────────────────────

export function getPaymentStatus(payment, monthKey) {
  if (!payment) return "ongoing";

  if (payment.status === "paid")   return "paid";
  if (payment.status === "waived") return "waived";

  const now   = new Date();
  const [year, month] = monthKey.split("-").map(Number);

  // Last day of the month
  const lastDay = new Date(year, month, 0);

  // Last week of the month = last 7 days
  const lastWeekStart = new Date(lastDay);
  lastWeekStart.setDate(lastDay.getDate() - 6);

  if (now > lastDay) return "overdue";     // Month has ended, not paid
  if (now >= lastWeekStart) return "final_week"; // In final week
  return "ongoing";
}

export function getMonthName(monthKey) {
  const [year, month] = monthKey.split("-");
  return new Date(year, parseInt(month) - 1, 1)
    .toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

export function currentMonthKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export function groupAttendanceByMonth(attendance) {
  const groups = {};
  attendance.forEach((a) => {
    if (!a.date) return;
    const mk = a.date.slice(0, 7); // "2026-06"
    if (!groups[mk]) groups[mk] = [];
    groups[mk].push(a);
  });
  return groups;
}