import React, { useCallback, useState } from "react";
import "./App.css";
import CustomersList from "./components/customer/CustomersList";
import CustomerInfo from "./components/customer/CustomerInfo";
import { useCustomers } from "./hooks/useCustomers";
import Customer from "./models/Customer";

const PAGE_SIZE = 15;

function App(): JSX.Element {
  const [page, setPage] = useState(1);
  const [currentCustomer, setCurrentCustomer] = useState<Customer | null>(null);

  const { customers, loading, hasMore } = useCustomers(page, PAGE_SIZE);

  const loadMore = useCallback(() => {
    setPage((prevPage: number) => prevPage + 1);
  }, []);

  const onCustomerClick = useCallback((customer: Customer) => {
    setCurrentCustomer(customer);
  }, []);

  return (
    <div className="app-container">
      <div className="customers-list-container">
        <CustomersList
          customers={customers}
          loading={loading}
          hasMore={hasMore}
          loadMore={loadMore}
          onClick={onCustomerClick}
          currentCustomer={currentCustomer}
        />
      </div>
      <div className="customer-info-container">
        <CustomerInfo customer={currentCustomer} />
      </div>
    </div>
  );
}

export default App;
