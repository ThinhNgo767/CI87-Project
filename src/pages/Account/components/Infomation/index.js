import "./style.css";
import InfomationTop from "../InfomationTop";
import InfomationBottom from "../InfomationBottom";

const Infomation = ({users, isLogin }) => {
  
  return (
    <div className="infomation">
      <InfomationTop users={users} isLogin={isLogin}/>
      <InfomationBottom users={users}/>
    </div>
  );
};

export default Infomation;
