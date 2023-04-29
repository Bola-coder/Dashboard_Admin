import appStyles from "./app.module.css";
import ContentLayout from "./components/ContentLayout";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className={appStyles.app}>
      <div className={appStyles.sidenav}>
        <SideNav />
      </div>
      <div className={appStyles.content}>
        <ContentLayout>
          <Dashboard />
        </ContentLayout>
      </div>
    </div>
  );
}

export default App;
