const  setCookie  = (name, value, days) =>{
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Thời gian hết hạn
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
const  getCookie = (name)=>{
    let cookieArr = document.cookie.split(";"); // Tách các cookie ra thành mảng

    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].trim(); // Loại bỏ khoảng trắng ở đầu và cuối

        // Kiểm tra xem cookie có tên tương ứng hay không
        if (cookiePair.startsWith(name + "=")) {
            return decodeURIComponent(cookiePair.substring(name.length + 1)); // Trả về giá trị của cookie
        }
    }
    return null; // Trả về null nếu không tìm thấy cookie
}

export  {setCookie , getCookie}