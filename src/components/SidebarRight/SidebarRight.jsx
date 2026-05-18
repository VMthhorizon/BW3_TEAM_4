import LanguageCard from "./LanguageCard"
import SuggestedPagesCard from "./SuggestedPagesCard"
import SuggestedPeopleCard from "./SuggestedPeopleCard"
import AltriProfili from "./AltriProfili"
import "./SidebarRight.css"
import FooterAdCard from "./FooterAdCard"

const SidebarRight = function () {
  return (
    <div className="sidebar-right">
      <LanguageCard />
      <AltriProfili />
      <SuggestedPeopleCard />
      <SuggestedPagesCard />
      <FooterAdCard />
    </div>
  )
}

export default SidebarRight
