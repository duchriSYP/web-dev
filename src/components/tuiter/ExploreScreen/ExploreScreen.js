import NavigationSidebar from "../NavigationSidebar/index";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList/index";
import './explore.css';

const ExploreScreen = () => {
    /*return (
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2 col-sm-3">
                <NavigationSidebar active="explore" />
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-9">
                <ExploreComponent />
            </div>
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList />
            </div>
        </div>
    );*/
    return (
        <ExploreComponent />
    );
}

export default ExploreScreen;
