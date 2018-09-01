@extends('layouts.app')
@section('content')
    <script> 
        var csrf_token = '<?php echo csrf_token(); ?>'; 
    </script>
    <div id="dashboard"></div>
@endsection