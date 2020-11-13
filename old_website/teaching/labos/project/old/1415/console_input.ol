include "console.iol"

main
{
	registerForInput@Console()();
	while( command != "close" ){
		println@Console( "Insert new command" )();
		print@Console( "> " )();
		in( command );
		println@Console( "Received command: " + "\"" + command + "\"" )()
	}
}