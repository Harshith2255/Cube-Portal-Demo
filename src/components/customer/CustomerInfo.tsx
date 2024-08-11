import React from "react";
import Customer from "../../models/Customer";
import "./css/CustomerInfo.css";
import ImageGrid from "./ImageGrid";

export default function CustomerInfo({
  customer,
}: {
  customer: Customer | null;
}) {
  if (!customer) return <div>Customer details shown here</div>;

  return (
    <div className="customer-details">
      <h1 className="customer-name">{customer.name}</h1>
      <p className="customer-address">{customer.address}</p>
      <p className="customer-title">{customer.title}</p>

      <ImageGrid id={customer.id} />
    </div>
  );
}
