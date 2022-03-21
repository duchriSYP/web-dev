import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return (
        <div>
            <div className="list-group">
                <a href="#" className="list-group-item">
                    <i className="fa-brands fa-twitter"></i>
                </a>

                <a href="home.html" className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-house-chimney"></i>
                    <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Home
                    </span>
                </a>
                <a href="explore.html" className="list-group-item list-group-item-action active ">
                    <i className="fa-solid fa-hashtag"></i>
                    <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Explore
                    </span>
                </a>
                <a href="notifications.html" className="list-group-item list-group-item-action ">
                    <i className="fa-solid fa-bell"></i>
                    <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Notifications
                    </span>
                </a>
                <a href="messages.html" className="list-group-item list-group-item-action ">
                    <i className="fa-solid fa-envelope"></i>
                    <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Messages
                    </span>
                </a>
                <a href="bookmarks.html" className="list-group-item list-group-item-action ">
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Bookmarks
                    </span>
                </a>
                <a href="lists.html" className="list-group-item list-group-item-action ">
                    <i className="fa-solid fa-list"></i>
                    <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Lists
                    </span>
                </a>
                <a href="profile.html" className="list-group-item list-group-item-action ">
                    <i className="fa-solid fa-user"></i>
                    <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        Profile
                    </span>
                </a>
                <a href="more.html" className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-ellipsis"></i>
                    <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        More
                    </span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                    className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
