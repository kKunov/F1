var file = 'tmp/teams.json';

function displayDriversWithJade(teams){
    return Q($.get("/views/drivers_for_render.jade")).then(function(jadeCode){
        var renderedHtml = jade.render(jadeCode, {
            teams: teams
        });
        var container = $("#driversCont");
        container.html(renderedHtml);
    })
}

function loadJson(){
    $.get(file, displayDriversWithJade);
}
