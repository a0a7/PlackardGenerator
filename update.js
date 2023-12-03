const title = document.getElementById('title');
const surname = document.getElementById('name');
const pronounc = document.getElementById('pronounc');

const titleText = document.getElementById('titleText');
const nameText = document.getElementById('nameText');
const pText = document.getElementById('pronounciationText');


title.addEventListener('change', function() {
  let valueString = ""
  const selectedValue = title.value;
  if (selectedValue == "option1") { valueString = "Rep." }
  else if (selectedValue == "option2") { valueString = "Sen." }
  else if (selectedValue == "option3") { valueString = "MP" }
  else if (selectedValue == "option4") { valueString = "MEP" }
  else { valueString = "" }
  titleText.innerHTML = valueString;
});
surname.addEventListener('keyup', function() {
    const selectedValue = surname.value;
    nameText.innerHTML = selectedValue;
  });

pronounc.addEventListener('keyup', function() {
    const selectedValue = pronounc.value;
    pText.innerHTML = selectedValue;
});

color.addEventListener('change', function() {
    const selectedValue = color.value;
    console.log("color changed to " + selectedValue)

    const displayTextElements = document.querySelectorAll('.displayText');
    let colorString = "";
    if (selectedValue == "option2") {
        colorString = "#01173b";
    }
    else if (selectedValue == "option3") {
        colorString = "#0a013b";
    }
    else { 
        colorString = "#000000";
    }
    console.log("that is " + colorString)
    displayTextElements.forEach(element => {
        element.style.color = colorString;
    });
});

positioning.addEventListener('change', function() {
    const selectedValue = positioning.value;

    const displayTextElements = document.querySelectorAll('.displayText');
    if (selectedValue == "option1") {
        document.getElementById("userInfo").style.alignItems = "center";
        document.getElementById("userInfo").style.justifyContent = "center";
        document.getElementById("nameText").style.display = "inline-block";
        document.getElementById("nameText").style.display = "inline-block";
        document.getElementById("pronounciationText").style.paddingTop = "0";
        document.getElementById("titleText").style.top = "-15px";


    }
    else if (selectedValue == "option2") {
        document.getElementById("userInfo").style.alignItems = "normal";
        document.getElementById("userInfo").style.justifyContent = "center";
        document.getElementById("nameText").style.display = "inline-block";
        document.getElementById("nameText").style.display = "inline-block";
        document.getElementById("pronounciationText").style.paddingTop = "0";
        document.getElementById("titleText").style.top = "-30px";


    }
    else { 
        document.getElementById("userInfo").style.alignItems = "normal";
        document.getElementById("userInfo").style.justifyContent = "center";
        document.getElementById("nameText").style.display = "block";
        document.getElementById("nameText").style.display = "block";
        document.getElementById("pronounciationText").style.paddingTop = "10px";
        document.getElementById("titleText").style.top = "0";
    }
    console.log("that is " + colorString)
    displayTextElements.forEach(element => {
        element.style.color = colorString;
    });
});

function screenshot() {
    html2canvas(userInfo,{backgroundColor:"white"}).then(
        function (canvas) {
            var dataURL = canvas.toDataURL();

            var link = document.createElement('a');
            link.href = dataURL;
            link.download = 'plackard.png';

            link.click();
    })
}

/*   <label for="folding">Folding Guide:</label>
  <select id="folding" name="folding">
    <option value="option1">None</option>
    <option value="option2">Quarters</option>
    <option value="option3">Interlocking</option>
  </select><br> 
    <label for="font">Text Font:</label>
  <select id="font" name="font">
    <option value="option1">Crimson Text (Serif)</option>
    <option value="option2">Computer Modern (Serif)</option>
    <option value="option3">Livvic (Sans-Serif)</option>
  </select><br>
  */