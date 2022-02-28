import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (`
            <div class="row mb-2 align-items-center">
                <div class="col-11 wd-remove-padding">
                    <div class="input-group wd-search">
                        <span class="input-group-text wd-search wd-search-icon"><i
                                class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="search" class="form-control wd-search wd-search-bar"
                            placeholder="Search Twitter">
                    </div>
                </div>
                <div class="col-1">
                    <a href="explore-settings.html">
                        <i class="fa-solid fa-gear fa-2x"></i>
                    </a>
                </div>
            </div>
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="row wd-img-text">
                <img src="spaecx.jpeg" class="m-0 p-0" alt="SpaceX Starship">
                <div class="wd-img-overlay"> SpaceX's Starship </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
