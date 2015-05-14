var file = 'tmp/teams.json';

function displayTeamsWithJade(teams){
    return Q($.get("/views/team_for_render.jade")).then(function(jadeCode){
        var renderedHtml = jade.render(jadeCode, teams);
        var container = $()
        container.html(renderedHtml);
    })



    /*result.forEach(function(team){
        var tbody = $('tbody');
        var tr = $("<tr></tr>");
        var tdTeam = $("<td></td>");
        var divTeam = $("<div></div>");
        var tdDrivers = $("<td></td>");
        var teamImg = $("<img></img>");
        var p = $("<p></p>");
        var engine = $("<td></td>").append(team["engine"]);
        var drivers = team["drivers"];

        divTeam.attr("class", "")


        teamImg.attr('src', team["pic"]);
        p.attr('class', 'text-center');
        p.append(team["name"]);

        tdTeam.append(teamImg);
        tdTeam.append(p);

        drivers.forEach(function(driver, index){
            var nameP = $("<h3></h3>").append(driver['name']);
            var driverImg = $("<img></img>");
            driverImg.attr('src', driver['pic']);
            tdDrivers.append(nameP);
            tdDrivers.append(driverImg);
        });

        tr.append(tdTeam);
        tr.append(tdDrivers);
        tr.append(engine);
        tbody.append(tr);
    });*/
}

function loadJson(){
    $.get(file, displayTeamsWithJade);
}
