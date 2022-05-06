function bai1() {

    Inputdiemvatly = prompt("Nhập điểm lý");
    Inputdiemhoa = prompt("Nhập điểm hóa");
    Inputdiemsinh = prompt("Nhập điểm sinh");

    diemvatly = parseFloat(Inputdiemsinh);
    diemhoa = parseFloat(Inputdiemhoa);
    diemsinh = parseFloat(Inputdiemsinh);

    var sum = (diemvatly + diemsinh + diemhoa);
    var avg = (sum / 3);

    document.getElementbyId("demo").innerHTML= "Điểm tổng = " + sum + '<br>' + "Điểm trung bình = " + avg;

}

function bai2() {

            let inputC = document.getElementById("InputC").value;
            let inputF = document.getElementById("InputF").value;

            let doC = parseFloat(inputC);
            let doF = parseFloat(inputF);


            let C = 5 * (doF - 32) / 9;
            let F = 9 / 5 * doC + 32;

            document.getElementById("demo1").innerHTML = "Đổi độ F sang độ C là: " + " " + C;
            document.getElementById("demo2").innerHTML = "Đổi độ C sang độ F là: " + " " + F;
        }
 
 function bai3() {

             function bai3() {
        let radius = document.getElementById("inputRadius").value;
        let radius1 = parseFloat(radius);
        let chuvi = 2 * radius1 * Math.PI;
        let dientich = Math.pow(radius1, 2) * Math.PI;

        document.getElementById("demo3").innerHTML = "Chu vi hình tròn là:" + " " + chuvi + "<br>";
        document.getElementById("demo4").innerHTML = "Diện tích hình tròn là:" + " " + dientich;
    }
 }