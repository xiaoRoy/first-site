import { useState } from "react";
import "./styles/address.css";

function AddressItem({ id, name, addressItem, onAddressItemChange }) {
  const internalOnAddressItemChanged = (event) => onAddressItemChange(event);
  return (
    <label htmlFor={id} className="address-item">
      <span className="address-label">{name}:</span>
      <input
        type="text"
        name={id}
        id={id}
        className="address-input"
        value={addressItem}
        onChange={internalOnAddressItemChanged}
      />
    </label>
  );
}

function AddressForm() {
  const [address, setAddress] = useState({
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    country: "",
  });

  const onAddressChange = (key) => {
    return (event) => {
      setAddress({ ...address, [key]: event.target.value });
    };
  };

  const addressParts = [
    {
      id: "address-line-1",
      key: "address1",
      name: "Address Line 1",
    },

    {
      id: "address-line-2",
      key: "address2",
      name: "Address Line 2",
    },

    {
      id: "zip",
      key: "zip",
      name: "Zip",
    },

    {
      id: "city",
      key: "city",
      name: "City",
    },

    {
      id: "state",
      key: "state",
      name: "State",
    },

    {
      id: "country",
      key: "country",
      name: "Country",
    },
  ];
  return (
    <form className="address-form">
      {addressParts.map((addressPart) => (
        <AddressItem
          key={addressPart.id}
          name={addressPart.name}
          id={addressPart.id}
          addressItem={address[addressPart.key]}
          onAddressItemChange={onAddressChange(addressPart.key)}
        ></AddressItem>
      ))}

      <pre>{JSON.stringify(address, null, 2)}</pre>
    </form>
  );
}

export default function AddressFormDemo() {
  return <AddressForm></AddressForm>;
}
