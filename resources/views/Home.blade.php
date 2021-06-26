<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Tech Blog</title>
    
    <!-- for favicon -->
    {{-- <link rel="shortcut icon" type="image/x-icon" href="{{ asset('img/logo/edusms_favicon.png') }}" /> --}}

    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Font Awesome -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
    
    <link rel="stylesheet" href="{{ asset('theme/theme_styles.css') }}" >
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" >

    <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous" defer ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" defer></script>
    <script src="{{ asset('theme/theme_app.js') }}" defer ></script>
    <script src="https://cdn.startbootstrap.com/sb-forms-latest.js" defer ></script>
    <script src="{{ asset('js/app.js') }}" defer ></script>

  </head>
  <body >
    <div id="app"></div>
  </body>
</html>
