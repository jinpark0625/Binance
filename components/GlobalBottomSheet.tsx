import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { bottomSheetState } from "@/atom/bottomSheetAtom";
import BottomSheet from "./BottomSheet";
import { useSharedValue } from "react-native-reanimated";

const GlobalBottomSheet = () => {
  const [bottomSheet, setBottomSheet] = useRecoilState(bottomSheetState);
  const isOpen = useSharedValue(false);

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
    setBottomSheet((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  useEffect(() => {
    isOpen.value = bottomSheet.isOpen;
  }, [bottomSheet.isOpen]);

  return (
    <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet} duration={200}>
      {bottomSheet.content}
    </BottomSheet>
  );
};

export default GlobalBottomSheet;
