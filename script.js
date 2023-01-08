const setBg = () => {
    const color1 = Math.floor(Math.random()*16777215).toString(16);
    const color2 = Math.floor(Math.random()*16777215).toString(16);
    const color3 = Math.floor(Math.random()*16777215).toString(16);
    const color4 = Math.floor(Math.random()*16777215).toString(16);
    const color5 = Math.floor(Math.random()*16777215).toString(16);
    const color6 = Math.floor(Math.random()*16777215).toString(16);



    document.getElementById('color-1').style.backgroundColor = "#" + color1;
    document.getElementById('hex-1').textContent = "#" + color1;

    document.getElementById('color-2').style.backgroundColor = "#" + color2;
    document.getElementById('hex-2').textContent = "#" + color2;

    document.getElementById('color-3').style.backgroundColor = "#" + color3;
    document.getElementById('hex-3').textContent = "#" + color3;

    document.getElementById('color-4').style.backgroundColor = "#" + color4;
    document.getElementById('hex-4').textContent = "#" + color4;

    document.getElementById('color-5').style.backgroundColor = "#" + color5;
    document.getElementById('hex-5').textContent = "#" + color5;

    document.getElementById('color-6').style.backgroundColor = "#" + color6;
    document.getElementById('hex-6').textContent = "#" + color6;
  }
  
btn.addEventListener("click", setBg);