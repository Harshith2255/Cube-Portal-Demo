import React, { useRef, useCallback } from "react";
import Customer from "../../models/Customer";
import CustomerCard from "./CustomerCard";
import "./css/CustomerList.css";

const CustomersList = ({
  customers,
  loading,
  hasMore,
  loadMore,
  onClick,
  currentCustomer,
}: {
  customers: Customer[];
  loading: boolean;
  hasMore: boolean;
  loadMore(): void;
  onClick(customer: Customer): void;
  currentCustomer: Customer | null;
}) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastCustomerElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore]
  );

  return (
    <>
      {customers.map((customer, index) => (
        <CustomerCard
          key={customer.id}
          ref={index === customers.length - 1 ? lastCustomerElementRef : null}
          customer={customer}
          onClick={onClick}
          isSelected={customer.id === currentCustomer?.id}
        />
      ))}
      {loading && <div className="items-loader">Loading...</div>}
    </>
  );
};

export default CustomersList;
