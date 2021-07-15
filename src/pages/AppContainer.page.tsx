import {memo, FC} from "react";
import {Route, Switch} from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.Page";
import RecordingsPage from "./Recordings.page";
interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <div className="flex">
      <LeftSidebar/>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage/>
        </Route>
        <Route path="/recordings">
          <RecordingsPage/>
        </Route>
        <Route path="/lecture/:lectureNumber">
          <LecturePage/>
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
