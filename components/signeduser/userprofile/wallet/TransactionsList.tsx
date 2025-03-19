import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import signeduser from "@/constants/icons/signeduser";
import { Transaction } from "@/types/profile";
import { formatReviewDate, getRelativeTime } from "@/helpers/date";
import { EmptyUI } from "@/components/ui/emptyUi";

const transactions: Transaction[] = [
  {
    id: "1",
    type: "purchase",
    title: "Order #12345 purchased",
    time: new Date(), // Current date
    amount: "£1,000.00",
    createdAt: new Date().toISOString(), // Backend timestamp
  },
  {
    id: "2",
    type: "deposit",
    title: "Wallet top-up",
    time: new Date("2024-12-18"),
    amount: "£1,000.00",
    createdAt: new Date("2024-12-18").toISOString(),
  },
  {
    id: "3",
    type: "purchase",
    title: "Subscription payment",
    time: new Date(),
    amount: "£500.00",
    createdAt: new Date(
      new Date().setDate(new Date().getDate() - 1)
    ).toISOString(),
  },
  {
    id: "4",
    type: "deposit",
    title: "Bank transfer",
    time: new Date("2024-03-25"),
    amount: "£2,500.00",
    createdAt: new Date("2024-03-25").toISOString(),
  },
];

const groupTransactionsByDate = (
  transactions: Transaction[]
): Record<string, Transaction[]> => {
  return transactions.reduce(
    (acc: Record<string, Transaction[]>, transaction) => {
      const dateCategory = formatReviewDate(transaction.createdAt);
      acc[dateCategory] = acc[dateCategory] || [];
      acc[dateCategory].push(transaction);
      return acc;
    },
    {}
  );
};

const TransactionsList: React.FC = () => {
  const groupedTransactions = groupTransactionsByDate(transactions);

  return (
    <View className="w-full">
      {Object.entries(groupedTransactions).map(
        ([dateCategory, transactions]) => (
          <View key={dateCategory} className="mb-4 group">
            <Text className="text-base font-normal text-grey-800 mb-2 capitalize">
              {dateCategory}
            </Text>
            <FlatList
              data={transactions}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View className="w-full flex-row items-center justify-between py-4 border-b border-[#E2E2E2] group-last:border-none">
                  <View className="flex-row items-center justify-start gap-x-2">
                    {item.type === "deposit" ? (
                      <Image
                        source={signeduser.successTransactionIcon}
                        resizeMode="contain"
                        className="w-12 h-12 rounded-full"
                      />
                    ) : (
                      <Image
                        source={signeduser.declineTransactionIcon}
                        resizeMode="contain"
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                    <View className="flex-col items-start justify-start gap-y-1">
                      <Text className="text-base font-medium text-primary">
                        {item.title}
                      </Text>
                      <Text className="text-sm text-grey-800 font-normal">
                        {getRelativeTime(item.time)}
                      </Text>
                    </View>
                  </View>

                  <Text className="text-base font-semibold text-grey-800">
                    {item.amount}
                  </Text>
                </View>
              )}
              ListEmptyComponent={
                <EmptyUI
                  iconSource={signeduser.noTransactionIcon}
                  content="You have not made any transaction yet"
                />
              }
            />
          </View>
        )
      )}
    </View>
  );
};

export default TransactionsList;
