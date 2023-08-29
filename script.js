const butt = document.querySelector("#follow-but");
const ist = document.querySelector("#st");

let count = 0;

butt.addEventListener("click", () => {
    if (count == 0) {
        ist.innerHTML = "following";
        butt.innerHTML = "Unfollow";
        count = 1;
    } else {
        ist.innerHTML = "not-following";
        butt.innerHTML = "Follow";
        count = 0;
    }
});
