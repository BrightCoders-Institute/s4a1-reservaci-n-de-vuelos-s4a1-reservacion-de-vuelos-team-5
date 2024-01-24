import {Calendar, LocaleConfig} from 'react-native-calendars';
import { useState } from 'react';

export default function CalendarForScreen() {
  const [selectedDay, setSelectedDay] = useState('');
  return (
    <Calendar
      onDayPress={day => {
        setSelectedDay(day.dateString);
      }}
      markedDates={{
        [selectedDay]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
      
      style={{
        backgroundColor: 'white',
        // calendarBackground: 'red',
        textSectionTitleColor: 'white',
        selectedDayBackgroundColor: 'red',
        selectedDayTextColor: 'red',
        todayTextColor: 'blue',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e'
      }}
    />
  )
}