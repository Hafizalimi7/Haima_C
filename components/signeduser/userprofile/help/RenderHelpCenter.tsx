import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from "react-native";
import React from "react";
import { Category, SubCategory } from "@/data/settings";
import useBooleanControl from "@/hooks/useBooleanControl";
import signeduser from "@/constants/icons/signeduser";
import { icons } from "@/constants";

interface RenderHelpCenterProps {
  category: Category;
}

const RenderHelpCenter: React.FC<RenderHelpCenterProps> = ({ category }) => {
  const [activeSection, setActiveSection] = React.useState<SubCategory[]>([]);
  const {
    state: isShowOpen,
    setTrue: setShowOpenTrue,
    setFalse: setShowOpenFalse,
  } = useBooleanControl();

  const handleDetailOpen = (content: SubCategory[]) => {
    if (!content) return;
    setActiveSection(content);
    setShowOpenTrue();
  };

  const handleBack = () => {
    setActiveSection([]);
    setShowOpenFalse();
  };

  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={() => handleDetailOpen(category.subCategories)}
        className="flex-row items-center justify-between px-4 py-5 border-b border-[#E2E2E2]"
      >
        <Text className="text-base font-normal text-grey-800">
          {category.title}
        </Text>

        <Image
          source={signeduser.chevronarrowIcon}
          resizeMode="contain"
          className="w-6 h-6"
        />
      </TouchableOpacity>
      {isShowOpen && (
        <Modal
          visible={isShowOpen}
          animationType="slide"
          transparent={false}
          onRequestClose={handleBack}
        >
          <FlatList
            data={activeSection}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-col items-start justify-start px-4 py-5 w-full gap-y-2">
                <Text className="text-base font-normal text-primary">
                  {item.title}
                </Text>
                <Text className="text-base font-normal text-grey-800 max-w-[340px]">
                  {item.description}
                </Text>
              </View>
            )}
            contentContainerStyle={{
              paddingHorizontal: 10,
              paddingBottom: 15,
            }}
            ListHeaderComponent={() => (
              <View
                className={`flex-row items-center justify-between w-full px-4 py-6`}
              >
                <TouchableOpacity onPress={handleBack}>
                  <Image
                    source={icons.backarrowIcon}
                    alt="back icon"
                    resizeMode="contain"
                    className="w-8 h-8"
                  />
                </TouchableOpacity>
                <Text className="text-lg font-medium text-primary">
                  {activeSection[0].title}
                </Text>
                <View></View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default RenderHelpCenter;
