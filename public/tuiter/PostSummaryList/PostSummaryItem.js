const PostSummaryItem = (post) => {
    return (`
        <div class="row border pb-1">
            <div class="col-10 mt-1">
                ${post.topic ? `<span class="wd-subtext">${post.topic}</span> <br />` : ``}
                <span class="fw-bold">
                    ${post.userName}
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="wd-subtext"> - ${post.time}</span>
                </span> <br />
                <span class="fw-bold">${post.title}</span>
            </div>
            <div class="col-2 mt-1">
                <img src=${post.image} alt=${post.userName ? post.userName : ""} class="img-thumbnail wd-image-icons">
            </div>
        </div>
    `);
}

export default PostSummaryItem;