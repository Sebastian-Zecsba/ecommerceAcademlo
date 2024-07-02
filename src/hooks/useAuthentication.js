import axios from "axios";

const useAuthentication = () => {
  const createNewUser = (data) => {
    const url = `${import.meta.env.VITE_API_URL}users`;
    axios
      .post(url, data)
      .then((res) => res)
      .catch((err) => console.error(err));
  };
  const loginUser = (data) => {
    const url = `${import.meta.env.VITE_API_URL}users/login`;
    return axios.post(url, data);
  };

  return { createNewUser, loginUser };
};

export default useAuthentication;
