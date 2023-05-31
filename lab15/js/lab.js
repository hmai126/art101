// 
function pokemonAPI() {
    console.log("Clicked!");
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/totodile/",
        type: "GET",
        data: {},
    })
    .done(function(data){
        // grab and print an image of totodile's sprite from the website
        var imageURL = data.sprites.front_default;
        console.log(imageURL);
        $("#output").html("<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png'><br>");

        // obtain and print totodile's name from the API
        var pkmnName = data.forms[0].name;
        console.log(pkmnName);
        $("#output").append("name: " + pkmnName + "<br>");

        // obtain and print totodile's pokedex number from the API
        var pkmnID = data.id;
        console.log("pokedex id: " + pkmnID);
        $("#output").append("pokedex id: " + pkmnID + "<br>");

        // obtain and print totodile's type from the API
        var type = data.types[0].type.name;
        console.log(type);
        $("#output").append("type: " + type + "<br>");

        // obtain and print totodile's list of abilities from the API
        $("#output").append("abilities: ");
        // loop through the list of totodile's abilities
        for (var i = 0; i < data.abilities.length; i++) {
            var ability = data.abilities[i].ability.name;
            // if an ability is classified as a hidden ability for that pokemon, print that
            // it is a hidden ability
            if (data.abilities[i].is_hidden == true) {
                console.log(ability + " (this is Totodile's hidden ability)");
                $("#output").append(ability + " (this is Totodile's hidden ability)");
            }
            else {
                console.log(ability);
                $("#output").append(ability + ", ");
            }
        }

        // obtain and print totodile's base stats
        $("#output").append("<br>base stats: <br>");
        // loop through the list of base stats and obtain the stat name and
        // the number connected to the stat
        for (var i = 0; i < data.stats.length; i++) {
            var statName = data.stats[i].stat.name;
            console.log(statName);
            var baseStat = data.stats[i].base_stat;
            console.log(baseStat);
            $("#output").append("&emsp;" + statName + ": " + baseStat + "<br>");
        }
    })
}

// click to run the pokemonAPI function
$("#activate").click(pokemonAPI);