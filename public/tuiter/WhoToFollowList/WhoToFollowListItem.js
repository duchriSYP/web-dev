const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row align-items-center">
                <div class="col-2 wd-remove-padding">
                    <img src=${who.avatarIcon} alt=${who.userName} class="img-fluid img-thumbnail wd-image-avatar">
                </div>
                <div class="col-6 text-nowrap">
                    <span class="mt-0 mb-0"><b>${who.userName}</b>
                        <i class="fa-solid fa-circle-check"></i>
                    </span> <br />
                    <span class="mt-0 mb-0">${who.handle}</span>
                </div>
                <div class="col-4 mt-1">
                    <button class="btn btn-primary wd-btn-tuit">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;