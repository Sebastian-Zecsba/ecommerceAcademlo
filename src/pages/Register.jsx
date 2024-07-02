import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuthentication from "../hooks/useAuthentication";
import defaulRegisterValues from "../utils/deafultRegisterValues";
import Loading from "../components/shared/Loading";
import Modal from "../components/shared/Modal";
import "./styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const { createNewUser } = useAuthentication();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ nameUserLogged, setNameUserLogged] = useState('')

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/users/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setNameUserLogged(res.data.firstName))
      .catch(err => console.log(err))
  }, [token])

  const closeModal = () => {
    setShowModal(false);
  };

  const submit = async (data) => {
    setLoading(true);
    try {
      await createNewUser(data);
      setShowModal(true);
      setError(false);
    } catch {
      setShowModal(true);
      setError(true);
    }
    reset(defaulRegisterValues);
    setLoading(false);
    navigate('/login')
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="register__container">
          <h2 className="register__title">CREATE NEW USER</h2>
          <form className="register__form" onSubmit={handleSubmit(submit)}>
            <div>
              <label className="register__label" htmlFor="firstName">
                Firt Name:
              </label>
              <input
                className="register__input"
                {...register("firstName")}
                type="text"
                id="firstName"
              />
            </div>
            <div>
              <label className="register__label" htmlFor="lastName">
                Last Name:
              </label>
              <input
                className="register__input"
                {...register("lastName")}
                type="text"
                id="lastName"
              />
            </div>
            <div>
              <label className="register__label" htmlFor="email">
                Email:
              </label>
              <input
                className="register__input"
                {...register("email")}
                type="email"
                id="email"
              />
            </div>
            <div>
              <label className="register__label" htmlFor="password">
                Password:
              </label>
              <input
                className="register__input"
                {...register("password")}
                type="password"
                id="password"
              />
            </div>
            <div>
              <label className="register__label" htmlFor="phone">
                phone:
              </label>
              <input
                className="register__input"
                {...register("phone")}
                type="tel"
                id="phone"
              />
            </div>
            <button className="register__btn">Register</button>
            <h3 className="register__gologin">
              Now
              <Link to={"/Login"}> login</Link>
            </h3>
          </form>
          <Modal showModal={showModal} onClose={closeModal}>
            <h3>{error ? "User already exists" : `Welcome ${nameUserLogged}!!`}</h3>
            <button className="register__btn-modal" onClick={closeModal}>
              Ok
            </button>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Register;
