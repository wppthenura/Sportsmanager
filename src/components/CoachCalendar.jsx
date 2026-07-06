import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./CoachCalendar.css";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

export default function CoachCalendar({ selectedDate, onSelect, markedDates = [] }) {
  const today = new Date();
  const [viewYear,  setViewYear]  = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-indexed

  // Build calendar grid
  const firstDay   = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrev  = new Date(viewYear, viewMonth, 0).getDate();

  const cells = [];

  // Previous month filler
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, type: "prev" });
  }
  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, type: "current" });
  }
  // Next month filler
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, type: "next" });
  }

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const toKey = (y, m, d) =>
    `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const todayKey = toKey(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <div className="coach-cal">
      {/* Header */}
      <div className="coach-cal__header">
        <button className="coach-cal__nav" onClick={prevMonth}>
          <ChevronLeft size={16} />
        </button>
        <div className="coach-cal__title">
          <span className="coach-cal__month">{MONTHS[viewMonth]}</span>
          <span className="coach-cal__year">{viewYear}</span>
        </div>
        <button className="coach-cal__nav" onClick={nextMonth}>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Day labels */}
      <div className="coach-cal__days-header">
        {DAYS.map(d => (
          <span key={d} className="coach-cal__day-label">{d}</span>
        ))}
      </div>

      {/* Grid */}
      <div className="coach-cal__grid">
        {cells.map((cell, i) => {
          if (cell.type !== "current") {
            return <div key={i} className="coach-cal__cell coach-cal__cell--filler">{cell.day}</div>;
          }

          const key     = toKey(viewYear, viewMonth, cell.day);
          const isToday = key === todayKey;
          const isSel   = key === selectedDate;
          const isMarked = markedDates.some(m => m.startsWith(key));

          return (
            <button
              key={i}
              className={[
                "coach-cal__cell",
                "coach-cal__cell--current",
                isToday  ? "is-today"   : "",
                isSel    ? "is-selected" : "",
                isMarked ? "is-marked"  : "",
              ].join(" ")}
              onClick={() => onSelect(key)}
            >
              <span className="coach-cal__cell-num">{cell.day}</span>
              {isMarked && <span className="coach-cal__dot" />}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="coach-cal__legend">
        <span className="legend-item"><span className="legend-dot today" />Today</span>
        <span className="legend-item"><span className="legend-dot marked" />Attendance saved</span>
        <span className="legend-item"><span className="legend-dot selected" />Selected</span>
      </div>
    </div>
  );
}