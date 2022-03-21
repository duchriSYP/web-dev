import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return (
        <div>
            <div className="row mb-2 align-items-center">
                <div className="col-11 wd-remove-padding">
                    <div className="input-group wd-search">
                        <span className="input-group-text wd-search wd-search-icon wd-non-highlighted"><i
                            className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="search" className="form-control wd-search wd-search-bar"
                            placeholder="Search Twitter" />
                    </div>
                </div>
                <div className="col-1">
                    <a href="explore-settings.html">
                        <i className="fa-solid fa-gear fa-2x"></i>
                    </a>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div className="row wd-img-text">
                <img src="../../../tuiter/spaecx.jpeg" className="m-0 p-0" alt="SpaceX Starship" />
                <div className="wd-img-overlay"> SpaceX's Starship </div>
            </div>
            {<PostSummaryList />}
        </div>
    );
}
export default ExploreComponent;
