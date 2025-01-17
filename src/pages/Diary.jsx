import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import TitlePage from '../components/TitlePage';
import DiaryCalendar from '../components/DiaryCalendar';
import DayProducts from '../components/DayProducts';
import DayExercises from '../components/DayExercises';
import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import { getDiaryWorkoutThunk } from '../redux/workouts/workoutsOperations';
import { getDiaryMealsThunk } from '../redux/meals/mealsOperations';
import { DiaryWrapTitle } from './Diary/Diary.styled';

const Diary = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    dispatch(getDiaryMealsThunk(selectedDate));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDiaryWorkoutThunk(selectedDate));
  }, [dispatch]);

  return (
    <SectionTemplate>
      <DiaryWrapTitle>
        <TitlePage>Diary</TitlePage>
        <DiaryCalendar onDateChange={handleDateChange} />
      </DiaryWrapTitle>
      <DayProducts />
      <DayExercises />
    </SectionTemplate>
  );
};

export default Diary;
