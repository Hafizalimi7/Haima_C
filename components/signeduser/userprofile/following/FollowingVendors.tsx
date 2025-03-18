import React, { useState } from "react";
import { CustomButton } from "@/components/ui";
import { View, Text, FlatList } from "react-native";
import { getInitials } from "@/helpers/string";
import { EmptyUI } from "@/components/ui/emptyUi";
import signeduser from "@/constants/icons/signeduser";

const vendors = [
  { id: "1", name: "Sarah’s Opulence", username: "Sarah Onifade" },
  { id: "2", name: "Elite Fashion", username: "John Doe" },
  { id: "3", name: "Luxury Trends", username: "Jane Smith" },
];

const FollowingVendors: React.FC = () => {
  const [followingVendors, setFollowingVendors] = useState<string[]>(
    vendors.map((vendor) => vendor.id)
  );

  const toggleFollow = (id: string) => {
    setFollowingVendors((prev) =>
      prev.includes(id)
        ? prev.filter((vendorId) => vendorId !== id)
        : [...prev, id]
    );
  };

  return (
    <View className="w-full pb-5 px-2">
      <FlatList
        data={vendors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isFollowing = followingVendors.includes(item.id);

          return (
            <View className="flex-row items-center justify-between px-4 py-4 w-full">
              <View className="flex-row items-center justify-start gap-x-4">
                <View className="w-16 h-16 bg-lightGrey3 rounded-full flex-row items-center justify-center text-center">
                  <Text className="text-lg font-bold text-primary">
                    {getInitials(item.username)}
                  </Text>
                </View>
                <View className="flex-col items-start justify-start gap-y-1">
                  <Text className="text-base font-medium">{item.name}</Text>
                  <Text className="text-sm text-grey-800">{item.username}</Text>
                </View>
              </View>

              <CustomButton
                handlePress={() => toggleFollow(item.id)}
                className={`px-6 !min-h-9 ${
                  isFollowing ? "bg-secondary" : "bg-primary/10"
                }`}
              >
                <Text
                  className={`${
                    isFollowing ? "font-bold" : "font-medium"
                  } text-sm text-primary `}
                >
                  {isFollowing ? "Follow" : "Following"}
                </Text>
              </CustomButton>
            </View>
          );
        }}
        contentContainerStyle={{
          paddingBottom: 130,
        }}
        ListEmptyComponent={() => (
          <EmptyUI
            iconSource={signeduser.giftIcon}
            content={"You are not following any vendor yet"}
          />
        )}
      />
    </View>
  );
};

export default FollowingVendors;
