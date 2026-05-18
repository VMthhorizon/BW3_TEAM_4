import AdCard from "./AdCard"
import LanguageCard from "./LanguageCard"
import SuggestedPagesCard from "./SuggestedPagesCard"
import SuggestedPeopleCard from "./SuggestedPeopleCard"
import "./SidebarRight.css"
import ViewedProflesCard from "./ViewedProfilesCard"

const SidebarRight = function(){
    return(
        <div className="sidebar-right">

      <LanguageCard />

      <ViewedProflesCard/>

      <SuggestedPeopleCard />

      <SuggestedPagesCard />

      <AdCard/>


    </div>
    )
}

export default SidebarRight