import { theme } from "@/theme";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable
                hitSlop={20}
                onPress={() => {}}
              >
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="plants/[plantId]" options={{title: ""}} />
    </Stack>
  );
}
