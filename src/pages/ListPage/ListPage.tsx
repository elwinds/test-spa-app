import { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header/Header";
import ItemsList from "../../components/ItemsList/ItemsList";
import { useItemsStore } from "../../utils/store/itemsStore";

const ListPage: React.FC = () => {
  const { getItems, currentPage, setCurrentPage, totalCount, items } =
    useItemsStore((state) => state);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    (async () => {
      if (fetching) {
        setCurrentPage(currentPage + 1);
        await getItems();
        setFetching(false);
      }
    })();
  }, [fetching]);

  useEffect(() => {
    (async () => {
      await getItems();
    })();
  }, []);

  const scrollHandler = useCallback(
    (event: Event) => {
      if (!(event.target instanceof Document) || totalCount <= items.length)
        return;

      const scrollPos = event.target.documentElement.scrollHeight;
      const scrollTop = event.target.documentElement.scrollTop;
      const innerHeight = window.innerHeight;

      if (scrollPos - (scrollTop + innerHeight) < 100) {
        setFetching(true);
      }
    },
    [totalCount, items]
  );

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <>
      <Header />
      <ItemsList />
    </>
  );
};

export default ListPage;
