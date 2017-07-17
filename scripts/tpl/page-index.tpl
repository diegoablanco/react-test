<!DOCTYPE html>
<html lang="en">
<head>
    <title><%=title%></title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    <script>
        function getParameterByName(name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        var coidVal = getParameterByName('COID');
        var envVal = getParameterByName('ENV');
        var mock = getParameterByName('MOCK');
        var proxy = getParameterByName('PROXY');
        if (coidVal) {localStorage.COID = coidVal;}
        if (envVal) {localStorage.ENV = envVal;}
        if (mock) {localStorage.MOCK = mock;}
        if (proxy) {localStorage.PROXY = proxy;}
        if (!localStorage.COID) {localStorage.COID = 'SABR';}
        var COID = localStorage.COID;
    <%if(forEnv === 'PROD') {%>
        var link = document.createElement('link');
        link.id = 'main-styles';
        link.rel = 'stylesheet';
        link.href = '/COID/' + COID + '/css/main.css';
        document.head.appendChild(link);
    <%}%>
    </script>

    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:300,400,700|Material+Icons" rel="stylesheet">
</head>
<body>

<div id="app"></div>
<%if(enableSentry) {%>
<script src="https://cdn.ravenjs.com/3.10.0/raven.min.js" crossorigin="anonymous"></script>
<script>
    Raven.config('<%=sentryToken%>').install();
</script>
<%}%>
<script src="/js/bundle.js"></script>
<script src="https://www.google.com/recaptcha/api.js"></script>

</body>
</html>
