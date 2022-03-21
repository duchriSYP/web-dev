const WhoToFollowListItem = ({
    who = {
        avatarIcon: '../../../tuiter/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
    }
}) => {
    return (
        <div>
            <li className="list-group-item">
                <div className="row align-items-center">
                    <div className="col-2 wd-remove-padding">
                        <img src={who.avatarIcon} alt={who.userName} className="img-fluid img-thumbnail wd-image-avatar" />
                    </div>
                    <div className="col-6 text-nowrap">
                        <span className="mt-0 mb-0"><b>{who.userName} </b>
                            <i className="fa-solid fa-circle-check"></i>
                        </span> <br />
                        <span className="mt-0 mb-0">{who.handle}</span>
                    </div>
                    <div className="col-4 mt-1">
                        <button className="btn btn-primary wd-btn-tuit">
                            Follow
                    </button>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default WhoToFollowListItem;