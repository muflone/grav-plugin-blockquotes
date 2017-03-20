(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            Instance.addButton({
                notices: {
                    identifier: 'blockquotes',
                    title: 'Blockquotes',
                    label: '<i class="fa fa-fw fa-quote-right"></i>',
                    modes: ['gfm', 'markdown'],
                    children: [
                        {
                            'blockquotes-warning': {
                                identifier: 'blockquotes-warning',
                                title: 'Blockquotes Warning',
                                label: '<i class="fa fa-fw fa-quote-right blockquotes-warning"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.blockquotes-warning', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '>>> $1', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'blockquotes-error': {
                                identifier: 'blockquotes-error',
                                title: 'Blockquotes Error',
                                label: '<i class="fa fa-fw fa-quote-right blockquotes-error"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.blockquotes-error', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '>>>> $1', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'blockquotes-note': {
                                identifier: 'blockquotes-note',
                                title: 'Blockquotes Note',
                                label: '<i class="fa fa-fw fa-quote-right blockquotes-note"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.blockquotes-note', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '>>>>> $1', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'blockquotes-tip': {
                                identifier: 'blockquotes-tip',
                                title: 'Blockquotes Tip',
                                label: '<i class="fa fa-fw fa-quote-right blockquotes-tip"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.blockquotes-tip', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '>>>>>> $1', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        }
                    ]
                }
            });
        });
    });
})(jQuery);

