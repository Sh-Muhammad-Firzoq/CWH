function OP() {
    let a = document.getElementById("unit")
    alert("1st alert is : " + a.value);
    // a = Number.parseInt(a)
    // const v="asd"
    // console.log(typeof a);

    // alert(typeof a)

    // if (a < 18) {
    //     alert("You are not allowed to enater the website");
    // } else if (a < 36 && a > 25) {
    //     console.log("the age is : " + a);
    // }


    switch (a.value) {
        case "meters":
            alert("Selected(Meters) : " + a.value)
            break;

        case "yards":
            alert("Selected(Yards) : " + a.value)
            break;

        case "Hussain":
            alert("CEO OF BCA");


        default:
            alert("default value run")

    }



    alert("Program Ends");


    const age = prompt("please enter the age ")

    console.log("age is :" + age, +age >= 18 ? "Ok" : "Not Ok");



    let G = prompt("ENter the value of g : ")

    G = Number.parseInt(G)

    alert(G == 2 && G === 2 ? G = 3 : G = 1)

    console.log(G)

}