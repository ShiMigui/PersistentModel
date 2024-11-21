let generated = localStorage.getItem("generateInstances") == "True";
if (generated) {
    console.log("Instances have already been generated.");
} else {
    let r = window.confirm("The instances are not generated. Do you want to?");
    if (r) {
        window.location.href = "./mock.html";
    }
    else {
        console.log("Instances generation canceled.");
    }
}