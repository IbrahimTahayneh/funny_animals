import AsyncStorage from "@react-native-async-storage/async-storage";

class SharedController {
  private static instance: SharedController;
  private readonly GENDER_KEY = "gender";
  private readonly SELECTED_KEY = "select";

  private constructor() {}

  static getInstance(): SharedController {
    if (!SharedController.instance) {
      SharedController.instance = new SharedController();
    }
    return SharedController.instance;
  }

  async saveGender(gender: string) {
    try {
      await AsyncStorage.setItem(this.GENDER_KEY, gender);
    } catch (error) {
      console.error("Error saving gender:", error);
    }
  }

  async isSelectedGender(select: boolean) {
    try {
      await AsyncStorage.setItem(this.SELECTED_KEY, select.toString());
    } catch (error) {
      console.error("Error saving isSelected:", error);
    }
  }

  async getGender(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(this.GENDER_KEY);
    } catch (error) {
      console.error("Error getting gender:", error);
      return null;
    }
  }

  async isSelected(): Promise<boolean | null> {
    try {
      const selected = await AsyncStorage.getItem(this.SELECTED_KEY);
      return selected ? selected.toLowerCase() === "true" : null;
    } catch (error) {
      console.error("Error getting isSelected:", error);
      return null;
    }
  }
}

export default SharedController.getInstance();
