export default () => {
    let generated = localStorage.getItem("generateInstances") == "True";
    if (generated) {
        console.log("Instances have already been generated.");
        return true;
    } else {
        const OK = window.confirm("The instances are not generated. Do you want to generate them?");

        if (OK) window.location.href = "./mock.html";
        else console.log("Instances generation was canceled by the user.");

        return false;
    }
}