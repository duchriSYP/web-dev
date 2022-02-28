const NavigationSidebar = () => {
    return (`
            <div class="list-group">
                <a href="#" class="list-group-item">
                <i class="fa-brands fa-twitter"></i>
                </a>

                <a href="home.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-house-chimney"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Home
                    </span>
                </a>
                <a href="explore.html" class="list-group-item list-group-item-action active ">
                    <i class="fa-solid fa-hashtag"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Explore
                    </span>
                </a>
                <a href="notifications.html" class="list-group-item list-group-item-action ">
                    <i class="fa-solid fa-bell"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Notifications
                    </span>
                </a>
                <a href="messages.html" class="list-group-item list-group-item-action ">
                    <i class="fa-solid fa-envelope"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Messages
                    </span>
                </a>
                <a href="bookmarks.html" class="list-group-item list-group-item-action ">
                    <i class="fa-solid fa-bookmark"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Bookmarks
                    </span>
                </a>
                <a href="lists.html" class="list-group-item list-group-item-action ">
                    <i class="fa-solid fa-list"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Lists
                    </span>
                </a>
                <a href="profile.html" class="list-group-item list-group-item-action ">
                    <i class="fa-solid fa-user"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Profile
                    </span>
                </a>
                <a href="more.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-ellipsis"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        More
                    </span>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
