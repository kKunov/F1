var file = 'tmp/teams.json';

function displayTeamsWithJade(teams){
    return Q($.get("/views/team_for_render.jade")).then(function(jadeCode){
        var renderedHtml = jade.render(jadeCode, {
            teams: teams
        });
        var container = $("#teamsCont");
        container.html(renderedHtml);
    })
}

function loadJson(){
    $.get(file, displayTeamsWithJade);
}
