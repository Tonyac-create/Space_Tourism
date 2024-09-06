const launchVehicleCircle = document.getElementById("launchVehicleCircle")
const spaceportCircle = document.getElementById("spaceportCircle")
const spacecapsuleCircle = document.getElementById("spacecapsuleCircle")
const imgLaunchVehicle = document.getElementById("imgLaunchVehicle")
const imgSpaceport = document.getElementById("imgSpaceport")
const imgSpacecapsule = document.getElementById("imgSpacecapsule")
const artLaunchVehicle = document.getElementById("artLaunchVehicle")
const artSpaceport = document.getElementById("artSpaceport")
const artSpacecapsule = document.getElementById("artSpacecapsule")

launchVehicleCircle.addEventListener("click", function() {
    launchVehicleCircle.classList.add("bg-white")
    launchVehicleCircle.classList.add("text-black")
    spaceportCircle.classList.remove("bg-white")
    spaceportCircle.classList.remove("text-black")
    spacecapsuleCircle.classList.remove("bg-white")
    spacecapsuleCircle.classList.remove("text-black")

    imgLaunchVehicle.classList.remove("hidden")
    imgLaunchVehicle.classList.add("flex")
    imgSpacecapsule.classList.remove("flex")
    imgSpacecapsule.classList.add("hidden")
    imgSpaceport.classList.remove("flex")
    imgSpaceport.classList.add("hidden")

    artLaunchVehicle.classList.remove("hidden")
    artLaunchVehicle.classList.add("flex")
    artSpacecapsule.classList.remove("flex")
    artSpacecapsule.classList.add("hidden")
    artSpaceport.classList.remove("flex")
    artSpaceport.classList.add("hidden")
})

spaceportCircle.addEventListener("click", function() {
    spaceportCircle.classList.add("bg-white")
    spaceportCircle.classList.remove("text-white")
    spaceportCircle.classList.add("text-black")
    launchVehicleCircle.classList.remove("bg-white")
    launchVehicleCircle.classList.remove("text-black")
    spacecapsuleCircle.classList.remove("bg-white")
    spacecapsuleCircle.classList.remove("text-black")

    imgSpaceport.classList.remove("hidden")
    imgSpaceport.classList.add("flex")
    imgSpacecapsule.classList.remove("flex")
    imgSpacecapsule.classList.add("hidden")
    imgLaunchVehicle.classList.remove("flex")
    imgLaunchVehicle.classList.add("hidden")

    artSpaceport.classList.remove("hidden")
    artSpaceport.classList.add("flex")
    artSpacecapsule.classList.remove("flex")
    artSpacecapsule.classList.add("hidden")
    artLaunchVehicle.classList.remove("flex")
    artLaunchVehicle.classList.add("hidden")
})

spacecapsuleCircle.addEventListener("click", function() {
    spacecapsuleCircle.classList.add("bg-white")
    spacecapsuleCircle.classList.remove("text-white")
    spacecapsuleCircle.classList.add("text-black")
    launchVehicleCircle.classList.remove("bg-white")
    launchVehicleCircle.classList.remove("text-black")
    spaceportCircle.classList.remove("bg-white")
    spaceportCircle.classList.remove("text-black")

    imgSpacecapsule.classList.remove("hidden")
    imgSpacecapsule.classList.add("flex")
    imgSpaceport.classList.remove("flex")
    imgSpaceport.classList.add("hidden")
    imgLaunchVehicle.classList.remove("flex")
    imgLaunchVehicle.classList.add("hidden")

    artSpacecapsule.classList.remove("hidden")
    artSpacecapsule.classList.add("flex")
    artSpaceport.classList.remove("flex")
    artSpaceport.classList.add("hidden")
    artLaunchVehicle.classList.remove("flex")
    artLaunchVehicle.classList.add("hidden")
})