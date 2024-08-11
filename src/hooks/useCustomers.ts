import { useState, useEffect, useCallback } from "react";
import { fetchCustomers } from "../services/api";
import Customer from "../models/Customer";

export const useCustomers = (page: number, pageSize: number) => {
  const [customers, setCustomers] = useState<Array<Customer>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const loadCustomers = useCallback(async () => {
    setLoading(true);
    try {
      const { data, count } = await fetchCustomers(page, pageSize);
      setCustomers((prev) => [...prev, ...data]);
      console.log(count);
      if (count) {
        console.log(page * pageSize - 1);
        setHasMore(page * pageSize - 1 < count);
      }
    } catch (err) {
      console.log(err);
      setError(new Error("Something went wrong"));
    } finally {
      setLoading(false);
    }
  }, [page, pageSize]);

  useEffect(() => {
    loadCustomers();
  }, [loadCustomers]);

  return { customers, loading, error, hasMore };
};
