/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'forms' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' },
		{ name: 'about' }
	];

	// The default plugins included in the basic setup define some buttons that
	// are not needed in a basic editor. They are removed here.
	config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript';

	// Dialog windows are also simplified.
	config.removeDialogTabs = 'link:advanced';

	//local version:
	//config.contentsCss = ['/secure-bsc-admin/ckeditor/bootstrap.css', '/secure-bsc-admin/css/custom.css'];

	//CloudCMS hosted version:
	//config.contentsCss = ['/ckeditor/bootstrap.css', '/css/custom.css'];
	if (environmentString == "f2472b6e-e1f1-4c52-9eed-f7797ff8e908-hosted.cloudcms.net") {
	    config.contentsCss = ['/ckeditor/bootstrap.css', '/css/custom.css'];
	} else {
	    config.contentsCss = ['/secure-bsc-admin/ckeditor/bootstrap.css', '/secure-bsc-admin/css/custom.css'];

	}
    
};
