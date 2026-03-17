import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";
import UserCard from "../components/UserCard";
import { userList } from "../types";
import Loading from "../components/Loading";
import useHome from "../hooks/useHome";
import EmptyState from "../components/EmptyState";
const Home = () => {
  const {
    loading,
    users,
    searchVal,
    searchHandler,
    filterData,
    refreshing,
    onRefresh,
  } = useHome();
  const data = searchVal.length !== 0 ? filterData : users;
  if (loading) return <Loading />;
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput value={searchVal} onChangeText={searchHandler} />
      <View style={{ flex: 1 }}>
        <FlatList
          ListEmptyComponent={EmptyState}
          data={data}
          renderItem={({ item }) => <UserCard data={item} />}
          keyExtractor={(item: userList) => item?.id?.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: "white",
    gap: 16,
  },
});
