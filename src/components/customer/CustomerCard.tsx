import React, { forwardRef } from "react";
import Customer from "../../models/Customer";
import "./css/CustomerCard.css";

type CustomerCardProps = {
  customer: Customer;
  onClick(customer: Customer): void;
  isSelected: boolean;
};

const CustomerCard = forwardRef<HTMLDivElement, CustomerCardProps>(
  ({ customer, onClick, isSelected }, ref) => {
    return (
      <div
        className={`card ${isSelected ? "current-customer" : ""}`}
        onClick={() => onClick(customer)}
        ref={ref}
      >
        <h3>{customer.name}</h3>
        <p>{customer.title}</p>
      </div>
    );
  }
);

export default CustomerCard;
