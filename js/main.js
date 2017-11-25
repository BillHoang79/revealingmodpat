var people = (function() {
    var people = ['Will', 'Steve'];

    //cache DOM
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    //bind events
    $button.on('click', addPerson);
    $ul.delegate('i.del','click', deletePerson);

    render();

    function render() {
        $ul.html(Mustache.render(template, {people: people}));
    }

    function addPerson() {
        var name = (typeof value === "string") ? value : $input.val()
        people.push($input.val());
        render();
        $input.val('');
    }

    function deletePerson(event) {
        var i;
        if (typeof event === "number") {
             i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();

