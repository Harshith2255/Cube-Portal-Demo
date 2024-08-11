import { supabase } from "./supabaseclient";

export const fetchCustomers = async (page: number, pageSize: number) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  const { data, error, count } = await supabase
    .from("customers")
    .select("*", { count: "exact" })
    .range(start, end);

  console.log("fetched data,", data);

  if (error) throw error;
  return { data, count };
};
