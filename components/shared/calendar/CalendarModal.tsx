import Calendar from "../../icons/Calendar";
import { Modal, Pressable, View } from "react-native";
import { stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";
import { useState } from "react";
import Arrow from "../../icons/Arrow";
import { PressableOpacity } from "react-native-pressable-opacity";
import ThemedButton from "../ThemedButton";
import { weekdays } from "../constants/weekday";
import ThemedText from "../ThemedText";

interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  variant?: "default" | "short";
}

export default function CalendarModal({ variant = "default" }: CalendarProps) {
  const { theme } = useStyles(stylesheet);
  const [modalVisible, setModalVisible] = useState(false);

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
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",

            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Pressable>
            <View
              style={{
                backgroundColor: theme.colors.background.accent,
                borderRadius: theme.sizes.sm,
                padding: theme.paddings.md,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <PressableOpacity
                  style={{
                    backgroundColor: theme.colors.background.secondary,
                    padding: theme.paddings.md,
                    borderRadius: theme.sizes.md,
                  }}
                  activeOpacity={0.5}
                >
                  <Arrow direction="left" isPressable size="sm" />
                </PressableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: theme.margins.lg,
                  }}
                >
                  <ThemedButton
                    title="September"
                    titleSize="lg"
                    style={{
                      backgroundColor: theme.colors.background.secondary,
                      marginRight: theme.margins.sm,
                    }}
                    titleStyle={{
                      lineHeight: theme.sizes.sm,
                      fontFamily: theme.font.family.secondary,
                      fontWeight: theme.font.weight.bold,
                    }}
                  />
                  <ThemedButton
                    title="2024"
                    titleSize="lg"
                    style={{
                      backgroundColor: theme.colors.background.secondary,
                    }}
                    titleStyle={{
                      lineHeight: theme.sizes.sm,
                      fontFamily: theme.font.family.secondary,
                      fontWeight: theme.font.weight.bold,
                    }}
                  />
                </View>
                <PressableOpacity
                  style={{
                    backgroundColor: theme.colors.background.secondary,
                    padding: theme.paddings.md,
                    borderRadius: theme.sizes.md,
                  }}
                  activeOpacity={0.5}
                >
                  <Arrow direction="right" isPressable size="sm" />
                </PressableOpacity>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: theme.margins.md,
                }}
              >
                {weekdays.map((day) => (
                  <ThemedText
                    style={{
                      flex: 1,
                      fontSize: theme.font.sizes.md,
                      color: theme.colors.text.accent,
                      fontFamily: theme.font.family.secondary,
                      fontWeight: theme.font.weight.regular,
                      textAlign: "center",
                    }}
                  >
                    {day.slice(0, 2)}
                  </ThemedText>
                ))}
              </View>

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
                      <View
                        style={{
                          backgroundColor: theme.colors.background.secondary,
                          borderRadius: theme.sizes.xxs,
                          padding: theme.paddings.md,
                          flex: 1,
                        }}
                      >
                        <ThemedText
                          style={{
                            fontSize: theme.font.sizes.md,
                            color: theme.colors.text.accent,
                            fontFamily: theme.font.family.secondary,
                            textAlign: "center",
                          }}
                        >
                          {i * 7 + j}
                        </ThemedText>
                      </View>
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
