import React from "react";
import { FormikErrors } from "formik";
import * as ImagePicker from "expo-image-picker";
import { sellItemFormValue, UploadImageType } from "@/types/sell";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import useBooleanControl from "@/hooks/useBooleanControl";
import { icons } from "@/constants";
import PhotoTipModal from "./PhotoTipModal";

interface UploadProductImagesProps {
  values: sellItemFormValue;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<sellItemFormValue>>;
  error?: string;
}

const UploadProductImages: React.FC<UploadProductImagesProps> = ({
  values,
  setFieldValue,
  error,
}) => {
  const {
    state: isPhotoTipModalVisible,
    setTrue: setIsPhotoTipModalVisibleTrue,
    setFalse: setIsPhotoTipModalVisibleFalse,
  } = useBooleanControl();

  const flatListRef = useRef<FlatList>(null);

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsMultipleSelection: true,
      selectionLimit: 20,
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset, index) => ({
        uri: asset.uri,
        name: asset.fileName || `image_${index}`,
        type: asset.type || "image/jpeg",
      }));

      const uniqueImages = selectedImages.filter(
        (asset) => !values.images.some((image) => image.name === asset.name)
      );

      if (uniqueImages.length === 0) {
        Alert.alert("Duplicate Image", "This image is already selected.");
      } else {
        setFieldValue("images", [...values.images, ...uniqueImages]);
        setTimeout(() => {
          flatListRef.current?.scrollToEnd({ animated: true });
        }, 100);
      }
    }
  };

  const removeImage = (index: number) => {
    const filterImage = values.images.filter((_, i) => i !== index);
    setFieldValue("images", filterImage);
  };

  const renderSelectedImage = ({
    item,
    index,
  }: {
    item: UploadImageType;
    index: number;
  }) => (
    <View
      key={index}
      className="w-16 h-16 border border-grey rounded-lg relative mr-2"
    >
      <View className="w-full h-full flex-row items-center justify-center">
        <Image
          source={{ uri: item.uri }}
          resizeMode="cover"
          className="w-full h-full rounded-lg"
        />
      </View>
      <View className="w-full h-full rounded-lg bg-black/20 flex-row items-center justify-center absolute top-0">
        <TouchableOpacity
          onPress={() => removeImage(index)}
          className="absolute top-0 right-1"
        >
          <Ionicons name="close-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <React.Fragment>
      <View className="w-full flex-col items-start justify-start gap-y-3">
        <TouchableOpacity onPress={pickImages} className="w-full">
          <View
            className={`w-full bg-white border-[1.5px] border-dashed rounded-lg p-4 h-44 flex-col items-center justify-center gap-y-5 ${
              error ? "border-danger" : "border-[#D0D5DD]"
            }`}
          >
            <Image
              source={icons.uploadIcon}
              resizeMode="contain"
              className="w-14 h-14 rounded-full"
            />
            <View className="flex-col items-center justify-center">
              <Text className="text-base font-semibold text-primary text-center">
                Tap to upload image
              </Text>
              <Text className="text-sm font-normal text-grey-800 text-center">
                You can add up to 20 images
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          {values.images.length > 0 && (
            <View className="w-full">
              <FlatList
                ref={flatListRef}
                data={values.images}
                renderItem={({ item, index }) =>
                  renderSelectedImage({ item, index })
                }
                keyExtractor={(item) => item.uri}
                horizontal
              />
            </View>
          )}
        </View>
        <TouchableOpacity onPress={setIsPhotoTipModalVisibleTrue}>
          <Text className="text-base font-bold text-secondary">Photo tips</Text>
        </TouchableOpacity>
      </View>
      <PhotoTipModal
        show={isPhotoTipModalVisible}
        onClose={setIsPhotoTipModalVisibleFalse}
      />
    </React.Fragment>
  );
};

export default UploadProductImages;
