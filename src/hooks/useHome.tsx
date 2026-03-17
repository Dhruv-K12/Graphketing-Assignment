import React, { useEffect, useState } from "react";
import { fetchUserList } from "../api/api";
import { userList } from "../types";

const useHome = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<userList[]>([]);
  const [searchVal, setSearchVal] = useState("");
  const [filterData, setFilterData] = useState<userList[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    fetchUserListHandler();
    setRefreshing(false);
  };
  const fetchUserListHandler = async () => {
    try {
      const response = await fetchUserList();
      setUsers(response.data);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  const searchHandler = (text: string) => {
    const data = users.filter(
      (each) =>
        each.name.toLowerCase().includes(text.toLowerCase()) ||
        each.email.toLowerCase().includes(text.toLowerCase())
    );
    setFilterData(data);
    setSearchVal(text);
  };
  useEffect(() => {
    fetchUserListHandler();
  }, []);
  return {
    loading,
    users,
    searchVal,
    searchHandler,
    filterData,
    onRefresh,
    refreshing,
  };
};

export default useHome;
