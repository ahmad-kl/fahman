let powerOn = false;

function activatePower() {
    if (!powerOn) {
        document.body.style.background = "#001f3f";
        alert("🔥 FAHMAN POWER ACTIVATED!");
        powerOn = true;
    } else {
        document.body.style.background = "#0b0b0b";
        alert("⚡ FAHMAN POWER DEACTIVATED!");
        powerOn = false;
    }
}
