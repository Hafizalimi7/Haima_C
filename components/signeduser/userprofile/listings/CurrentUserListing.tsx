import React from "react";
import { View, Dimensions, FlatList } from "react-native";
import { products } from "@/data/products";
import { OrderItem, ProductItem } from "../../products";
import { EmptyUI } from "@/components/ui/emptyUi";
import signeduser from "@/constants/icons/signeduser";

interface CurrentUserListingProps {
  currentTab: string;
}

const { width } = Dimensions.get("window");
const COLUMN_GAP = 10;
const NUM_COLUMNS = 2;
const ITEM_WIDTH = (width - COLUMN_GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

const CurrentUserListing: React.FC<CurrentUserListingProps> = ({
  currentTab,
}) => {
  let pageContentTab;

  if (currentTab === "item") {
    pageContentTab = <UserListingTab />;
  } else {
    pageContentTab = <PurchasesTab />;
  }
  return <View className="w-full">{pageContentTab}</View>;
};

const UserListingTab = () => {
  return (
    <View className="w-full">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            type="user"
            product={item}
            style={{ width: ITEM_WIDTH }}
            className="mx-0 mb-4"
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 380,
          paddingHorizontal: COLUMN_GAP,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginTop: COLUMN_GAP,
        }}
        ListEmptyComponent={() => (
          <EmptyUI content={"You dont have any listed item yet"} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const PurchasesTab = () => {
  return (
    <View className="w-full">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderItem
            product={item}
            style={{ width: ITEM_WIDTH }}
            className="mx-0 mb-4"
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 380,
          paddingHorizontal: COLUMN_GAP,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginTop: COLUMN_GAP,
        }}
        ListEmptyComponent={() => (
          <EmptyUI
            iconSource={signeduser.purchaseIcon}
            content={"No item has been purchased yet"}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CurrentUserListing;
