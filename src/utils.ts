export const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

export const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

export const generateCalendar = (date: Date) => {
    const daysInMonth = getDaysInMonth(date);
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const calendar = [];

    firstDay = firstDay == 0 ? 7 : firstDay;
    
    // Add empty days for previous month
    for (let i = 1; i < firstDay; i++) {
      calendar.push(null);
    }

    // Add current month days
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    return calendar;
  };

export const formatDateLocal = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };