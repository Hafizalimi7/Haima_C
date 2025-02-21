import { useState, useEffect } from "react";
import { CustomButton } from "../ui";
import { Text, View } from "react-native";
import { Image } from "react-native";
import { icons } from "@/constants";

interface PasswordRequirementProps {
  password: string;
}

const PasswordRequirements: React.FC<PasswordRequirementProps> = ({
  password,
}) => {
  const [requirements, setRequirements] = useState([
    { text: "Contain a number", met: false },
    { text: "at least 6 characters", met: false },
  ]);

  useEffect(() => {
    setRequirements([
      { text: "Contain a number", met: /\d/.test(password) },
      { text: "at least 6 characters", met: password.length >= 6 },
    ]);
  }, [password]);

  return (
    <View className="flex-row gap-x-2 items-center justify-start pt-4">
      {requirements.map((req, index) => (
        <CustomButton
          key={index}
          className={`w-fit px-4 min-h-6 ${
            req.met ? "bg-primary" : "bg-lightGrey"
          }`}
        >
          <View className="flex-row items-center justify-start gap-x-2 ">
            <Text
              className={`text-xs font-normal ${
                req.met ? "text-white" : "text-grey-800"
              }`}
            >
              {req.text}
            </Text>
            {req.met && (
              <Image
                source={icons.checkedIcon}
                resizeMode="contain"
                className="w-3 h-3"
              />
            )}
          </View>
        </CustomButton>
      ))}
    </View>
  );
};

export default PasswordRequirements;
