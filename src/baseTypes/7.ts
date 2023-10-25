/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
	Monday = "Monday",
	Tuesday = "Tuesday",
	Wednesday = "Wednesday",
	Thursday = "Thursday",
	Friday = "Friday",
}
enum WeekEnd {
	Saturday = "Saturday",
	Sunday = "Subday",
}
function isWeekend(day: WeekDay | WeekEnd): boolean {
	if (WeekDay) return true;
	return false;
}
