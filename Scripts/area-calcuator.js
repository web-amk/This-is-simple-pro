function calculateTriangleArea(){
      // Get triangle base value
      const baseField = document.getElementById('triangle-base');
      const baseValueText = baseField.value;
      const base = parseFloat(baseValueText);
      console.log(base);


      // Get triangle height value

      const heightField = document.getElementById('triangle-height');
      const heightValueText = heightField.value;
      const height = parseFloat(heightValueText);
      console.log(height);


      const area = 0.5 * base * height;
      console.log(area);


      // Show triangle area 

      const areaSpan = document.getElementById('triangle-area');
      areaSpan.innerText = area;

}


function calculateRectangleArea(){
      // Get rectangle width
      const widthField = document.getElementById('rectangle-width');
      const widthValueText = widthField.value;
      const width = parseFloat(widthValueText);
      console.log(width);


      // Get rectamgle length
      const lengthField = document.getElementById('rectangle-length');
      const lengthValueText = lengthField.value;
      const length = parseFloat(lengthValueText);
      console.log(length);

      // calculate area 
      const area = width * length;


      // Show rectangle area
      const rectangleAreaSpan = document.getElementById('rectangle-area');
      rectangleAreaSpan.innerText = area;



}
