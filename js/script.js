document.addEventListener("DOMContentLoaded", () => {
    console.log("Minecraft Knowledge đã khởi động!");

    const search = document.getElementById("search");

    if (search) {
        search.addEventListener("keyup", function () {
            const keyword = this.value.toLowerCase();
            console.log("Đang tìm:", keyword);
        });
    }
});