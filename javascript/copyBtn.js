var copyButtons = document.querySelectorAll(".copy-button");
copyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var targetId = button.dataset.target;
        var code = document.getElementById(targetId).querySelector("code");
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();
    });
});