registerShortcut("Minizime all but active.",
		"Minizime all but active.",
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

