import Calendar from "../../icons/Calendar";
import { Modal, Pressable, View } from "react-native";
import { stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";
import { useState } from "react";
import CalendarModalDay from "./day/CalendarModalDay";
import CalendarModalHeader from "./header/CalendarModalHeader";
import CalendarModalWeekdayRow from "./weekdayRow/CalendarModalHeader";
import { DateTime } from "luxon";
import { equalTo, generateCalendarMonth } from "../../../utils/date.utils";

interface CalendarModalProps {
  selectedDate: DateTime;
  setSelectedDate: (date: DateTime) => void;
  variant?: "default" | "short";
}

export default function CalendarModal({
  selectedDate,
  setSelectedDate,
  variant = "default",
}: CalendarModalProps) {
  const { styles } = useStyles(stylesheet);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(selectedDate);

  const handleAwayPress = () => {
    setModalVisible(false);
  };

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
        <Pressable onPress={handleAwayPress} style={styles.backgroundPressable}>
          <Pressable style={styles.modalContainerPressable}>
            <View style={styles.modalContainer}>
              <CalendarModalHeader date={date} setDate={setDate} />

              {variant === "default" && (
                <>
                  <CalendarModalWeekdayRow />
                  <View style={styles.generatedMonth}>
                    {generateCalendarMonth(date).map((week) => (
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
