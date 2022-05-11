import "./MainContent.css";
import PersonalSuggestion from "./PersonalSuggestion";
import SearchResult from "./SearchResult";
import TopMatch from "./TopMatch";

function MainContent() {
  return (
    <div className="col-sm-8">
      <SearchResult />
      <br />
      <PersonalSuggestion />
      <br />
      <TopMatch />
      <br />
    </div>
  );
}

export default MainContent;
