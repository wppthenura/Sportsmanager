export const COACH_EMAIL = "wppulindum@gmail.com".toLowerCase();

export function isCoachEmail(email) {
  return String(email || "").trim().toLowerCase() === COACH_EMAIL;
}