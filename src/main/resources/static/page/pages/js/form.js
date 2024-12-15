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
async function addUser() {
    let listUser = [];
    let obj = {
        'fullName': document.getElementById("txtFullName").value,
        'age': document.getElementById("txtAge").value,
        'hometown': document.getElementById("txtHometown").value
    };
    // listUser.push(obj);
    // createTable(listUser);
    await insertUser(obj);
}

function createTable(listUser){
    try{
        let tbody = document.getElementById("tbodyTableUser");
        let tbodyString = "";
        for(let i = 0 ; i < listUser.length ; i++){
            tbodyString += `<tr>`+
                `<td>${listUser[i].fullName}</td>`+
                `<td>${listUser[i].age}</td>`+
                `<td>${listUser[i].hometown}</td>`+
                `</tr>`;
        }
        tbody.innerHTML += tbodyString;
    } catch (e) {
        console.log(e)
    }
}

async function getAllUser(){
   let {data: result} = await axios.get("/api-user/get-all-user");
   if(result.status){
       createTable(result.data);
   }
}

insertUser = async (user) => {
    let result = await axios.post("/api-user/insert-user", user);
    if(result.status){
        getAllUser();
    }
}



