var popupS = require('popups');

popupS.alert({
    content: 'Hello World!'
});

// popupS.window({
//     mode: 'alert',
//     content: 'Hey'
// });

// popupS.alert({
//     title:   'I am an',
//     content: 'Alert'
// });

// popupS.confirm({
//     content:     '<b>Do you like what you see?</b>',
//     labelOk:     'Yes',
//     labelCancel: 'No',
//     onSubmit: function() {
//         console.log(':)');
//     },
//     onClose: function() {
//         console.log(':(');
//     }
// });

// popupS.prompt({
//     content:     'What is your name?',
//     placeholder: '>>>',
//     onSubmit: function(val) {
//         if(val) {
//             popupS.alert({
//                 content: 'Hello, ' + val
//             });
//         } else {
//             popupS.alert({
//                 content: ':('
//             });
//         }
//     }
// });

// popupS.modal({
//     title:   'Himalaya',
//     content: {
//         tag: 'img#himalaya.picture',
//         src: 'http://static.hdw.eweb4.com/media/wallpapers_1920x1080/nature/1/1/himalaya-nature-hd-wallpaper-1920x1080-6944.jpg'
//     }
// });

// popupS.ajax({
//     title:   'Himalaya',
//     ajax: {
//         url: 'http://static.hdw.eweb4.com/media/wallpapers_1920x1080/nature/1/1/himalaya-nature-hd-wallpaper-1920x1080-6944.jpg'
//     }
// });

// popupS.window({
//     mode: 'alert'|'confirm'|'prompt'|'modal'|'modal-ajax',
//     title: 'Title',
//     content : 'Text'|'<div>html</div>'|{tag : 'span#id.class'},
//     className : 'additionalClass',  // for additional styling, gets append on every popup div
//     placeholder : 'Input Text',     // only available for mode: 'prompt'
//     ajax : {                        // only available for mode: 'modal-ajax'
//         url : 'http://url.com',
//         post : true,
//         str : 'post=true'
//     },
//     onOpen: function(){},      // gets called when popup is opened
//     onSubmit: function(val){}, // gets called when submitted. val as an paramater for prompts
//     onClose: function(){}      // gets called when popup is closed
// });

// popupS.window({
//     additionalBaseClass: '',            // classNames, that gets appended to the base
//     additionalButtonHolderClass: '',    // classNames, that gets appended to the button holder
//     additionalButtonOkClass: '',        // classNames, that gets appended to the ok button
//     additionalButtonCancelClass: '',    // classNames, that gets appended to the cancel button
//     additionalCloseBtnClass: '',        // classNames, that gets appended to the close button
//     additionalFormClass: '',            // classNames, that gets appended to the form
//     additionalOverlayClass: '',         // classNames, that gets appended to the overlay
//     additionalPopupClass: '',           // classNames, that gets appended to the popup
//     appendLocation: document.body,      // DOM Element, where the popup should sit
//     closeBtn: '&times;',                // HTML String, to use for the close button
//     flagBodyScroll: false,              // should the body be scrollable
//     flagButtonReverse: false,           // should the buttons be reversed
//     flagCloseByEsc: true,               // ability to clse with the esc key
//     flagCloseByOverlay: true,           // ability to close with click on the overlay
//     flagShowCloseBtn: true,             // should the close button be displayed
//     labelOk: 'OK',                      // label for the ok button
//     labelCancel: 'Cancel',              // label for the cancel button
//     loader: 'spinner',                  // classname for spinner to use, take a look at the included css file for the possiblities
//     zIndex: 10000                       // default z-index
// });

// popupS.alert({
//     content: {
//
//         tag: 'div#id.class.class2',
//         css: {
//             width: '100px'
//         },
//         html: '<h1>Hello</h1>',
//         children:[
//             {
//                 tag: 'label',
//                 text: 'test',
//                 htmlFor: 'input',
//                 css: {
//                     width: '50%'
//                 }
//             },
//             {
//                 tag: 'input#input',
//                 type: 'checkbox',
//                 css: {
//                     width: '50%'
//                 }
//             }
//         ]
//
//     }
// });
