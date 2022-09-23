import { Redirect, Route, Switch } from "react-router-dom";
import  Dashboard  from "../../features/dashboard/Dashboard";
import  Student  from "../../features/student/Student";
import { NotFound } from "./NotFound";

function Main() {
    return ( 
    <>
        <Switch>
            <Route path="/admin/dashboard"><Dashboard/></Route>
            <Route path="/admin/student"><Student/></Route>
            <Route path="/admin">
                <Redirect to="/admin/dashboard" />
            </Route>
            <Route path="*"><NotFound/></Route>
        </Switch>
    </>
     );
}

export default Main;