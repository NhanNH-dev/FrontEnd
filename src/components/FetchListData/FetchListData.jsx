import React, { useState, useEffect } from "react";
import styles from "../../App.module.css";
import Pagination from "../Pagination/Pagination";
import SearchFetchListData from "../SearchFetchListData";
import queryString from "query-string";

export const FetchListData = () => {
  const [ListData, setListData] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });
  function handleSearchInput(newFilter) {
    console.log("newFileter", newFilter);
    setFilters({ ...filters, _page: 1, title_like: newFilter.searchTerm });
  }

  function handleOnPageChange(newPage) {
    console.log("newpage", newPage);
    setFilters({ ...filters, _page: newPage });
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        const { data, pagination } = responseJson;

        setListData(data);
        setPagination(pagination);
      } catch (error) {
        console.log("fetchdata failed", error.message);
      }
    }

    fetchData();
  }, [filters]);
  return (
    <div className={styles.container}>
      <SearchFetchListData onSubmit={handleSearchInput} />
      <ul>
        {ListData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <Pagination pagination={pagination} onPageChange={handleOnPageChange} />
    </div>
  );
};
