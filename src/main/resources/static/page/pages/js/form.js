function getFormattedDate() {
    const now = new Date();

    // Lấy các thành phần ngày, giờ, phút
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase(); // "DEC"
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Chuyển giờ về định dạng 12 giờ
    hours = hours % 12 || 12;

    // Định dạng phút với 2 chữ số (nếu cần)
    const formattedMinutes = minutes.toString().padStart(2, '0');

    // Kết hợp kết quả
    return `${day} ${month} ${hours}:${formattedMinutes} ${ampm}`;
}
function btnNotification() {
    let obj = {
        'fullName': document.getElementById("txtFullName").value,
        'age': document.getElementById("txtAge").value,
        'hometown': document.getElementById("txtHometown").value
    };
    document.getElementById("noti-information").innerHTML = `Notification to User: ${obj.fullName}`;
    document.getElementById("noti-information-time").innerHTML = `${getFormattedDate()}`;
}