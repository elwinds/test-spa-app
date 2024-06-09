import axios from "axios";
import { APIEndpoints } from "../../enums/APIEndpoints";

export const fetchItems = async (page: number) => {
  const response = await axios.get(
    `${APIEndpoints.ITEMS_GET}?_page=${page}&_limit=10`
  );

  const totalCount = response.headers["x-total-count"];

  return {
    items: response?.data || {},
    totalCount,
  };
};
