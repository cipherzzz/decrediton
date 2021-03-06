import { DecredLoading } from "indicators";
import SideBar from "SideBar";
import "style/GetStarted.less";
import "style/Layout.less";

const Page = ({ Header, Body, ...props }) => {
  return (
    <div className="page-body">
      <SideBar/>
      <div className="page-view inverted-colors get-started-view">
        <Header {...props} />
        <div className="page-content-fixed">
          <DecredLoading
            hidden={props.startupError || props.isInputRequest || props.showSettings || props.showLogs}
            className="get-started-loading"
          />
          <Body {...props} />
        </div>
      </div>
    </div>
  );
};
export default Page;
