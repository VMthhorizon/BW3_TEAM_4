import LanguageCard from "./components/LanguageCard"
import SuggestedPagesCard from "./components/SuggestedPagesCard"
import SuggestedPeopleCard from "./components/SuggestedPeopleCard"
import ViewedPeopleCard from "./components/ViewedPeopleCard"
import FooterAdCard from "./components/FooterAdCard"
import "./SidebarRight.css"

const SidebarRight = function () {
  return (
    <div className="sidebar-right">
      <LanguageCard />
      <ViewedPeopleCard />
      <SuggestedPeopleCard />
      <SuggestedPagesCard />
      <FooterAdCard />
    </div>
  )
}

export default SidebarRight
