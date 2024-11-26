export default () => {
    let generated = localStorage.getItem("generateInstances") == "True";
    if (generated) {
        console.log("Instances have already been generated.");
        return true;
    } else {
        const IS_NOT_INDEX = !window.location.pathname.includes("index.html");
        let ok;

        if(IS_NOT_INDEX) ok =  window.confirm("The instances are not generated. Do you want to generate them?")

        if (ok && IS_NOT_INDEX) window.location.href = "./index.html";

        return false;
    }
}