( function ( $ ) {
	'use strict';

	var mawTilde = {
		id: 'maw-tilde',
		name: 'Mampruli tilde',
		description: 'Mampruli tilde',
		date: '2024-11-05',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~N', 'Ŋ' ],
			[ '~n', 'ŋ' ],
			[ '~O', 'Ɔ' ],
			[ '~o', 'ɔ' ]
		]
	};

	$.ime.register( mawTilde );
}( jQuery ) );
