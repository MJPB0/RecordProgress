import Calendar from "../../icons/Calendar";
import { Modal, Pressable, View } from "react-native";
import { stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";
import { useState } from "react";
import CalendarModalDay from "./day/CalendarModalDay";
import CalendarModalHeader from "./header/CalendarModalHeader";
import CalendarModalWeekdayRow from "./weekdayRow/CalendarModalHeader";

interface CalendarModalProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  variant?: "default" | "short";
}

export default function CalendarModal({
  selectedDate,
  setSelectedDate,
  variant = "default",
}: CalendarModalProps) {
  const { styles, theme } = useStyles(stylesheet);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState<Date>(selectedDate);

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
              <CalendarModalHeader
                selectedDate={date}
                setSelectedDate={setDate}
              />

              <CalendarModalWeekdayRow />

              <View
                style={{
                  flexDirection: "column",
                  marginTop: theme.margins.md,
                  gap: theme.margins.sm,
                }}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <View
                    style={{
                      flexDirection: "row",
                      gap: theme.margins.sm,
                    }}
                  >
                    {Array.from({ length: 7 }, (_, j) => (
                      <CalendarModalDay
                        day={(i * 7 + j).toString()}
                        variant={
                          i * 7 + j < 4 || i * 7 + j > 31
                            ? "disabled"
                            : i * 7 + j !== 9
                            ? "inactive"
                            : "active"
                        }
                      />
                    ))}
                  </View>
                ))}
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>

      <Calendar size="md" isPressable onPress={() => setModalVisible(true)} />
    </View>
  );
}
