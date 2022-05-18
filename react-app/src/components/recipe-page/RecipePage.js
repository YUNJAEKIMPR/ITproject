import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const RecipePage = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </section>
  );
};

export default RecipePage;
