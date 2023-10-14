import Provinces from "../Provinces";
import { useInput } from "../../../../hooks/useInput";
import {
  alertError,
  alertSuccess,
  alertWanning,
} from "../../../../utils/alert";
import {
  validateFomatPassword,
  validateFomatEmail,
  valiDuplePass,
  validatePhone
} from "../../../../utils/validate";
import { creatUser } from "../../../../api/users";

import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import axios from "axios";

const Register = ({ setUsers, users, setIsLogin }) => {
  const [checked, setChecked] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const fistName = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();
  const reEnterPassword = useInput();
  const phone = useInput();
  const birthday = useInput();
  const cityProvince = useInput();
  const districts = useInput();
  const wards = useInput();
  const address = useInput();

  const navigate = useNavigate();

  const handleReceiveData = (city, district, ward) => {
    cityProvince.setValue(city);
    districts.setValue(district);
    wards.setValue(ward);
  };

  const validate = () => {
    const validatePassword = validateFomatPassword(password.value);
    const validateEmail = validateFomatEmail(email.value);
    const valiDuplePassword = valiDuplePass(
      password.value,
      reEnterPassword.value
    );
    const validateNumberPhone = validatePhone(phone.value)

    if (!validatePassword) {
      setIsValid(!isValid);
      alertWanning(
        "Password phải ít nhất 6 kí tự & có ít nhất 1 kí tự viết hoa!"
      );
      return;
    } else if (!valiDuplePassword) {
      setIsValid(!isValid);
      alertWanning("Password & Nhập lại password không khớp!");
      return;
    } else if (!validateEmail) {
      setIsValid(!isValid);
      alertWanning("Email sai định dạng!");
      return;
    } else if (!checked) {
      setIsValid(!isValid);
      alertError("Vui lòng đồng ý với các điều khoản!");
      return;
    } else if(!validateNumberPhone){
      setIsValid(!isValid);
      alertError("Số điện thoại không đúng định dạng!");
      return;
    }else {
      setIsValid(true);
    }
    return isValid;
  };

  const handleRegister = async (e) => {
    const API_URL = "https://65219433a4199548356d628d.mockapi.io/";
    try {
      e.preventDefault();

      const checkValidate = validate();

      if (!checkValidate) {
        return;
      } else {
        axios.get(`${API_URL}/user`).then((response) => {
          const users = response.data;
          const checked = users.every((user) => user.email !== email.value);

          if (checked) {
            const newUser = {
              avatar: "",
              fistName: fistName.value,
              lastName: lastName.value,
              email: email.value,
              password: password.value,
              phone: phone.value,
              birthday: birthday.value,
              location: {
                city: cityProvince.value,
                district: districts.value,
                wards: wards.value,
              },
              address: address.value,
            };
            
            creatUser(newUser);
            const token = btoa(email.value);
            Cookies.set("token", token ,{
              expires: new Date(Date.now() + 30 * 60 * 1000)
            });
            
            setUsers((prve) => {
              const users = [...prve, newUser];

              return users;
            });

            navigate("/tai-khoan");
            setIsLogin(true);
            alertSuccess("Đăng kí thành công");
          } else {
            alertError("Email đã tồn tại");
          }
        });
      }
    } catch (error) {
      alertWanning("error");
    }
  };

  return (
    <div className="container-register">
      <h2 className="register-title">đăng ký mới</h2>
      <form className="register" onSubmit={handleRegister}>
        <label htmlFor="register-fistname">
          Họ (*)
          <input
            type="text"
            id="register-fistname"
            value={fistName.value}
            onChange={fistName.onChange}
            autoComplete="fistName"
            required
          />
        </label>
        <label htmlFor="register-lastname">
          Tên (*)
          <input
            type="text"
            id="register-lastname"
            value={lastName.value}
            onChange={lastName.onChange}
            autoComplete="lastName"
            required
          />
        </label>
        <label htmlFor="register-email">
          Email (*)
          <input
            type="email"
            id="register-email"
            value={email.value}
            onChange={email.onChange}
            autoComplete="username"
            title="Email phải chứa @"
            required
          />
        </label>
        <label htmlFor="register-password">
          Mật khẩu (*)
          <input
            type="password"
            id="register-password"
            value={password.value}
            onChange={password.onChange}
            autoComplete="new-password"
            title="Password phải có 1 kí tự viết hoa và có ít nhất 6 kí tự"
            required
          />
        </label>
        <label htmlFor="register-reenter-password">
          Nhập lại mật khẩu (*)
          <input
            type="password"
            id="register-reenter-password"
            value={reEnterPassword.value}
            autoComplete="new-password"
            onChange={reEnterPassword.onChange}
            required
          />
        </label>
        <label htmlFor="register-phone">
          Số điện thoại (*)
          <input
            type="number"
            id="register-phone"
            value={phone.value}
            onChange={phone.onChange}
            autoComplete="phone"
            required
          />
        </label>
        <label htmlFor="register-birthday">
          Ngày sinh
          <input
            type="date"
            id="register-birthday"
            value={birthday.value}
            autoComplete="birthday"
            onChange={birthday.onChange}
          />
        </label>
        <Provinces handleReceiveData={handleReceiveData} />
        <label htmlFor="register-address">
          Số nhà
          <input
            type="text"
            id="register-address"
            value={address.value}
            autoComplete="address"
            onChange={address.onChange}
          />
        </label>
        <div className="acceps-regulation">
          <label htmlFor="acceps">
            <input
              type="checkbox"
              id="acceps"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            Tôi đã đọc, hiểu và đồng ý với các điều khoản
          </label>
        </div>
        <button type="submit" title="register">
          Đăng Ký
        </button>
      </form>
    </div>
  );
};

export default Register;