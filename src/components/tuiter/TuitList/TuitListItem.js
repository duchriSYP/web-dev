import React from "react";
import './tuit.css';
import { useDispatch } from "react-redux";

const TuitListItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuit = () => {
        dispatch({ type: 'delete-tuit', tuit })
    }
    return (
        <div>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-1 text-center">
                        <img src={tuit['avatar-image']} className="rounded-circle wd-avatar" />
                    </div>
                    <div className="col-11">
                        <div className="row">
                            <div className="col-6">
                                <span className="fw-bold">{tuit.postedBy.username}</span>
                                {tuit.verified && <i className="ms-1 fas fa-circle-check"></i>}
                                <span className="ms-1 text-secondary">@{tuit.handle}</span>
                            </div>
                            <div className="col-6">
                                <span>
                                    <i onClick={deleteTuit} className="fa fa-remove fa-pull-right"></i>
                                </span>
                            </div>
                            <div>
                                {tuit.tuit}
                            </div>
                        </div>
                        <div className="row">
                            {
                                tuit.attachments && tuit.attachments.image &&
                                <img src={tuit.attachments.image}
                                    className="m-0 p-0 wd-rounded"
                                    style={{ width: "100%" }} />
                            }
                            {
                                tuit.attachments && tuit.attachments.video &&
                                <iframe width="100%" height="350px"
                                    className="mt-2 wd-border-radius-20px"
                                    style={{ width: "100%" }}
                                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            }
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default TuitListItem;