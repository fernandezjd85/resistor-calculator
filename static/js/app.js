

// Main procedure to determine changes in selects and recalculate 
// resistor value.
$( document ).ready(function() {

    var Resitance = 0;
    var ColorValue1 = $( "#digit1 option:selected").text();
    var ColorValue2 = $( "#digit2 option:selected").text();
    var ColorValue3 = $( "#digit3 option:selected").text();
    var ColorValue4 = $( "#multiplier option:selected").text().split(' ')[1];
    console.log(ColorValue4);
    
    $('#resistorValue').html(Resitance + " Ohms ");
    generateCanva(ColorValue1, ColorValue2, ColorValue3, ColorValue4);

    $("#digit1, #digit2, #digit3, #multiplier").each(function(){
        $(this).on('change', function() {
            Resitance = colletValues();
            $('#resistorValue').html(Resitance + " Ohms ");

            switch (this.id) {
                case 'digit1': 
                    ColorValue1 = $( "#" + this.id + " option:selected").text();
                    break;
                case 'digit2':
                    ColorValue2 = $( "#" + this.id + " option:selected").text();
                    break;
                case 'digit3':
                    ColorValue3 = $( "#" + this.id + " option:selected").text();
                    break;
                case 'multiplier':
                    ColorValue4 = $( "#multiplier option:selected").text().split(' ')[1];
                    break;
            }
            //console.log($( "#" + this.id + " option:selected").text());
            generateCanva(ColorValue1, ColorValue2, ColorValue3, ColorValue4);
        });
    });

    

});

// ----------------------------------------------------------
// Function to calculate la Resistor value
function colletValues(){
    var a = $('#digit1').val();
    var b = $('#digit2').val();
    var c = $('#digit3').val();
    var d = $('#multiplier').val();

    Calculation = ((a + b + c)/10) * d;
    return Calculation;
}

function generateCanva(b1Color, b2Color, b3Color, b4Color){

    // ----------------------------------------------------------
    // Canva Image to generate Resistor Interactive Bands
    var c = document.getElementById("resistorImage");
    var ctx = c.getContext("2d");

    WireWidth = 20
    WireHeight = c.height

    ResWidth = c.height * 0.2
    ResHeight = c.height * 0.8
    // ----------------------------------------------------------
    // Wire
    ctx.beginPath();
    ctx.rect((c.width * 0.5) - WireWidth/2, 0, WireWidth, WireHeight);
    ctx.fillStyle = "#cccccc";
    ctx.fill();
    // ----------------------------------------------------------
    // Resistor
    ctx.beginPath();
    ctx.rect(c.width * 0.1, c.height * 0.1, ResWidth , ResHeight);
    ctx.fillStyle = "#FABE8E";
    ctx.fill();
    ctx.stroke();
    // ----------------------------------------------------------
    // Color Bands
    var offset = 90;
    var BandSeparator = 65;
    var bandWidth = 20;
    var BandBorder = 1;

    // Digit 1
    ctx.beginPath();
    ctx.rect(c.width * 0.1 + BandBorder, offset, ResWidth - BandBorder-1, bandWidth);
    ctx.fillStyle = b1Color;
    ctx.fill();

    // Digit 2
    ctx.beginPath();
    ctx.rect(c.width * 0.1 + BandBorder, offset + BandSeparator, ResWidth - BandBorder-1 , bandWidth);
    ctx.fillStyle = b2Color;
    ctx.fill();

    // Digit 3
    ctx.beginPath();
    ctx.rect(c.width * 0.1 + BandBorder, offset + BandSeparator*2, ResWidth - BandBorder-1, bandWidth);
    ctx.fillStyle = b3Color;
    ctx.fill();

    // Multiplier
    ctx.beginPath();
    ctx.rect(c.width * 0.1 + BandBorder, offset + BandSeparator*3, ResWidth - BandBorder-1, bandWidth);
    ctx.fillStyle = b4Color;
    ctx.fill();
    

}
