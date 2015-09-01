registerShortcut("Hide all others",
		"Hide all others",
		"Meta+Ctrl+.",
		function() {
		var clients = workspace.clientList();
		for (var i=0; i<clients.length; i++) {
		if( true != clients[i].active ) 
		{
		clients[i].minimized = true;
		}
		}
		});

