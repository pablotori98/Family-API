const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      familias: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getfamily: () =>{
        fetch(`${process.env.BACKEND_URL}/api/getfamily`, opts)
        opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
        .then((response)=> response.json())
        .then((result)=> setStore({ familias: result}))
      },

      signup: (first_name, last_name, username, email, password) => {
        fetch(
          "https://3001-4geeksacade-reactflaskh-5qood7vl12u.ws-eu80.gitpod.io/api/signup",
          opts
        );
        opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: `{
						'username': ${username},
						'first_name': ${first_name},
						'last_name': ${last_name},
						'email': ${email},
						'password': ${password}
					}`,
        }
          .then((response) => response.json())
          .then((result) => console.log(result));
      },

      login: async (email, password) => {
		const store = getStore();
        const opts={
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: `{
			"email": "${email}",
			"password": "${password}"
		}`,
        };
        await fetch(`${process.env.BACKEND_URL}/api/login`, opts)
          .then((response) => response.json())
          .then((result) =>{
            sessionStorage.setItem("access_token", result.access_token);
          sessionStorage.setItem("current_user", result.username);
          window.location.href = "/"})

      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
