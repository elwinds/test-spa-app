import { create } from "zustand";

import { Item } from "../../types/Item";
import { fetchItems } from "../../services/api/itemsAPI";

interface QuestionsStore {
  items: Item[];
  currentPage: number;
  isLoading: boolean;
  error: string;
  favoriteItems: Item[];
  totalCount: number;
  getItems(): Promise<void>;
  setCurrentPage(page: number): void;

  setItemToFavorites(item: Item): void;
  deleteItemFromFavorites(id: number): void;
}

export const useItemsStore = create<QuestionsStore>((set, get) => ({
  items: [],
  currentPage: 1,
  isLoading: false,
  error: "",
  favoriteItems: [],
  totalCount: 0,

  getItems: async () => {
    const page = get().currentPage;
    try {
      set({ isLoading: true });

      const { items, totalCount } = await fetchItems(page);

      const updatedItems = [...get().items, ...items];

      set({ isLoading: false });

      set({ items: updatedItems, totalCount });
    } catch (err) {
      set({ error: `Error: ${err}` });
    }
  },

  setCurrentPage(page: number) {
    set({ currentPage: page });
  },

  setItemToFavorites(item: Item) {
    const updatedFavorites = [...get().favoriteItems, item];

    set({ favoriteItems: updatedFavorites });
  },

  deleteItemFromFavorites(id: number) {
    const updatedFavorites = get().favoriteItems.filter(
      (item) => item.id !== id
    );

    set({ favoriteItems: updatedFavorites });
  },
}));
