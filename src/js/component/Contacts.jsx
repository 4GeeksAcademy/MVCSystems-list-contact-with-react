import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ButtonAdd } from "./ButtonAdd.jsx";
import ContactCard from "./ContactCard.jsx";

export function Contacts() {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getAgendas();
    console.log("manipulando el DOM");
  }, []);

  return (
    <>
      <div className="container rounded mb-3">
        <div className="row">
          <ButtonAdd />
          {store.contacts &&
            store.contacts.length > 0 &&
            store.contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                name={contact.name}
                address={contact.address}
                phone={contact.phone}
                email={contact.email}
                id={contact.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}
