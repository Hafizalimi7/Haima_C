import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DetailHeader } from "@/components/signeduser/details";
import { CustomButton } from "@/components/ui";
import { getInitials } from "@/helpers/string";
import { EmptyUI } from "@/components/ui/emptyUi";
import signeduser from "@/constants/icons/signeduser";

const vendors = [
  { id: "1", name: "Sarah’s Opulence", username: "Sarah Onifade" },
  { id: "2", name: "Elite Fashion", username: "John Doe" },
  { id: "3", name: "Luxury Trends", username: "Jane Smith" },
  { id: "4", name: "Honey Feed Collections", username: "Umu Aisha" },
  { id: "5", name: "Caroline Ornaments", username: "Caoline Ogechi" },
];

export default function UserFollowerScreen() {
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
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader title="Followers" showShareIcon={false} />
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
                    <Text className="text-sm text-grey-800">
                      {item.username}
                    </Text>
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
              iconSource={signeduser.usersIcon}
              content={"You are not following any vendor yet"}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
