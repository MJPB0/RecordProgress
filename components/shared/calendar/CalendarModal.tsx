import Calendar from "../../icons/Calendar";
import { Modal, Pressable, View } from "react-native";
import { stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";
import { useState } from "react";
import CalendarModalDay from "./day/CalendarModalDay";
import CalendarModalHeader from "./header/CalendarModalHeader";
import CalendarModalWeekdayRow from "./weekdayRow/CalendarModalHeader";
import { DateTime, Interval } from "luxon";
import { equalTo, rangeOfDays } from "../../../utils/date.utils";

interface CalendarModalProps {
  selectedDate: DateTime;
  setSelectedDate: (date: DateTime) => void;
  variant?: "default" | "short";
}

const generateDays = (date: DateTime) => {
  const startOfMonth = date.startOf("month");
  const endOfMonth = date.endOf("month");

  //? PREVIOUS MONTH
  const daysInPreviousMonth = [...Array(startOfMonth.weekday - 1)].map((_, i) =>
    startOfMonth.minus({ days: startOfMonth.weekday - i - 1 })
  );

  //? CURRENT MONTH
  const interval = Interval.fromDateTimes(startOfMonth, endOfMonth);
  const range = rangeOfDays(interval);

  //? NEXT MONTH
  const daysInNextMonth = [...Array(7 - endOfMonth.weekday)].map((_, i) =>
    endOfMonth.plus({ days: i + 1 })
  );

  const generatedDays = [...daysInPreviousMonth, ...range, ...daysInNextMonth];

  //? SPLIT INTO WEEKS
  const weeks = [];
  for (let i = 0; i < generatedDays.length; i += 7) {
    weeks.push(generatedDays.slice(i, i + 7));
  }

  return weeks;
};

export default function CalendarModal({
  selectedDate,
  setSelectedDate,
  variant = "default",
}: CalendarModalProps) {
  const { styles } = useStyles(stylesheet);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(selectedDate);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          onPress={() => setModalVisible(false)}
          style={styles.backgroundPressable}
        >
          <Pressable style={styles.modalContainerPressable}>
            <View style={styles.modalContainer}>
              <CalendarModalHeader date={date} setDate={setDate} />

              {variant === "default" && (
                <>
                  <CalendarModalWeekdayRow />
                  <View style={styles.generatedMonth}>
                    {generateDays(date).map((week) => (
                      <View style={styles.generatedWeek}>
                        {week.map((day) => (
                          <CalendarModalDay
                            date={day}
                            setDate={setSelectedDate}
                            variant={
                              day.month !== date.month
                                ? "disabled"
                                : equalTo(day, selectedDate)
                                ? "active"
                                : "inactive"
                            }
                          />
                        ))}
                      </View>
                    ))}
                  </View>
                </>
              )}
            </View>
          </Pressable>
        </Pressable>
      </Modal>

      <Calendar size="md" isPressable onPress={() => setModalVisible(true)} />
    </View>
  );
}
