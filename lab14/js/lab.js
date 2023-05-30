// line 5 should not run if the debugger or console is open
$("#my-button").click(function() {
    let x = 15 * 4;
    debugger;
    $("#output").html("15 * 5 = " + x);
})
