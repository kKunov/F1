var file = 'tmp/results.json';

function displayTeamsWithJade(results){
    return Q($.get("/views/ps_and_q_for_render.jade")).then(function(jadeCode){
        var renderedHtml = jade.render(jadeCode, {
            results: results[1]["placed"]
        });
        var container = $("#p2Cont");
        container.html(renderedHtml);
    })
}

function loadJson(){
    $.get(file, displayTeamsWithJade);
}
