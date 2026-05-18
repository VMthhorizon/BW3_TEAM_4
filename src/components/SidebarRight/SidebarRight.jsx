import LanguageCard from "./LanguageCard"
import SuggestedPagesCard from "./SuggestedPagesCard"
import SuggestedPeopleCard from "./SuggestedPeopleCard"
import ViewedPeopleCard from "./ViewedPeopleCard"
import "./SidebarRight.css"
import FooterAdCard from "./FooterAdCard"

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
