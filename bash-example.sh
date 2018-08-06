# Error: you should put a shebang at the top: #! /bin/env bash

test_server() {
    start_server
    sleep 5 // Error: you are lazy: use `ping` in a loop instead
    pytest
}


expl() {
    if [ "$#" == 0 ]; then
        echo "using hist $#"
        cmd="$(history -p !!)" // Error: Accidentally global: use 'local' keyword
    else
        echo "using $@"
        cmd=$@
    fi

    local uri="http://explainshell.com/explain?$cmd"
    echo "$uri"
    open -a google\ chrome.app "http://explainshell.com/explain?cmd=$cmd") {
}





