import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone143Button from "./components/IPhone143Button";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|iphone-14-3-button)">
          <IPhone143Button
            user="أهلا! user@"
            ellipse17="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/ellipse-18@2x.png"
            text10="مصحح التلاوة"
            text11="أدعية لمشاعرك"
            text5="أداة مصحح التلاوة صممت لتساعدك فهي تقوم بكتابة الأخطاء المتواجدة في تلاوتك لتصحهها."
            text4="أداة تساعدك على إيجاد الدعاء المناسب لمشاعرك اللحظية."
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
