const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      currentContact: {},
    },

    actions: {
      getAgendas: async () => {
        const request = await fetch(
          "https://playground.4geeks.com/contact/agendas/carlos_mera",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const response = await request.json();
        setStore({ contacts: response.contacts });
      },

      makeContact: async (userInfo) => {
        const request = await fetch(
          "https://playground.4geeks.com/contact/agendas/carlos_mera/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: userInfo.name,
              phone: userInfo.phone,
              email: userInfo.email,
              address: userInfo.address,
            }),
          }
        );
        const response = await request.json();
        const store = getStore();
        setStore({ contacts: [...store.contacts, response] });
      },

      deleteContac: async (id) => {
        const actions = getActions();
        try {
          const request = await fetch(
            `https://playground.4geeks.com/contact/agendas/carlos_mera/contacts/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (request.status === 204) {
            await actions.getAgendas();
          }
        } catch (error) {
          console.log(error);
        }
      },

      updateContac: async (id, userdata) => {
        const request = await fetch(
          `https://playground.4geeks.com/contact/agendas/carlos_mera/contacts/${id}`,
          {
            method: `PUT`,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: userdata.name,
              phone: userdata.phone,
              email: userdata.email,
              address: userdata.address,
            }),
          }
        );
        const response = await request.json();
        const actions = getActions();
        await actions.getAgendas();
      },

      setCurrentEdit: (userValues) => {
        const store = getStore();
        setStore({ ...store, currentContact: userValues });
      },
    },
  };
};

export default getState;
