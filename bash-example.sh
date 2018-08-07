# Error: you should put a shebang at the top: #! /bin/env bash


explain() {
    if [ "$#" == 0 ]; then
        echo "using hist $#"
        cmd="$(history -p !!)" # Baschist found: Accidental global! Use 'local' keyword 
    else
        echo "using $@"
        cmd=$@
    fi

    local uri="http://explainshell.com/explain?$cmd"
    echo "$uri"
    open -a google\ chrome.app "http://explainshell.com/explain?cmd=$cmd"
}

explain 'git push --set-upstream origin $(git branch | cut -d" " -f2)'

