import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import 'air-datepicker/air-datepicker.css';
import '../index.css';

export const openCalendar = () => {
  const dateInput = document.getElementById('date');
  if (dateInput) {
    new AirDatepicker(dateInput, {
      isMobile: true,
      autoClose: true,
      selectedDates: [new Date()],
      locale: localeEn,
      onSelect: (formattedDate, date, inst) => {
        setBirthdate(formattedDate);
      },
      buttons: ['today', 'clear'],
    });
  }
};
