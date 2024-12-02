export default () => {
    const IS_GENERATED = localStorage.getItem("generateInstances") == "True";
    if (!IS_GENERATED) {
        window.alert("The instances are not generated. You will be redirected to 'index.html'");
        window.location.href = "./index.html";
    }
    console.log("Instances have already been generated.");
}