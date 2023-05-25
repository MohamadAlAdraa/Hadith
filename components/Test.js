import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckHadith_API } from "../redux/hadith/hadith-slice";

const Test = ({ userInput }) => {
  const dispatch = useDispatch();
  const hadithStateLoading = useSelector((state) => state.hadith.loading);
  const hadithStateData = useSelector((state) => state.hadith.data);
  const hadithStateError = useSelector((state) => state.hadith.error);

  function searchHandler() {
    dispatch(CheckHadith_API(userInput));
  }

  console.log(hadithStateData);

  return (
    <View>
      {/* Add a input or textarea to enter the hadith  */}
      <Button onPress={searchHandler} title="Search" />
      {/* Just validating the data. This will be replaced by a custom component. */}
      {/* <View>
        {hadithStateData ? (
          hadithStateData.map((hadith, index) => (
            <Text key={index}>{hadith.book}</Text>
          ))
        ) : (
          <Text>No Data</Text>
        )}
      </View> */}
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
