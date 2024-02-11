import * as React from 'react';

//console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
    return (
    <html>
        <head>
            <title>welcome</title>
            <link href="/public/static/main.css" rel="stylesheet" />
        </head>
        <body>
            <a href="/">[ home ]</a>
            <a href="/about">[ about ]</a>
            <a href="/test">[ test ]</a>
            <hr />
            <h1>Hello!</h1>
            <div id="app"></div>
        </body>
    </html>
    );
}
