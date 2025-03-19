import React from "react";
import { ProfileHeader } from "@/components/signeduser/userprofile";
import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TermsConditionsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ProfileHeader title="Terms and conditions" showShareIcon={false} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}
      >
        <Text className="text-base font-normal text-grey-800 max-w-[330px]">
          Lorem ipsum dolor sit amet consectetur. Enim maecenas euismod ornare
          justo. Lectus eleifend sagittis eget porta vel et neque. Non morbi
          egestas viverra felis id magna pulvinar mattis. Massa sem congue odio
          vel tincidunt vulputate netus vitae a. Ut est auctor eget quam turpis
          venenatis malesuada cursus. Lobortis mi dis ultricies urna luctus ut
          aliquam. Morbi viverra rhoncus auctor ac vel nulla sagittis gravida
          fusce. Posuere sed nunc id nibh vel in felis. Diam molestie a sit nec
          urna auctor justo. Non turpis magna urna viverra maecenas tincidunt
          nulla ut. Ipsum dui tellus mauris aliquet neque tincidunt non quis.
          Amet amet nisl lectus orci posuere ut nunc vel. Scelerisque commodo
          amet varius gravida odio venenatis arcu velit ornare. Nam sit quisque
          ut massa volutpat enim quisque. Pellentesque id quisque aliquet ipsum
          ac enim purus quam. Laoreet ipsum tellus habitant viverra massa. Neque
          orci interdum dolor risus sagittis odio fringilla. Elementum amet duis
          pulvinar ac habitant. Ante mauris dui tristique semper adipiscing
          tristique pellentesque a mattis. Vitae euismod vitae enim iaculis ut
          quis. Fringilla aliquam egestas adipiscing quis egestas amet
          pellentesque. Ac imperdiet odio eget morbi feugiat malesuada sed
          vestibulum odio. Eu adipiscing adipiscing nec mus elementum libero
          tristique consectetur. Nibh tincidunt purus leo tempor erat ut aenean.
          Consequat neque laoreet amet tristique quam. Mattis nisi dignissim
          mauris viverra aliquam et nec. In in est amet sed facilisis nisi vel
          cursus. Pharetra massa quis eu tempor donec eget est lectus. Neque
          gravida habitasse eget turpis. Tortor auctor auctor euismod lorem et
          porttitor feugiat. Tortor tortor at amet eget sit ipsum luctus congue.
          Eu dolor non viverra convallis etiam semper. Orci amet placerat mattis
          massa ut at. Ut dis semper habitant elementum eleifend convallis eu
          molestie mauris. Pharetra lectus maecenas vitae quam. Arcu urna eget
          purus elit lacus platea sed venenatis. Adipiscing mi sed risus pretium
          nam sagittis velit. Nunc elementum nullam semper ultrices commodo
          viverra suspendisse. At commodo sed sagittis hac. Tristique auctor sed
          praesent et tristique. Cursus lobortis donec ornare egestas blandit
          tempor eget nunc mus. Tempus lectus leo et arcu egestas ut aliquam
          dignissim vel. Tristique et eget faucibus neque pulvinar ut. Eget
          tincidunt rhoncus ornare nullam lobortis amet suspendisse velit.
          Tristique ultrices vel potenti ornare. Non urna sem blandit molestie
          aenean elementum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
