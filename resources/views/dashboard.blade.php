@extends('layouts.app')
@section('content')
    <script> 
        var csrf_token = '<?php echo csrf_token(); ?>';

        function strToSlug(string) {
            string = string.replace(/ /g, "-");
            return string;
        }

    </script>
    <div id="dashboard"></div>
  
@endsection