var file = 'tmp/results.json';

function displayTeamsWithJade(results){
    return Q($.get("/views/race_for_render.jade")).then(function(jadeCode){
        var renderedHtml = jade.render(jadeCode, {
            results: results[4]["placed"]
        });
        var container = $("#rCont");
        container.html(renderedHtml);
    })
}

function loadJson(){
    $.get(file, displayTeamsWithJade);
}
