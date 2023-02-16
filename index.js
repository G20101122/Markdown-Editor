marked.use(markedKatex({
    throwOnError: false,
}));

$(document).ready(() => {
    code = $('#markdownInput')
    code.on('input', () => {
        $('#markdownPreview').html(DOMPurify.sanitize(marked.parse(code.val())));
        $('#markdownPreview>blockquote').addClass('blockquote');
    });
});