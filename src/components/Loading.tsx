import { ActivityIndicator, SafeAreaView, View } from "react-native";

export function Loading() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#09090A",
        }}
      >
        <ActivityIndicator color="#7C3AED" />
      </View>
    </SafeAreaView>
  );
}
